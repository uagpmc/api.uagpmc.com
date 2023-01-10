import rifleman from "./rifleman.js";
import { DMR, DMR_AMMO, DMR_ITEMS } from "./_standard_issue.js";

export default {
  ...rifleman,
  name: "Marksman",
  description: "Standard marksman loadout.",
  rifle: DMR,
  rifleAmmo: [[DMR_AMMO, 10]],
  rifleItems: DMR_ITEMS,
};
