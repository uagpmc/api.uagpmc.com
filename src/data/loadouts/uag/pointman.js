import rifleman from "./rifleman.js";
import {
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
  rifle: SHOTGUN,
  rifleAmmo: [[SHOTGUN_AMMO, 10]],
  rifleItems: SHOTGUN_ITEMS,
  items: [...rifleman.items, [FRAG_GRENADE, 3], [FLASH_GRENADE, 4]],
};
