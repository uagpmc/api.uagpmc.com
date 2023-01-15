import rifleman from "./rifleman.js";
import {
  HEADGEAR_HEAVY,
  VEST_HEAVY,
  SHOTGUN,
  SHOTGUN_AMMO,
  SHOTGUN_ITEMS,
  FRAG_GRENADE,
  FLASH_GRENADE,
} from "./_standard_issue.js";

export default {
  ...rifleman,
  name: "Pointman",
  description: "Standard pointman loadout.",
  headgear: HEADGEAR_HEAVY,
  vest: VEST_HEAVY,
  rifle: SHOTGUN,
  rifleAmmo: [[SHOTGUN_AMMO, 10]],
  rifleItems: SHOTGUN_ITEMS,
  items: [...rifleman.items, [FRAG_GRENADE, 3], [FLASH_GRENADE, 4]],
};
