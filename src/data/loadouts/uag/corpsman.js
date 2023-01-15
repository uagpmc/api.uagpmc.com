import rifleman from "./rifleman.js";
import {
  HEADGEAR_LIGHT,
  VEST_LIGHT,
  MEDICAL_SUPPLIES_CORPSMAN,
} from "./_standard_issue.js";

export default {
  ...rifleman,
  name: "Corpsman",
  description: "Standard corpsman loadout.",
  vest: VEST_LIGHT,
  medicalSupplies: [...MEDICAL_SUPPLIES_CORPSMAN],
};
