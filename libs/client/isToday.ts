export function isToday() {
  const date = new Date();
  const week = ["일요일", "월요일", "화요일", "수요일", "목요일", "금요일", "토요일"];
  return `${date.getMonth() + 1}월 ${date.getDate()}일 ${week[date.getDay()]}`;
}
// x월 x일 x요일 리턴
