import rifleman from "./rifleman.js";
import { VEST_LIGHT, DMR, DMR_AMMO, DMR_ITEMS } from "./_standard_issue.js";

export default {
  ...rifleman,
  name: "Marksman",
  description: "Standard marksman loadout.",
  vest: VEST_LIGHT,
  rifle: DMR,
  rifleAmmo: [[DMR_AMMO, 10]],
  rifleItems: DMR_ITEMS,
};
