const standardIssue = {
  get HEADGEAR() {
    return this.HEADGEAR_MEDIUM;
  },
  HEADGEAR_LIGHT: "UAG_Combat_Helmet_Light",
  HEADGEAR_MEDIUM: "UAG_Combat_Helmet_Medium",
  HEADGEAR_HEAVY: "UAG_Combat_Helmet_Heavy",
  FACEWEAR: "UAG_Balaclava_Goggles",
  UNIFORM: "UAG_Combat_Fatigues",
  get VEST() {
    return this.VEST_MEDIUM;
  },
  VEST_LIGHT: "UAG_Plate_Carrier_Light",
  VEST_MEDIUM: "UAG_Plate_Carrier_Medium",
  VEST_HEAVY: "UAG_Plate_Carrier_Heavy",
  BACKPACK_LIGHT: "B_AssaultPack_blk",
  BACKPACK_MEDIUM: "Rainman_Kitbag_Splinter_Urban",
  BACKPACK_HEAVY: "B_Bergen_mcamo_F",
  get MEDICAL_SUPPLIES() {
    return this.MEDICAL_SUPPLIES_MINIMUM;
  },
  MEDICAL_SUPPLIES_MINIMUM: [
    ["ACE_elasticBandage", 10],
    ["ACE_quikclot", 10],
    ["ACE_morphine", 2],
    ["ACE_epinephrine", 2],
    ["ACE_tourniquet", 1],
    ["ACE_pissIV", 1],
    ["ACE_Capri_Sun", 1],
  ],
  MEDICAL_SUPPLIES_CORPSMAN: [
    ["ACE_elasticBandage", 25],
    ["ACE_quikclot", 25],
    ["ACE_morphine", 4],
    ["ACE_epinephrine", 4],
    ["ACE_tourniquet", 2],
    ["ACE_pissIV", 2],
    ["ACE_Capri_Sun", 2],
  ],
  MEDICAL_SUPPLIES_MEDIC: [
    ["ACE_elasticBandage", 50],
    ["ACE_quikclot", 50],
    ["ACE_morphine", 10],
    ["ACE_epinephrine", 10],
    ["ACE_tourniquet", 8],
    ["ACE_pissIV", 10],
    ["ACE_Capri_Sun", 4],
    ["adv_aceCPR_AED", 1],
    ["ACE_surgicalKit", 1],
  ],
  MISCELLANEOUS_ITEMS: [
    ["ACE_Flashlight_MX991", 1],
    ["ACE_MapTools", 1],
    ["ACE_CableTie", 1],
    ["ACE_EntrenchingTool", 1],
    ["ACE_EarPlugs", 1],
    ["ACE_IR_Strobe_Item", 1],
    ["ItemAndroid", 1],
  ],
  BINOCULARS: "ACE_Vector",
  INSIGNIA: "ACE_insignia_banana",
  RIFLE: "arifle_MSBS65_black_f",
  RIFLE_AMMO: "30Rnd_65x39_caseless_msbs_mag",
  RIFLE_ITEMS: ["optic_ico_01_black_f", "acc_flashlight", "ace_muzzle_mzls_h"],
  HANDGUN: "hgun_P07_blk_F",
  HANDGUN_AMMO: "30Rnd_9x21_Mag",
  LMG: "LMG_03_F",
  LMG_AMMO: "200Rnd_556x45_Box_Tracer_Red_F",
  LMG_ITEMS: ["optic_mrco", "ace_acc_pointer_green", "ace_muzzle_mzls_b"],
  MMG: "MMG_02_black_F",
  MMG_AMMO: "130Rnd_338_Mag",
  MMG_ITEMS: ["optic_mrco", "ace_acc_pointer_green", "ace_muzzle_mzls_338"],
  DMR: "srifle_DMR_03_F",
  DMR_AMMO: "ACE_20Rnd_762x51_Mk319_Mod_0_Mag",
  DMR_ITEMS: [
    "optic_dms",
    "ace_acc_pointer_green",
    "ace_muzzle_mzls_b",
    "bipod_01_f_blk",
  ],
  SNIPER: "srifle_LRR_F",
  SNIPER_AMMO: "ACE_7Rnd_408_305gr_Mag",
  SNIPER_ITEMS: ["optic_lrps"],
  SMG: "SMG_03C_TR_black",
  SMG_AMMO: "50Rnd_570x28_SMG_03",
  SMG_ITEMS: ["optic_aco_smg", "acc_flashlight"],
  SHOTGUN: "CUP_sgun_AA12",
  SHOTGUN_AMMO: "CUP_20Rnd_B_AA12_Buck_0",
  SHOTGUN_ITEMS: ["acc_flashlight"],
  AT_LAUNCHER: "launch_MRAWS_green_F",
  AT_LAUNCHER_AMMO: "MRAWS_HEAT_F",
  AT_LAUNCHER_ITEMS: ["ace_acc_pointer_green"],
  AA_LAUNCHER: "launch_I_Titan_F",
  AA_LAUNCHER_AMMO: "Titan_AA",
  AA_LAUNCHER_ITEMS: ["ace_acc_pointer_green"],
  AT_LAUNCHER_LIGHT: "CUP_launch_M136",
  FRAG_GRENADE: "HandGrenade",
  SMOKE_GRENADE: "SmokeShell",
  SMOKE_GRENADE_BLUE: "SmokeShellBlue",
  FLASH_GRENADE: "ACE_CTS9",
};

