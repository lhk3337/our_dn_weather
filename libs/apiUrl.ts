const apiUrl = async (x: number, y: number) => {
  const url = "http://apis.data.go.kr/1360000/VilageFcstInfoService_2.0/getUltraSrtNcst"; /*URL*/

  let queryParams = "?" + encodeURIComponent("serviceKey") + "=" + process.env.SERVICE_KEY;
  queryParams += "&" + encodeURIComponent("pageNo") + "=" + encodeURIComponent("1"); /**/
  queryParams += "&" + encodeURIComponent("numOfRows") + "=" + encodeURIComponent("1000"); /**/
  queryParams += "&" + encodeURIComponent("dataType") + "=" + encodeURIComponent("JSON"); /**/
  queryParams +=
    "&" +
    encodeURIComponent("base_date") +
    "=" +
    encodeURIComponent(new Date().toISOString().slice(0, 10).replace(/-/g, "")); /*오늘 날짜를 yyyymmdd로 표현 */
  queryParams += "&" + encodeURIComponent("base_time") + "=" + encodeURIComponent("0600"); /**/
  queryParams += "&" + encodeURIComponent("nx") + "=" + encodeURIComponent(x); /**/
  queryParams += "&" + encodeURIComponent("ny") + "=" + encodeURIComponent(y); /**/

  return (await fetch(url + queryParams)).json();
};
export default apiUrl;
