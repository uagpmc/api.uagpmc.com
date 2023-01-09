import unarmed from "./unarmed.js";

export default {
  name: "Rifleman",
  description: "Rifleman",
  ...unarmed,
  rifle: "UAG_MSBS65v2",
  rifleMags: [["30Rnd_65x39_caseless_msbs_mag", 10]],
  handgun: "CUP_hgun_Glock17_blk",
  handgunMags: [["CUP_17Rnd_9x19_glock17", 2]],
};
