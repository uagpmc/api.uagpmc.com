import corpsman from "./corpsman.js";
import { BACKPACK_MEDIUM, MEDICAL_SUPPLIES_MEDIC } from "./_standard_issue.js";

export default {
  ...corpsman,
  name: "Medic",
  description: "Standard medic loadout.",
  backpack: BACKPACK_MEDIUM,
  items: [...corpsman.items, ...MEDICAL_SUPPLIES_MEDIC],
};
