
A Matrix bot SDK for TypeScript.

```sh
npm i @catengineering/matrix
pnpm i @catengineering/matrix
yarn add @catengineering/matrix
```

# Examples

The following are demonstrations of the various features of the library. Some
features demonstrated may not exist just yet, they are referenced for what they
will be.

## Client Initialization

```ts
import Client from '@catengineer/matrix';

// The client has a lot of configuration, but it can all 
// be skipped by passing a homeserver URL instead.
const client = new Client('https://matrix.org');
// Login Process
await client.login('username', 'password');
// or
await client.login('token');
```


## Working with Rooms

```ts
// Events
const room = await client.rooms.join('#matrix:matrix.org');
const timeline = await room.events.getTimeline(20 /* optional */);
console.log(timeline);

// Room Type
// there will probably be more room types out of this.
const type = await room.getType(); /* DM, Space, Room */

// State Events
const state = await room.events.getState('m.room.member', '@alice:matrix.org');
const states = await room.events.getState();

// Room Profile
const topic = await room.getTopic();
await room.setTopic('New Topic!');
await room.removeTopic();

const name = await room.getName();
await room.setName('New Name!');

const avatar = await room.getAvatar();
const avatarUrl = await room.getAvatarUrl();
await room.setAvatar('mxc://matrix.org/abc123');
await room.setAvatar(/* Buffer */);
await room.removeAvatar();


// Inviting
await room.members.invite('@bob:matrix.org');
const invite = await room.members.getInvite('@bob:matrix.org');
await invite.cancel();
const knock = await room.members.getKnock('@bob:matrix.org');
await knock.approve();
await knock.decline();
```

## Working with Yourself

```ts
const room = await client.rooms.join('#matrix:matrix.org');
const me = await room.getSelf();
me.setDisplayName('New Display Name!');
me.setAvatarUrl('mxc://matrix.org/abc123');
```

## Working with Members

```ts
const room = await client.rooms.get('#matrix:matrix.org');
const member = await room.members.getMember('@example:matrix.org');

// Power Levels
await member.getPowerLevel();

// Kicking / Banning / Purging
await member.kick('You are bad');
await member.ban('You are bad', 1000 /* optional */);
await member.purge(10, 'stop spamming' /* optional */);
await member.pardon(); // or unban();

// DM
const room = await member.getDMs();
```

## Handling Events

```ts
// Syncing
client.on('sync', (data) => {});

// Events
// 
client.on('room.leave', (leave) => {});

// Every state event of every room you're currently in
client.on('room.state', (state) => {});

// Every event of every room you're currently in
client.on('room.event', (event) => {});

// Finally provide an event type you want to listen to
client.on('m.room.member', (event) => {});

// Internal Logging 
client.on('debug', console.log);
```