export const HEADGEAR = standardIssue.HEADGEAR;
export const HEADGEAR_LIGHT = standardIssue.HEADGEAR_LIGHT;
export const HEADGEAR_MEDIUM = standardIssue.HEADGEAR_MEDIUM;
export const HEADGEAR_HEAVY = standardIssue.HEADGEAR_HEAVY;
export const FACEWEAR = standardIssue.FACEWEAR;
export const UNIFORM = standardIssue.UNIFORM;
export const VEST = standardIssue.VEST;
export const VEST_LIGHT = standardIssue.VEST_LIGHT;
export const VEST_MEDIUM = standardIssue.VEST_MEDIUM;
export const VEST_HEAVY = standardIssue.VEST_HEAVY;
export const BACKPACK_LIGHT = standardIssue.BACKPACK_LIGHT;
export const BACKPACK_MEDIUM = standardIssue.BACKPACK_MEDIUM;
export const BACKPACK_HEAVY = standardIssue.BACKPACK_HEAVY;
export const MEDICAL_SUPPLIES = standardIssue.MEDICAL_SUPPLIES;
export const MEDICAL_SUPPLIES_MINIMUM = standardIssue.MEDICAL_SUPPLIES_MINIMUM;
export const MEDICAL_SUPPLIES_CORPSMAN =
  standardIssue.MEDICAL_SUPPLIES_CORPSMAN;
export const MEDICAL_SUPPLIES_MEDIC = standardIssue.MEDICAL_SUPPLIES_MEDIC;
export const MISCELLANEOUS_ITEMS = standardIssue.MISCELLANEOUS_ITEMS;
export const BINOCULARS = standardIssue.BINOCULARS;
export const INSIGNIA = standardIssue.INSIGNIA;
export const RIFLE = standardIssue.RIFLE;
export const RIFLE_AMMO = standardIssue.RIFLE_AMMO;
export const RIFLE_ITEMS = standardIssue.RIFLE_ITEMS;
export const HANDGUN = standardIssue.HANDGUN;
export const HANDGUN_AMMO = standardIssue.HANDGUN_AMMO;
export const LMG = standardIssue.LMG;
export const LMG_AMMO = standardIssue.LMG_AMMO;
export const LMG_ITEMS = standardIssue.LMG_ITEMS;
export const MMG = standardIssue.MMG;
export const MMG_AMMO = standardIssue.MMG_AMMO;
export const MMG_ITEMS = standardIssue.MMG_ITEMS;
export const DMR = standardIssue.DMR;
export const DMR_AMMO = standardIssue.DMR_AMMO;
export const DMR_ITEMS = standardIssue.DMR_ITEMS;
export const SNIPER = standardIssue.SNIPER;
export const SNIPER_AMMO = standardIssue.SNIPER_AMMO;
export const SNIPER_ITEMS = standardIssue.SNIPER_ITEMS;
export const SMG = standardIssue.SMG;
export const SMG_AMMO = standardIssue.SMG_AMMO;
export const SMG_ITEMS = standardIssue.SMG_ITEMS;
export const SHOTGUN = standardIssue.SHOTGUN;
export const SHOTGUN_AMMO = standardIssue.SHOTGUN_AMMO;
export const SHOTGUN_ITEMS = standardIssue.SHOTGUN_ITEMS;
export const AT_LAUNCHER = standardIssue.AT_LAUNCHER;
export const AT_LAUNCHER_AMMO = standardIssue.AT_LAUNCHER_AMMO;
export const AT_LAUNCHER_ITEMS = standardIssue.AT_LAUNCHER_ITEMS;
export const AA_LAUNCHER = standardIssue.AA_LAUNCHER;
export const AA_LAUNCHER_AMMO = standardIssue.AA_LAUNCHER_AMMO;
export const AA_LAUNCHER_ITEMS = standardIssue.AA_LAUNCHER_ITEMS;
export const AT_LAUNCHER_LIGHT = standardIssue.AT_LAUNCHER_LIGHT;
export const FRAG_GRENADE = standardIssue.FRAG_GRENADE;
export const SMOKE_GRENADE = standardIssue.SMOKE_GRENADE;
export const SMOKE_GRENADE_BLUE = standardIssue.SMOKE_GRENADE_BLUE;
export const FLASH_GRENADE = standardIssue.FLASH_GRENADE;

export default standardIssue;
