const apiUrl = async (x: number, y: number) => {
  const url = "http://apis.data.go.kr/1360000/VilageFcstInfoService_2.0/getVilageFcst"; /*URL*/
  // function nowHour() {
  //   // 초단기 예보 날씨 api 데이터가 정시 기준으로 45분 이후에 새로 업데이트 함
  //   // 45분전이면 1시간 전 시간을, 45분보다 크면 현재 시간을 가져온다.
  //   const min = new Date().getMinutes();

  //   if (min < 45) {
  //     const time = (new Date().getHours() - 1).toString().padStart(2, "0");
  //     if (time === "-1") {
  //       //00:00일때 처리하기
  //       return "23:30";
  //     } else {
  //       return time + "30";
  //     }
  //   } else {
  //     const time = new Date().getHours().toString().padStart(2, "0");
  //     return time + "30";
  //   }
  // }

  function times() {
    const hours = Number(new Date().toLocaleString("en-GB", { hour: "numeric", timeZone: "Asia/Seoul" } as any));

    let result;
    if (hours < 2) {
      result = 23;
    } else {
      result = hours - ((hours + 1) % 3);
    }
    return result < 10 ? result.toString().padStart(2, "0") + "00" : result.toString() + "00";
  }

  const getToday = () => {
    // const curr = new Date();
    // const utc = curr.getTime() + curr.getTimezoneOffset() * 60 * 1000;
    // const KR_TIME_DIFF = 9 * 60 * 60 * 1000;
    // const date = new Date(utc + KR_TIME_DIFF);
    const date = new Date();
    const year = new Date().toLocaleString("en-GB", { year: "numeric", timeZone: "Asia/Seoul" } as any);
    const month = (1 + date.getMonth()).toString().padStart(2, "0");

    let day;
    if (times() === "2300") {
      day = (date.getDate() - 1).toString().padStart(2, "0");
    } else {
      day = date.getDate().toString().padStart(2, "0");
    }

    return `${year}${month}${day}`;
  };

  let queryParams = "?" + encodeURIComponent("serviceKey") + "=" + process.env.SERVICE_KEY;
  queryParams += "&" + encodeURIComponent("pageNo") + "=" + encodeURIComponent("1"); /**/
  queryParams += "&" + encodeURIComponent("numOfRows") + "=" + encodeURIComponent("1000"); /**/
  queryParams += "&" + encodeURIComponent("dataType") + "=" + encodeURIComponent("JSON"); /**/
  queryParams +=
    "&" + encodeURIComponent("base_date") + "=" + encodeURIComponent(getToday()); /*오늘 날짜를 yyyymmdd로 표현 */
  queryParams += "&" + encodeURIComponent("base_time") + "=" + encodeURIComponent(times()); /* 예보 발표 시간  */
  queryParams += "&" + encodeURIComponent("nx") + "=" + encodeURIComponent(x); /**/
  queryParams += "&" + encodeURIComponent("ny") + "=" + encodeURIComponent(y); /**/

  return (await fetch(url + queryParams)).json();
};
export default apiUrl;
