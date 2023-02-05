import unarmed from "./unarmed.js";
import {
  RIFLE,
  RIFLE_AMMO,
  RIFLE_ITEMS,
  FRAG_GRENADE,
  SMOKE_GRENADE,
} from "./_standard_issue.js";

export default {
  ...unarmed,
  name: "Rifleman",
  rifle: RIFLE,
  rifleAmmo: [[RIFLE_AMMO, 10]],
  rifleItems: RIFLE_ITEMS,
  items: [...unarmed.items, [FRAG_GRENADE, 1], [SMOKE_GRENADE, 1]],
};
