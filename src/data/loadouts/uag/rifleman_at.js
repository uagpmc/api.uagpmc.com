import rifleman from "./rifleman.js";
import { AT_LAUNCHER_LIGHT } from "./_standard_issue.js";

export default {
  ...rifleman,
  name: "Rifleman (AT)",
  description: "Standard rifleman with light AT launcher.",
  launcher: AT_LAUNCHER_LIGHT,
};
