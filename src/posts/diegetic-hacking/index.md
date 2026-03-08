---
title: "Diegetic Hacking"
description: TODO.
published: Mar 8 2026
# image: ./play-a-villain.webp
# imageAlt: A distorted, halftone image of a person with a flashlight in a dark attic with the text 'Play a Villain'.
# caption: An edited version of a stock photo from Lennart Wittstock.
tags: [RPG, diegetic, hacking, sci-fi, theory]
---

## II — OVERVIEW

What follows is a diegetic focused system for hacking that is suitable for any science-fiction setting. Hackers perform [physical actions](#physical-actions) and [digital actions](#digital-actions) on [systems](#systems) to gain access to them. Systems have [features](#system-features) that determine their security, storage, and operations. Once a hacker is **IN**, they can control operations or query the system for information. But they must be careful, if they do not disable the security protocol in time, they will be detected and locked out of the system.

## II — INTRUSION DETECTED

All computer systems, no matter how advanced they are, have built in security. If you stay in a system with active security for too long, you will eventually be detected. This is represented with the detection die roll.

After resolving a hacker's action, you roll the detection die. This die starts at a d20, but decreases in size each time a hacker's action fails (d20 → d12 → d8 → d6 → d4). **If you roll a 1**, the security system is alerted to your presence, automatically notifies authorities, and locks down all access, regardless of user. A manual restart is required to reenable the system.

If the `SYSTEM-SECURITY` is offline, then you do not roll the detection die.

## II — System Features

### `AUTHENTICATION`

Authenticated systems require a user to authenticate themselves in some form. Until a hacker is authenticated or bypasses authentication, most actions fail. There are several types of authentication:

| 1d6 | Feature     | Effect                                                                 |
| --- | ----------- | ---------------------------------------------------------------------- |
| `1` | `PHYS-DEVC` | A keycard or other device must be physically inserted into the system. |
| `2` | `CRED-LOCL` | User credentials must be sent to the local system.                     |
| `3` | `CRED-NETW` | User credentials must be sent to a server on a remote network.         |
| `4` | `BIOM-VOIC` | A voice sample must be provided in order to authenticate the user.     |
| `5` | `BIOM-THUM` | A thumb print must be provided in order to authenticate the user.      |
| `6` | `BIOM-RETN` | A retina scan must be provided in order to authenticate the user.      |

### `AUTHORIZATION`

Authorized systems require an authenticated user to have a role with proper permissions in order to take some actions. Each system has unique roles with permissions that determine what types of actions that user can take on authorized features. If a feature is not authorized, then it is assumed an authenticated user can perform any action on that feature. Here are some default roles:

| 1d6 | Role       | Permissions                          |
| --- | ---------- | ------------------------------------ |
| `1` | `USR-DFLT` | None                                 |
| `2` | `USR-MNGR` | `CREATE`                             |
| `3` | `USR-ADMN` | `READ`, `CREATE`                     |
| `4` | `SYS-ENGI` | `CREATE`, `UPDATE`, `DELETE`         |
| `5` | `SYS-ADMN` | `READ`, `UPDATE`, `CREATE`           |
| `6` | `SYS-OWNR` | `READ`, `UPDATE`, `CREATE`, `DELETE` |

| 1d4 | Permission | Effect                                                   |
| --- | ---------- | -------------------------------------------------------- |
| `1` | `READ`     | Authorized to read information from authorized features. |
| `2` | `CREATE`   | Authorized to create new items on authorized features.   |
| `3` | `UPDATE`   | Authorized to update state on authorized features.       |
| `4` | `DELETE`   | Authorized to delete authorized features.                |

### `STORAGE`

Systems can store information on both physical and network drives. Drives have a location and optionally require authorization. Local drives can be accessed digitally or physically, while network drives can only be accessed digitally and require an online network connection.

### `OPERATIONS`

TODO

## II — Hacker Actions

### `PRB-SYS`

Probes the system with a non-invasive query. This returns basic information concerning the system and user's current status, such as whether the system requires authentication or whether the system is online. If the user is authenticated, it returns the following response:

```bash wrap
USER|AUTHENTICATION: `False`, `True`
USER|AUTHORIZATION: A permissions list like ``
SYSTEM|POWER `Off` | `On`
SYSTEM|NETWORK `Offline` | `Online`
SYSTEM|SECURITY `Offline` | `Online`
SYSTEM|FIREWALL `Offline` | `Online`
SYSTEM|DRIVES|LOCAL `0-6`
SYSTEM|DRIVES|NETWORK `0-6`
```

#### Request Response

- `USER:AUTHENTICATION` → `False` | `True`
- `USER:AUTHORIZATION` → A permissions list like ``
- `SYSTEM:POWER` → `Off` | `On`
- `SYSTEM:NETWORK` → `Offline` | `Online`
- `SYSTEM:SECURITY` → `Offline` | `Online`
- `SYSTEM:FIREWALL` → `Offline` | `Online`
- `SYSTEM:DRIVES:LOCAL` → `0-6`
- `SYSTEM:DRIVES:NETWORK` → `0-6`

### `DSB-SBS`

Disables a subsystem. You must target a subsystem

## II — Character Skills and Attributes

In many game systems, a character can have skills or attributes that relate to hacking. In general, a character with proper skills or attributes can automatically succeed on one relevant roll of their choice.

- A character with a `Computers` skill can auto-succeed on one digital hacking action.
- A character with an `Engineering` skill can auto-succeed on one physical hacking action.
- A character with a `Hacking` skill can auto-succeed on one physical or digital hacking action.
- A character with high `Intelligence` can auto-succeed on one physical or digital hacking action.
