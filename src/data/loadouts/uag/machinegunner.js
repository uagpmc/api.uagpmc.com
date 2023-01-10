import rifleman from "./rifleman.js";
import { MMG, MMG_AMMO, MMG_ITEMS } from "./_standard_issue.js";

export default {
  ...rifleman,
  name: "Machinegunner",
  description: "Standard machinegunner loadout.",
  rifle: MMG,
  rifleAmmo: [[MMG_AMMO, 5]],
  rifleItems: MMG_ITEMS,
};
