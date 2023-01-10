import rifleman from "./rifleman.js";
import { MEDICAL_SUPPLIES_CORPSMAN } from "./_standard_issue.js";

export default {
  ...rifleman,
  name: "Corpsman",
  description: "Standard corpsman loadout.",
  items: [...rifleman.items, ...MEDICAL_SUPPLIES_CORPSMAN],
};
