import rifleman from "./rifleman.js";
import {
  HEADGEAR_HEAVY,
  VEST_HEAVY,
  LMG,
  LMG_AMMO,
  LMG_ITEMS,
} from "./_standard_issue.js";

export default {
  ...rifleman,
  name: "Autorifleman",
  description: "Standard autorifleman loadout.",
  headgear: HEADGEAR_HEAVY,
  vest: VEST_HEAVY,
  rifle: LMG,
  rifleAmmo: [[LMG_AMMO, 5]],
  rifleItems: LMG_ITEMS,
};
