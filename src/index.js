import express from "express";
import cors from "cors";
import compression from "compression";
import morgan from "morgan";
import { existsSync, readdirSync } from "fs";

const app = express();
const port = 3000;

app.use(cors());
app.use(compression());
app.use(morgan());

app.get("/", (request, response) => {
  response.json({
    uuid: uuid(),
    message: "Hello World",
  });
});

app.get("/healthcheck", (request, response) => {
  response.json({
    uuid: uuid(),
    status: "OK",
    responseTime: express.responseTime(),
  });
});

app.get("/session/next", (request, response) => {
  response.json({
    uuid: uuid(),
    ...nextSession(),
  });
});

app.get("/loadouts", (request, response) => {
  response.json({
    uuid: uuid(),
    categories: getLoadoutCategories(),
  });
});

app.get("/loadouts/:category", (request, response) => {
  const loadouts = getLoadouts(request.params.category);

  if (loadouts === 404) {
    response.status(404).json({
      uuid: uuid(),
      message: "Category not found",
    });
  } else {
    response.json({
      uuid: uuid(),
      category: request.params.category,
      loadouts: loadouts,
    });
  }
});

app.get("/loadouts/:category/:id.sqf", async (request, response) => {
  const loadout = await getLoadout(request.params.category, request.params.id);

  if (loadout === 404) {
    response.status(404).json({
      uuid: uuid(),
      message: "Loadout not found",
    });
  } else {
    // convert loadout to SQF syntax
    const loadoutSqf = loadoutJsonToSqf(loadout);

    response.send(loadoutSqf);
  }
});

app.get("/loadouts/:category/:id", async (request, response) => {
  const loadout = await getLoadout(request.params.category, request.params.id);

  if (loadout === 404) {
    response.status(404).json({
      uuid: uuid(),
      message: "Loadout not found",
    });
  } else {
    response.json({
      uuid: uuid(),
      ...loadout,
    });
  }
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

async function getLoadout(category, id) {
  // get loadout path
  const loadout = `./data/loadouts/${category}/${id}.js`;

  // does the loadout exist?
  if (existsSync(`./src/${loadout}`)) {
    // if so, return loadout by evaluating the file
    const loadoutData = await import(loadout);

    return {
      ...loadoutData.default,
      category,
      id,
    };
  } else {
    // if not, return 404
    return 404;
  }
}

function loadoutJsonToSqf(loadout) {
  let sqf = `// loadout generated from api.uagpmc.com/loadouts/${loadout.category}/${loadout.id}\n`;

  // strip unit of everything
  sqf += `player setUnitLoadout (configFile >> "EmptyLoadout");\n`;

  // add uniform
  if (loadout.uniform) sqf += `player forceAddUniform "${loadout.uniform}";\n`;
  // add vest
  if (loadout.vest) sqf += `player addVest "${loadout.vest}";\n`;
  // add backpack
  if (loadout.backpack) sqf += `player addBackpack "${loadout.backpack}";\n`;
  // add headgear
  if (loadout.headgear) sqf += `player addHeadgear "${loadout.headgear}";\n`;
  // add facewear
  if (loadout.facewear) sqf += `player addGoggles "${loadout.facewear}";\n`;
  // add nvgs
  if (loadout.nvgs) sqf += `player linkItem "${loadout.nvgoggles}";\n`;
  // add binoculars
  if (loadout.binoculars) sqf += `player addWeapon "${loadout.binoculars}";\n`;
  // add map
  if (loadout.map) sqf += `player linkItem "${loadout.map}";\n`;
  // add gps
  if (loadout.gps) sqf += `player linkItem "${loadout.gps}";\n`;
  // add compass
  if (loadout.compass) sqf += `player linkItem "${loadout.compass}";\n`;
  // add watch
  if (loadout.watch) sqf += `player linkItem "${loadout.watch}";\n`;
  // add radio
  if (loadout.radio) sqf += `player linkItem "${loadout.radio}";\n`;
  // add insignia
  if (loadout.insignia)
    sqf += `[player,"${loadout.insignia}"] call BIS_fnc_setUnitInsignia;\n`;

  // add items
  if (loadout.items)
    loadout.items.forEach((item) => {
      const name = item[0];
      const count = item[1];

      for (let i = 0; i < count; i++) {
        sqf += `player addItem "${name}";\n`;
      }
    });

  // add rifle mags
  if (loadout.rifleAmmo)
    loadout.rifleAmmo.forEach((mag) => {
      const name = mag[0];
      const count = mag[1];

      for (let i = 0; i < count; i++) {
        sqf += `player addMagazine "${name}";\n`;
      }
    });

  // add rifle
  if (loadout.rifle) sqf += `player addWeapon "${loadout.rifle}";\n`;

  // add rifle items
  if (loadout.rifleItems)
    loadout.rifleItems.forEach((item) => {
      sqf += `player addPrimaryWeaponItem "${item}";\n`;
    });

  // add handgun mags
  if (loadout.handgunAmmo)
    loadout.handgunAmmo.forEach((mag) => {
      const name = mag[0];
      const count = mag[1];

      for (let i = 0; i < count; i++) {
        sqf += `player addMagazine "${name}";\n`;
      }
    });

  // add handgun
  if (loadout.handgun) sqf += `player addWeapon "${loadout.handgun}";\n`;

  // add handgun items
  if (loadout.handgunItems)
    loadout.handgunItems.forEach((item) => {
      sqf += `player addHandgunItem "${item}";\n`;
    });

  // add launcher mags
  if (loadout.launcherAmmo)
    loadout.launcherAmmo.forEach((mag) => {
      const name = mag[0];
      const count = mag[1];

      for (let i = 0; i < count; i++) {
        sqf += `player addMagazine "${name}";\n`;
      }
    });

  // add launcher
  if (loadout.launcher) sqf += `player addWeapon "${loadout.launcher}";\n`;

  // add launcher items
  if (loadout.launcherItems)
    loadout.launcherItems.forEach((item) => {
      sqf += `player addSecondaryWeaponItem "${item}";\n`;
    });

  return sqf;
}

function getLoadoutCategories() {
  // get a list of all loadout categories
  const categories = readdirSync("./src/data/loadouts", {
    withFileTypes: true,
  });

  // filter out non-directories
  const loadoutCategories = categories
    .filter((thing) => thing.isDirectory())
    .map((category) => category.name);

  return loadoutCategories;
}

function getLoadouts(category) {
  // does the category exist?
  if (!getLoadoutCategories().includes(category)) return 404;

  // get a list of all loadouts in a category
  const categories = readdirSync(`./src/data/loadouts/${category}`, {
    withFileTypes: true,
  });

  // filter out directories
  const loadouts = categories
    .filter((thing) => !thing.isDirectory())
    .map((loadout) => loadout.name.replace(".js", ""));

  // filter out anything that starts with _
  const returnLoadouts = loadouts.filter((loadout) => !loadout.startsWith("_"));

  return returnLoadouts;
}
