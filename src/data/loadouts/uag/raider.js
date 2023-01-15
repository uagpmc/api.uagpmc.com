import rifleman from "./rifleman.js";
import {
  HEADGEAR_LIGHT,
  VEST_LIGHT,
  SMG,
  SMG_AMMO,
  SMG_ITEMS,
  FRAG_GRENADE,
  FLASH_GRENADE,
} from "./_standard_issue.js";

export default {
  ...rifleman,
  name: "Raider",
  description: "Standard raider loadout.",
  headgear: HEADGEAR_LIGHT,
  vest: VEST_LIGHT,
  rifle: SMG,
  rifleAmmo: [[SMG_AMMO, 10]],
  rifleItems: SMG_ITEMS,
  items: [...rifleman.items, [FRAG_GRENADE, 3], [FLASH_GRENADE, 4]],
};
