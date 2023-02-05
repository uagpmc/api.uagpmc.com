import rifleman from "./rifleman.js";
import { BACKPACK_MEDIUM, MEDICAL_SUPPLIES_MEDIC } from "./_standard_issue.js";

export default {
  ...rifleman,
  name: "Medic",
  backpack: BACKPACK_MEDIUM,
  medicalSupplies: [...MEDICAL_SUPPLIES_MEDIC],
};
