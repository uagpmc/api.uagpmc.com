import rifleman from "./rifleman.js";
import { BACKPACK_HEAVY } from "./_standard_issue.js";

export default {
  ...rifleman,
  name: "Bitchboy",
  description: "Standard bitchboy loadout.",
  backpack: BACKPACK_HEAVY,
  code: `(backpackContainer player) setObjectTexture [0,"#(argb,8,8,3)color(1,1,1,0.02)"]`,
};
