import rifleman from "./rifleman.js";
import {
  HEADGEAR_LIGHT,
  VEST_LIGHT,
  SNIPER,
  SNIPER_AMMO,
  SNIPER_ITEMS,
} from "./_standard_issue.js";

export default {
  ...rifleman,
  name: "Sniper",
  headgear: HEADGEAR_LIGHT,
  vest: VEST_LIGHT,
  rifle: SNIPER,
  rifleAmmo: [[SNIPER_AMMO, 10]],
  rifleItems: SNIPER_ITEMS,
};
