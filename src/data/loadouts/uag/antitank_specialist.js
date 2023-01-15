import rifleman from "./rifleman.js";
import {
  HEADGEAR_HEAVY,
  BACKPACK_MEDIUM,
  AT_LAUNCHER,
  AT_LAUNCHER_AMMO,
  AT_LAUNCHER_ITEMS,
} from "./_standard_issue.js";

export default {
  ...rifleman,
  name: "Anti-Tank Specialist",
  description: "Standard anti-tank specialist loadout.",
  headgear: HEADGEAR_HEAVY,
  backpack: BACKPACK_MEDIUM,
  launcher: AT_LAUNCHER,
  launcherAmmo: [[AT_LAUNCHER_AMMO, 4]],
  launcherItems: AT_LAUNCHER_ITEMS,
};
