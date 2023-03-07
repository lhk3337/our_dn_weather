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
    let hours = new Date().getHours();
    let result;
    if (hours < 2) {
      result = 23;
    } else {
      result = hours - ((hours + 1) % 3);
    }

    return result < 10 ? result.toString().padStart(2, "0") + "00" : result.toString() + "00";
  }

  let queryParams = "?" + encodeURIComponent("serviceKey") + "=" + process.env.SERVICE_KEY;
  queryParams += "&" + encodeURIComponent("pageNo") + "=" + encodeURIComponent("1"); /**/
  queryParams += "&" + encodeURIComponent("numOfRows") + "=" + encodeURIComponent("1000"); /**/
  queryParams += "&" + encodeURIComponent("dataType") + "=" + encodeURIComponent("JSON"); /**/
  queryParams +=
    "&" +
    encodeURIComponent("base_date") +
    "=" +
    encodeURIComponent(new Date().toISOString().slice(0, 10).replace(/-/g, "")); /*오늘 날짜를 yyyymmdd로 표현 */
  queryParams += "&" + encodeURIComponent("base_time") + "=" + encodeURIComponent(times()); /* 예보 발표 시간  */
  queryParams += "&" + encodeURIComponent("nx") + "=" + encodeURIComponent(x); /**/
  queryParams += "&" + encodeURIComponent("ny") + "=" + encodeURIComponent(y); /**/

  return (await fetch(url + queryParams)).json();
};
export default apiUrl;
