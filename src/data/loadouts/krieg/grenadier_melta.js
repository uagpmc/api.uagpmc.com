import machinegunner from "./machinegunner.js";

export default {
  ...machinegunner,
  name: "Krieg Meltagunner",
  description:
    "A meltagun is a weapon that fires a glob of molten metal that incinerates the target.",
  backpack: "DKoK_PlasmaBackPack",
  rifle: "TIOW_MeltaGun_01",
  rifleAmmo: [["TIOW_Meltagun_Mag", 10]],
};
