import express from "express";
import cors from "cors";
import compression from "compression";
import morgan from "morgan";

const app = express();
const port = 3000;

app.use(cors());
app.use(compression());
app.use(morgan());

app.get("/", (request, response) => {
  response.send({
    uuid: uuid(),
    message: "Hello World",
  });
});

app.get("/healthcheck", (request, response) => {
  response.send({
    uuid: uuid(),
    status: "OK",
    responseTime: express.responseTime(),
  });
});

app.get("/session/next", (request, response) => {
  response.send({
    uuid: uuid(),
    ...nextSession(),
  });
});

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});

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
