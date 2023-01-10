const standardIssue = {
  HEADGEAR: "UAG_Combat_Helmet_Medium",
  FACEWEAR: "UAG_Balaclava_Goggles",
  UNIFORM: "UAG_Combat_Fatigues",
  get VEST() {
    return this.VEST_MEDIUM;
  },
  VEST_LIGHT: "UAG_Plate_Carrier_Light",
  VEST_MEDIUM: "UAG_Plate_Carrier_Medium",
  VEST_HEAVY: "UAG_Plate_Carrier_Heavy",
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
  MEDICAL_SUPPLIES_FULL: [
    ["ACE_elasticBandage", 25],
    ["ACE_quikclot", 25],
    ["ACE_morphine", 4],
    ["ACE_epinephrine", 4],
    ["ACE_tourniquet", 2],
    ["ACE_pissIV", 2],
    ["ACE_Capri_Sun", 2],
  ],
  MEDICAL_SUPPLIES_CORPSMAN: [
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
  ],
  BINOCULARS: "ACE_Vector",
  INSIGNIA: "ACE_insignia_banana",
  RIFLE: "UAG_MSBS65v2",
  RIFLE_AMMO: "30Rnd_65x39_caseless_msbs_mag",
  RIFLE_ITEMS: ["optic_ico_01_black_f", "acc_flashlight", "ace_muzzle_mzls_h"],
  HANDGUN: "hgun_P07_blk_F",
  HANDGUN_AMMO: "30Rnd_9x21_Mag",
  LMG: "LMG_03_F",
  LMG_AMMO: "200Rnd_556x45_Box_Tracer_Red_F",
  LMG_ITEMS: ["optic_mrco", "acc_flashlight", "ace_muzzle_mzls_b"],
  FRAG_GRENADE: "HandGrenade",
  SMOKE_GRENADE: "SmokeShell",
  SMOKE_GRENADE_BLUE: "SmokeShellBlue",
};

export const HEADGEAR = standardIssue.HEADGEAR;
export const FACEWEAR = standardIssue.FACEWEAR;
export const UNIFORM = standardIssue.UNIFORM;
export const VEST = standardIssue.VEST;
export const VEST_LIGHT = standardIssue.VEST_LIGHT;
export const VEST_MEDIUM = standardIssue.VEST_MEDIUM;
export const VEST_HEAVY = standardIssue.VEST_HEAVY;
export const MEDICAL_SUPPLIES = standardIssue.MEDICAL_SUPPLIES;
export const MEDICAL_SUPPLIES_MINIMUM = standardIssue.MEDICAL_SUPPLIES_MINIMUM;
export const MEDICAL_SUPPLIES_FULL = standardIssue.MEDICAL_SUPPLIES_FULL;
export const MEDICAL_SUPPLIES_CORPSMAN =
  standardIssue.MEDICAL_SUPPLIES_CORPSMAN;
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
export const FRAG_GRENADE = standardIssue.FRAG_GRENADE;
export const SMOKE_GRENADE = standardIssue.SMOKE_GRENADE;
export const SMOKE_GRENADE_BLUE = standardIssue.SMOKE_GRENADE_BLUE;

export default standardIssue;
