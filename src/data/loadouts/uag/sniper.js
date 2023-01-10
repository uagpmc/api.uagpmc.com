import rifleman from "./rifleman.js";
import { SNIPER, SNIPER_AMMO, SNIPER_ITEMS } from "./_standard_issue.js";

export default {
  ...rifleman,
  name: "Sniper",
  description: "Standard sniper loadout.",
  rifle: SNIPER,
  rifleAmmo: [[SNIPER_AMMO, 10]],
  rifleItems: SNIPER_ITEMS,
};
