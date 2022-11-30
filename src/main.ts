import Client, { RedisCacheFactory } from "./index.js";
import process from "node:process";

const redisUrl = process.env.REDIS_URL;
const cache = redisUrl ? new RedisCacheFactory(redisUrl) : undefined; 
const client = new Client({
    homeserverUrl: process.env.MX_HOMESERVER_URL ?? "",
    cache,
});

async function onReady(): Promise<void> {
    const room = await client.rooms.getRoom("!xGDfMAzPVtiqAxdQIu:privacyguides.org");
    const states = await room.events.getRoomState();
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