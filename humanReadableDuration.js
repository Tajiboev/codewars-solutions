// human readable duration format

function formatDuration(seconds) {
  if (seconds === 0) return "now";
  let min = 60,
    hour = 3600,
    day = hour * 24,
    year = day * 365;

  let countY = 0,
    countD = 0,
    countH = 0,
    countM = 0,
    countS = 0;

  while (seconds >= year && seconds > 0) {
    seconds = seconds - year;
    countY++;
  }
  while (seconds < year && seconds >= day) {
    seconds = seconds - day;
    countD++;
  }
  while (seconds < day && seconds >= hour) {
    seconds = seconds - hour;
    countH++;
  }
  while (seconds < hour && seconds >= min) {
    seconds = seconds - min;
    countM++;
  }
  if (seconds < min) {
    countS = seconds;
  }

  countY = countY > 1 ? `${countY} years` : countY < 1 ? "" : "1 year";
  countD = countD > 1 ? `${countD} days` : countD < 1 ? "" : "1 day";
  countH = countH > 1 ? `${countH} hours` : countH < 1 ? "" : "1 hour";
  countM = countM > 1 ? `${countM} minutes` : countM < 1 ? "" : "1 minute";
  countS = countS > 1 ? `${countS} seconds` : countS < 1 ? "" : "1 second";

  let arr = new Array(countY, countD, countH, countM, countS).filter(
    val => val !== ""
  );

  switch (arr.length) {
    case 0:
      return 0;
    case 1:
      return arr[0];
    case 2:
      return `${arr[0]} and ${arr[1]}`;
    case 3:
      return `${arr[0]}, ${arr[1]} and ${arr[2]}`;
    case 4:
      return `${arr[0]}, ${arr[1]}, ${arr[2]} and ${arr[3]}`;
    case 5:
      return `${arr[0]}, ${arr[1]}, ${arr[2]}, ${arr[3]} and ${arr[4]}`;
  }

  return arr;
}

console.log(formatDuration(120));
