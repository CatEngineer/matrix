
# Examples


## Working with Rooms

```ts
import mx from 'mx';

// Events
const client = new mx.Client('https://matrix.org');
const room = await client.rooms.join('#matrix:matrix.org');
const timeline = await room.events.getTimeline(20 /* optional */);
console.log(timeline);

// State Events
const state = await room.events.getState('m.room.member', '@alice:matrix.org');
const states = await room.events.getState();

// Room Profile
const topic = await room.getTopic();
await room.setTopic('New Topic!');
await room.removeTopic();
await room.setName('New Name!');
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

## Working with Members

```ts
import mx from 'mx';

const client = new mx.Client('https://matrix.org');
const room = await client.rooms.get('#matrix:matrix.org');
const member = await room.members.getMember('@example:matrix.org');

// Power Levels
await member.getPowerLevel();

// Kicking / Banning / Purging
await member.kick('You are bad');
await member.ban('You are bad', 1000 /* optional */);
await member.purge(10, 'Optional Reason' /* optional */);
await member.pardon(); // or unban();

// DM
const room = await member.getDMs();
```

