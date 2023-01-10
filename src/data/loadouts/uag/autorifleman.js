import rifleman from "./rifleman.js";
import { LMG, LMG_AMMO, LMG_ITEMS } from "./_standard_issue.js";

export default {
  ...rifleman,
  name: "Autorifleman",
  description: "Standard autorifleman loadout.",
  rifle: LMG,
  rifleAmmo: [[LMG_AMMO, 5]],
  rifleItems: LMG_ITEMS,
};
