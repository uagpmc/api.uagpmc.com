import rifleman from "./rifleman.js";
import {
  VEST_LIGHT,
  BACKPACK_MEDIUM,
  AA_LAUNCHER,
  AA_LAUNCHER_AMMO,
  AA_LAUNCHER_ITEMS,
} from "./_standard_issue.js";

export default {
  ...rifleman,
  name: "Anti-Air Specialist",
  description: "Standard anti-air specialist loadout.",
  vest: VEST_LIGHT,
  backpack: BACKPACK_MEDIUM,
  launcher: AA_LAUNCHER,
  launcherAmmo: [[AA_LAUNCHER_AMMO, 2]],
  launcherItems: AA_LAUNCHER_ITEMS,
};
