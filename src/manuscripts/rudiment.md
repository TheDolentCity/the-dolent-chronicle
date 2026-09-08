---
title: "Rudiment"
description: A simplified version of the 5th edition dragon game.
published: Sep 8 2026
---

**_Rudiment_** _is an ashcan system based on the 5th edition of the dragon game. This system assumes familiarity with the referenced system and only contains modifications. You can expect this text to update over time. While **Rudiment** can still support the [Destined Heroes](https://patchworkpaladin.com/2026/07/29/the-destined-heroes-play-style/) play style, it contains rule changes that focus on the "gritty" style presented in the 2014 dragon maestro's guide and aims for adventuring between levels 1-6._

---

# Core Rule Changes

## Proficiency Bonus

Your proficiency bonus is equal to your level.

## Ability Scores and Modifiers

Ability scores are replaced fully by ability modifiers, now just called "abilities". Characters do not have 15 Strength, they have +2 Strength. Each ability ranges from -5 to +10. Any rule that would increase or decrease an ability score or modifier now increases/decreases an ability instead.

### Standard Ability Array

The standard ability array becomes: `[+3, +2, +1, +1, +0, -1]`.

### Point Buy Array

Instead of using the standard array, you can use the point buy method. You have 13 points to assign to your starting abilities. You can only have one ability equal to -1.

| Ability | Cost |
| ------- | ---- |
| `-1`    | `0`  |
| `+0`    | `1`  |
| `+1`    | `2`  |
| `+2`    | `3`  |
| `+3`    | `5`  |

Example arrays created with point buy:

- `[+3, +3, +0, +0, +0, -1]`
- `[+3, +1, +1, +1, +0, +0]`
- `[+2, +2, +2, +1, +0, +0]`

## Damage

All damage is static. If a mechanic required a damage die, you assume it rolled half its value (rounded down). ex: A weapon that deals d6+2 now deals 5 damage and a fall from 20 feet deals 6 damage.

## Potent Attacks

The dragon maestro can declare that an attack is potent based on the fiction. Especially clever or perfect uses of a weapon or tool will render an attack potent. If the attack hits, then it deals double damage. Examples include:

- Throwing a bomb at a barrel of gunpowder next to several goblins.
- Charging an immobilized knight with a lance astride your steed.
- Launching a torrent of water at a flame elemental.

## Impaired Attacks

The dragon maestro can declare that an attack is impaired based on the fiction. Ineffective uses of weapons or tools will render an attack impaired. If the attack hits, then it deals half damage. Examples include:

- Throwing a fireball at a treant in a downpour.
- Tossing caltrops at a shielded knight in plate mail.
- Shooting arrows at a battering ram.

## Healing

All healing is static. If a mechanic required a healing die, you assume it rolled half its value (rounded down). ex: Healing word restores 2 + spellcasting ability HP.

## Death Saves and Dying

When you drop to 0 HP, you do not fall unconscious, you instead gain the dying condition. While you have the dying condition, you roll a death save at the end of your turn if you are still at 0 or lower HP. If you succeed at three death saves while dying, you are restored to 1 HP and the dying condition is removed. If you fail three death saves, you die. Taking damage while at 0 or lower HP counts as one failed death save.

### Repose

When you have the dying condition, you may choose on your turn to take the repose action. When you do so, you stop rolling death saves, you lose the dying condition, and you gain the unconscious condition. This condition can only be removed if you are healed to 1 HP or higher.

## Hit Points and Hit Dice

Maximum Hit Points are now lower, but are still based on your class. Hit Dice are removed and replaced with Hit Regeneration. Whenever you would roll one or more Hit Die, you use your Hit Regeneration value instead. Your Hit Regeneration is determined by class:

| Class     | Starting HP | HP per Level | Hit Regeneration |
| --------- | ----------- | ------------ | ---------------- |
| Barbarian | `10 + CON`  | `3`          | `3 + CON`        |
| Bard      | `4 + CON`   | `1`          | `1 + CON`        |
| Cleric    | `6 + CON`   | `1`          | `1 + CON`        |
| Druid     | `4 + CON`   | `1`          | `1 + CON`        |
| Fighter   | `8 + CON`   | `3`          | `2 + CON`        |
| Monk      | `6 + CON`   | `1`          | `1 + CON`        |
| Paladin   | `8 + CON`   | `2`          | `2 + CON`        |
| Ranger    | `8 + CON`   | `2`          | `1 + CON`        |
| Rogue     | `6 + CON`   | `1`          | `1 + CON`        |
| Sorcerer  | `2 + CON`   | `1`          | `1 + CON`        |
| Warlock   | `4 + CON`   | `1`          | `1 + CON`        |
| Wizard    | `2 + CON`   | `1`          | `1 + CON`        |

Whenever you take a short rest, you only regain a number of HP equal to your Hit Regeneration, regardless of level. If you multiclass, you still only use your level 1 class's Hit Regeneration.

## Resting

Use the "Gritty Realism" rest variant rules from the 2014 dungeon maestro's guide.

## Level Advancement

Use milestone advancement. When you gain a level, follow these steps:

1. **Choose a class.** Usually the same class, but you can multiclass as well.
1. **Adjust Hit Points.** You increase your maximum HP by your class's Hit Points per Level as noted in the above table.
1. **Record New Class Features.**
1. **Adjust Proficiency Bonus.** This is equal to your level.
1. **Adjust Abilities.** At even levels, you gain +1 to one ability. Increasing CON does not retroactively increase hit points.

## Feats

Removed and ignored.

---

# Equipment

This section contains all of the updated rules for equipment, most notably this includes changes to armor types, weapon damage types, and the core abilities used for melee/ranged weapons.

## Armor Defense (AD)

All armors and some monsters now have an armor defense stat ranging from 0 to 4. All damage is reduced by the target's AD. If damage from an attack is reduced to 0 by AD, the attack counts as a miss.

## Armor Comfort

All armors have a comfort rating. If an armor is worn longer than its comfort rating, you gain 1 level of exhaustion. This effect triggers if you continue to wear the armor for the same duration without removing the armor and resting.

## Armor Types

All armors have been reduced to light, medium, and heavy. You may find different descriptions for armor in the world, such as splint mail or brigandine, but they ultimately are mechanically only distinguished by magical properties and the light, medium, or heavy designation.

### No armor

- Armor Class: 10
- Armor Defense: 0

### Light armor

- Don/Doff: 1 minute
- Comfort: 3 days
- Armor Class: 14
- Armor Defense: 0
- Strength required: +0

### Medium armor

- Don/Doff: 5 minutes
- Comfort: 12 hours
- Armor Class: 16
- Armor Defense: 1
- Strength required: +1

### Heavy armor

- Don/Doff: 30 minutes
- Comfort: 2 hours
- Armor Class: 18
- Armor Defense: 2
- Strength required: +2
- Disadvantage on Stealth while worn

### Shield

- Requires a free hand
- Armor Class: +2
- Strength required: +1

## Weapons

Attacks with melee weapons use Dexterity for rolls and damage. Attacks with bows use Strength for rolls and damage. All other weapon attack/damage is adjudicated by the GM, but most fall under Dexterity.

### Damage Types

Since most dungeon game creatures resist the three core damage types equally, a simple modification has been made to each type.

- **Bludgeoning:** Attacks against foes with AD 2 or greater deal +4 damage.
- **Piercing:** Attacks with advantage ignore AD.
- **Slashing:** Attacks against foes with AD 0 deal +1 damage.

### Weapon Trait — Finesse

You have disadvantage on attack rolls with a finesse weapon if your Dexterity is not at least +1.

### Weapon Trait — Heavy

You have disadvantage on attack rolls with a heavy weapon if your Strength is not at least +1. When calculating damage from a heavy weapon attack, you may use your choice of Dexterity or Strength.

---

# Classes

This section contains all of the updated rules for classes. There are many that require some changes to make them compatible with this ruleset, but I'll add them as they come up.

### Class Trait — Unarmored Defense

While you aren't wearing armor or wielding a shield, your base Armor Class equals 12 plus your Dexterity up to a max of 16.

---

# Spells

This section contains all of the updated rules for spells.

### Counterspell

This spell has been removed.
