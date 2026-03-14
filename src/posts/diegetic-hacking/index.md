---
title: "Diegetic Security Hacking"
description: A diegetic-forward system for hacking in a roleplaying game.
published: Mar 8 2026
# image: ./play-a-villain.webp
# imageAlt: A distorted, halftone image of a person with a flashlight in a dark attic with the text 'Play a Villain'.
# caption: An edited version of a stock photo from Lennart Wittstock.
tags: [RPG, diegetic, hacking, sci-fi, theory]
---

## `Table of Contents`

- [Overview](#i--overview)
- [Intrusion Detection](#ii--intrusion-detection)
- [System Features](#ii--system-features)
- [Unique System Features](#ii--unique-system-features)
- [Digital Hacker Actions](#ii--digital-hacker-actions)
- [Physical Hacker Actions](#ii--physical-hacker-actions)
- [Character Skills and Attributes](#ii--character-skills-and-attributes)
- [Example Systems](#ii--example-systems)
- [Example Strategies](#ii--example-strategies)

## `I — OVERVIEW`

What follows is a diegetic focused system for hacking that is suitable for any science-fiction setting. Hackers perform [physical actions](#physical-actions) and [digital actions](#digital-actions) on [systems](#systems) to gain access to them. Systems have [features](#ii--system-features) that determine their security, storage, and operations. Once a hacker is **IN**, they can control operations or query the system for information. But they must be careful, if they do not disable the security protocol in time, they will be detected and locked out of the system.

## `II — INTRUSION DETECTION`

All computer systems, no matter how advanced they are, have built in security. If you stay in a system with active security for too long, you will eventually be detected. This is represented with the detection die roll.

After resolving a hacker's action, you roll the detection die. This die starts at a d20, but decreases in size each time a hacker fails an action (d20 → d12 → d10 → d8 → d6 → d4). **If you roll a 1**, the security system is alerted to your presence, automatically notifies authorities, and locks down all access, regardless of user. A manual restart is required to reenable the system.

If the `SYSTEM-SECURITY` is offline, then you do not roll the detection die.

## `II — SYSTEM FEATURES`

### `AUTHENTICATION`

Authenticated systems require a user to authenticate themselves in some form. Until a hacker is authenticated or bypasses authentication, most actions fail. There are several types of authentication:

| 1d6 | Feature     | Effect                                                                 |
| --- | ----------- | ---------------------------------------------------------------------- |
| 1   | `PHYS-DEVC` | A keycard or other device must be physically inserted into the system. |
| 2   | `CRED-LOCL` | User credentials must be sent to the local system.                     |
| 3   | `CRED-NETW` | User credentials must be sent to a server on a remote network.         |
| 4   | `BIOM-VOIC` | A voice sample must be provided in order to authenticate the user.     |
| 5   | `BIOM-THUM` | A thumb print must be provided in order to authenticate the user.      |
| 6   | `BIOM-RETN` | A retina scan must be provided in order to authenticate the user.      |

### `AUTHORIZATION`

Authorized systems require an authenticated user to have a role with proper permissions in order to take some actions. Each system has unique roles with permissions that determine what types of actions that user can take on authorized features. If a feature is not authorized, then it is assumed an authenticated user can perform any action on that feature. Here are some default roles:

| 1d6 | Role       | Permissions                          |
| --- | ---------- | ------------------------------------ |
| 1   | `USR-DFLT` | None                                 |
| 2   | `USR-MNGR` | `CREATE`                             |
| 3   | `USR-ADMN` | `READ`, `CREATE`                     |
| 4   | `SYS-ENGI` | `CREATE`, `UPDATE`, `DELETE`         |
| 5   | `SYS-ADMN` | `READ`, `UPDATE`, `CREATE`           |
| 6   | `SYS-OWNR` | `READ`, `UPDATE`, `CREATE`, `DELETE` |

| 1d4 | Permission | Effect                         |
| --- | ---------- | ------------------------------ |
| 1   | `READ`     | Authorized to read data.       |
| 2   | `CREATE`   | Authorized to create new data. |
| 3   | `UPDATE`   | Authorized to update data.     |
| 4   | `DELETE`   | Authorized to delete data.     |

### `STORAGE`

Systems can store information on both physical and network drives. Drives have a location and optionally require authorization. Local drives can be accessed digitally or physically, while network drives can only be accessed digitally and require an online network connection.

### `OPERATIONS`

| 1d6 | Operation          | Details |
| --- | ------------------ | ------- |
| 1   | `LOCAL-CAMERAS`    |         |
| 2   | `LOCAL-COMMS`      |         |
| 3   | `LOCAL-TRANSPORT`  |         |
| 4   | `REMOTE-CAMERAS`   |         |
| 3   | `REMOTE-COMMS`     |         |
| 4   | `REMOTE-TRANSPORT` |         |

## `II — Digital Hacker Actions`

- [CONNECT](#connect): Connect to a remote server.
- [DISABLE](#disable): Disables a system feature.
- [DISGUISE](#disguise): Deceive a system into thinking you are another user.
- [FRACTURE](#fracture): Attack a system and fracture it, disabling one or more features.
- [INFILTRATE](#infiltrate): Sneak past a system's authentication and authorization.
- [PROBE](#probe): Probes the system for information.
- [RETRIEVE](#retrieve): Retrieve and copy all information from one drive.
- [SEARCH](#search): Search local or network drives for specific information.

### `DISABLE`

Disables a system feature (power, firewall, network, security, or a unique system). If the system is already inactive or doesn't exist on the system, then the action fails and the detection die decreases by two sizes (ex: d12 → d8) instead of one.

### `DISGUISE`

Disguise yourself as a fake authenticated user. If you know what roles the system is provisioned with, you may attempt to grant a role to this fake user. Select the role you desire and roll 1d6. If the rolled number is greater than the number of permissions that a role has access to, then the fake user has access to the role, otherwise the entire action is a failure.

### `PROBE`

Probes the system with a non-invasive query. This returns basic information concerning the system and user's current status, such as whether the system requires authentication or whether the system is online.

If the user is authenticated, it returns the following response:

```bash
USER-AUTHENTICATION:   True
USER-AUTHORIZATION:    ROLE → ['READ', 'UPDATE', 'CREATE', 'DELETE']
SYSTEM-POWER:          Off / On
SYSTEM-FIREWALL:       Offline / Online
SYSTEM-NETWORK:        Offline / Online
SYSTEM-SECURITY:       Offline / Online
SYSTEM-DRIVES-LOCAL:   ['DRIVE1', 'DRIVE2', 'DRIVE3', ...]
SYSTEM-DRIVES-NETWORK: ['DRIVE4', 'DRIVE5', 'DRIVE6', ...]
SYSTEM-ROLES:          ['ROLE1', ...]
SYSTEM-ROLES-ROLE1:    ['READ', 'CREATE', 'UPDATE', 'DELETE']
```

If the user is unauthenticated, it returns the following response:

```bash
USER-AUTHENTICATION:   False
SYSTEM-POWER:          Off / On
SYSTEM-NETWORK:        Offline / Online
```

## `II — Unique System Features`

Powerful security systems can have unique features, but only ever one.

## `II — Character Skills and Attributes`

In many game systems, a character can have skills or attributes that relate to hacking. In general, a character with proper skills or attributes can automatically succeed on one relevant roll of their choice.

- With an `Engineering` skill you can succeed on one physical hacking action.
- With a `Computers` skill you can succeed on one digital hacking action.
- With a `Hacking` skill you can succeed on one physical/digital hacking action.
- With high `Intelligence` you can succeed on one physical/digital hacking action.

## `II — EXAMPLE SYSTEMS`

### `COMPANY-SERVER-FARM`

A common server farm with high security and lots of proprietary information. A perfect case for a hacker breaking into a building and trying to find some key information stored on a drive somewhere.

| Feature        | Details                                                |
| -------------- | ------------------------------------------------------ |
| Authentication | Requires an IT keycard (`PHYS-DEVC`)                   |
| Authorization  | System provisioned with roles: [`IT-ADMIN`, `IT-USER`] |
| Storage        | 6 local drives + 1 network drive                       |
| Operations     | `LOCAL-COMMS`, `LOCAL-CAMERAS`                         |

<br />

| Roles      | Permissions                            |
| ---------- | -------------------------------------- |
| `IT-ADMIN` | [`READ`, `UPDATE`, `CREATE`, `DELETE`] |
| `IT-USER`  | [`READ`]                               |

<br />

| Drives | Location | Authorized | Contents                                |
| ------ | -------- | ---------- | --------------------------------------- |
| `A:`   | Local    | True       | Temporary file storage. Nothing vital.  |
| `B:`   | Local    | True       | System logs and user telemetry.         |
| `C:`   | Local    | True       | Building surveillance footage.          |
| `D:`   | Local    | True       | Company email records.                  |
| `E:`   | Local    | True       | Company financial records.              |
| `F:`   | Local    | True       | Company security codes.                 |
| `G:`   | Network  | True       | Massive backups of all company records. |

#### `PROBE Response`

```bash
SYSTEM-POWER:          On
SYSTEM-FIREWALL:       Online
SYSTEM-NETWORK:        Online
SYSTEM-SECURITY:       Online
SYSTEM-DRIVES-LOCAL:   ['A:', 'B:', 'C:', 'D:', 'E:', 'F:']
SYSTEM-DRIVES-NETWORK: ['G:']
SYSTEM-ROLES:          ['IT-ADMIN', 'IT-USER']
SYSTEM-ROLES-IT-ADMIN: [`READ`, `UPDATE`, `CREATE`, `DELETE`]
SYSTEM-ROLES-IT-USER:  [`READ`]
```

## `II — EXAMPLE STRATEGIES`

### `ACCESS LOCAL CONTROLS QUICKLY`

- [Hardwire](#hardwire) to disable the security system.
- [Operate](#operate) to unlock doors, send messages through building communications, or shut down surveillance systems.

### `ACCESS LOCATION FREELY`

- [Infiltrate](#infiltrate) to temporarily bypass the security system.
- [Operate](#operate) to unlock all passages and doors in the location.
- [Shutdown](#shutdown) to disable the system until it is manually powered back on and restarted.

### `QUICK INFORMATION SEARCH`

- [Probe](#probe) the system for information.
- [Disguise](#disguise) yourself as an authenticated user.
- [Search](#search) to find key information.

### `DEEP INFORMATION RETRIEVAL`

- [Probe](#probe) the system for information.
- [Disguise](#disguise) yourself as an authenticated user.
- [Probe](#probe) the system for authenticated-only information.
- [Disguise](#disguise) yourself as an authorized user with a high privilege role.
- [Disable](#disable) the security system.
- [Search](#search) to find drive with key information.
- [Retrieve](#retrieve) to back up all information from the drive.
