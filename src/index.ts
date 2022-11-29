import Client from "./core/client.js";
import process from "node:process";

const client = new Client({
    homeserverUrl: process.env.MX_HOMESERVER_URL ?? "",
});

async function onReady(): Promise<void> {
    const room = await client.rooms.getRoom("!xGDfMAzPVtiqAxdQIu:privacyguides.org");
    const states = await room.events.getRoomState();
    for (const state of states) {
        if (state.type === "m.room.member") {
            console.log(state.content.membership);
        }
    }
}

async function main(): Promise<void> {
    client.on("logger.debug", console.debug);
    client.on("logger.error", console.error);
    client.on("logger.info", console.info);
    client.on("logger.warn", console.warn);
    client.on("ready", onReady);

    await client.login(process.env.MX_TOKEN ?? "");
}

await main();
