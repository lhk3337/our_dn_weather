const apiUrl = async (x: number, y: number) => {
  const url = "http://apis.data.go.kr/1360000/VilageFcstInfoService_2.0/getUltraSrtNcst"; /*URL*/
  function nowHour() {
    // 날씨 api 데이터가 정시 기준으로 40분 이후에 새로 업데이트 함
    // 40분전이면 1시간 전 시간을, 40분보다 크면 현재 시간을 가져온다.
    const min = new Date().getMinutes();
    if (min < 40) {
      const time = (new Date().getHours() - 1).toString().padStart(2, "0");
      if (time === "-1") {
        //00:00일때 처리하기
        return "23:00";
      } else {
        return time + "00";
      }
    } else {
      const time = new Date().getHours().toString().padStart(2, "0");
      return time + "00";
    }
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
  queryParams += "&" + encodeURIComponent("base_time") + "=" + encodeURIComponent(nowHour()); /* 예보 발표 시간  */
  queryParams += "&" + encodeURIComponent("nx") + "=" + encodeURIComponent(x); /**/
  queryParams += "&" + encodeURIComponent("ny") + "=" + encodeURIComponent(y); /**/

  return (await fetch(url + queryParams)).json();
};
export default apiUrl;
