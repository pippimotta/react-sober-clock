const dt = new Date();
const now = dt.toLocaleString();
function getTimeDiff(from, to) {
  let ms = to.getTime() - from.getTime();
  let days = Math.floor(ms / (1000 * 60 * 60 * 24));
  return days;
}

function checkLeapYear(year) {
  if ((0 === year % 4 && 0 !== year % 100) || 0 === year % 400) return true;
  else return false;
}

function getYearData() {
  let yearData = {};
  const year = dt.getFullYear();
  const isLeap = checkLeapYear(year);
  const yearBegin = new Date(`01/01/${year}`);
  const yearEnd = new Date(`12/31/${year}`);
  const today = new Date(now.split(" ")[0]);
  const passedDays = getTimeDiff(yearBegin, today);
  const passedPer = isLeap
    ? `${((passedDays / 365) * 100).toFixed(2)}%`
    : `${((passedDays / 366) * 100).toFixed(2)}%`;
  const remainedDay = getTimeDiff(today, yearEnd);
  yearData = { time: year, passedPer: passedPer, remained: remainedDay, display:'days' };
  return yearData;
}

function getMonthData() {
  let monthData = {};
  const year = dt.getFullYear();
  const isLeap = checkLeapYear(year);
  const monthDict = {
    0: ["January", 31],
    1: isLeap ? ["February", 29] : ["February", 28],
    2: ["March", 31],
    3: ["April", 30],
    4: ["May", 31],
    5: ["June", 30],
    6: ["July", 31],
    7: ["August", 31],
    8: ["September", 30],
    9: ["October", 31],
    10: ["November", 30],
    11: ["December", 31]
  };
  const month = monthDict[dt.getMonth()][0];
  const passedDay = dt.getDate();
  const per = ((passedDay / monthDict[dt.getMonth()][1]) * 100).toFixed(2);
  const passedPer = `${per}%`;
  const remainedDay = monthDict[dt.getMonth()][1] - passedDay;
  monthData = { time: month, passedPer: passedPer, remained: remainedDay, display:'days' };
  return monthData;
}

function getWeekData() {
  let weekData = {};
  const hour = dt.getHours();
  const passedDay = dt.getDay() === 0 ? 7 : dt.getDay();
  const passedPer = `${(
    (100 * ((passedDay - 1) * 24 + hour)) /
    (24 * 7)
  ).toFixed(2)}%`;
  const remainedDay = 7 - passedDay;
  weekData = { time: "this week", passedPer: passedPer, remained: remainedDay,display:'days' };
  return weekData;
}

function getHourData() {
  let hourData = {};
  const hour = dt.getHours();
  const minutes = dt.getMinutes();
  const passedTime = hour * 60 + minutes;
  const passedPer = `${((passedTime / (24 * 60)) * 100).toFixed(2)}%`;
  const remainedHour = (24 - (hour + minutes / 60)).toFixed(1);
  hourData = { time: "this day", passedPer: passedPer, remained: remainedHour,display:'hours'};
  return hourData;
}

export { getYearData, getMonthData, getWeekData, getHourData };
