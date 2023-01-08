import { createServer } from "http";

const server = createServer((request, response) => {
  switch (request.url) {
    case "/":
      Result(response, 200, { message: "Hello World" });
      break;
    case "/healthcheck":
      Result(response, 200, { status: "OK" });
      break;
    case "/session/next":
      Result(response, 200, nextSession());
      break;
    default:
      Result(response, 404, { error: 404, message: "Not Found" });
      break;
  }
});

server.listen(3000, () => {
  console.log("Server listening on port 3000");
});

function Result(response, code, data) {
  response.setHeader("Access-Control-Allow-Origin", "*");
  response.writeHead(code, { "Content-Type": "application/json" });
  response.end(
    JSON.stringify({
      _id: uuid(),
      ...data,
    })
  );
}

function uuid() {
  // format: version-epoch-random
  const epoch = Date.now();
  return `1-${epoch}-${"x".repeat(32)}`.replace(/[x]/g, (c) => {
    let r = (Math.random() * 16) | 0,
      v = c == "x" ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
}

function nextSession(day = 6, hour = 18, minute = 0) {
  // get current epoch time
  const now = new Date().getTime();

  // get epoch of hour and minute of next session
  const nextSession = new Date().setUTCHours(hour, minute, 0, 0);

  // get difference between now and next session in milliseconds
  const difference = nextSession - now;

  // calculate hours, minutes and seconds
  const hours = Math.floor(
    (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((difference % (1000 * 60)) / 1000);
  const milliseconds = Math.floor(difference % 1000);

  // is it Saturday?
  const isSaturday = new Date().getDay() === day;

  // if it is Saturday, check if it is after 18:00 UTC
  const isAfterSession = isSaturday && difference < 0;

  // if it is not Saturday, how many days until Saturday?
  let daysUntilSaturday = isSaturday ? 0 : day - new Date().getDay();

  // if result is negative, add 7 days
  if (daysUntilSaturday < 0) daysUntilSaturday = daysUntilSaturday + 7;

  // return result
  return {
    epoch: nextSession,
    isSaturday,
    days: isAfterSession ? daysUntilSaturday + 6 : daysUntilSaturday,
    hours: isAfterSession ? hours + 24 : hours,
    minutes: isAfterSession ? minutes + 60 : minutes,
    seconds: isAfterSession ? seconds + 60 : seconds,
    milliseconds: isAfterSession ? milliseconds + 1000 : milliseconds,
  };
}
