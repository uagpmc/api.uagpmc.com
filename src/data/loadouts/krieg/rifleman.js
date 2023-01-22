import unarmed from "../uag/unarmed.js";
import rifleman from "../uag/rifleman.js";

export default {
  ...rifleman,
  name: "Krieg Guardsman",
  description: "The bulwark of the Krieg army.",
  headgear: "DKoK_GM_Helm_82nd",
  facewear: "DKOKTroopMask",
  uniform: "OP_DKoK_GM_Uniform_82nd",
  vest: null,
  backpack: "DKoK_BackPack",
  rifle: "Lucius98LasgunBlackS",
  rifleAmmo: [["Lucius98_mag", 10]],
  rifleItems: null,
  handgun: "Shovel_Russian_Rotated",
  handgunAmmo: null,
  items: [
    ...unarmed.items,
    ["TIOW_ig_frag_grenade_mag", 4],
    ["TIOW_ig_smoke_grenade_mag", 2],
  ],
};
