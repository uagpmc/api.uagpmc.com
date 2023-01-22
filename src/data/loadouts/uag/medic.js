import corpsman from "./corpsman.js";
import { BACKPACK_MEDIUM, MEDICAL_SUPPLIES_MEDIC } from "./_standard_issue.js";

export default {
  ...corpsman,
  name: "Medic",
  backpack: BACKPACK_MEDIUM,
  medicalSupplies: [...MEDICAL_SUPPLIES_MEDIC],
};
