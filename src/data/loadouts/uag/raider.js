import rifleman from "./rifleman.js";
import {
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
  rifle: SMG,
  rifleAmmo: [[SMG_AMMO, 10]],
  rifleItems: SMG_ITEMS,
  items: [...rifleman.items, [FRAG_GRENADE, 3], [FLASH_GRENADE, 4]],
};
