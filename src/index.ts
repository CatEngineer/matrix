import Client from "./core/client.js";
import type { SyncData } from "./cs-api/generated/matrix.js";
import process from "node:process";

async function main(): Promise<void> {
    const client = new Client({
        homeserverUrl: process.env.MX_HOMESERVER_URL ?? "",
    });
    await client.login(process.env.MX_TOKEN ?? "");
    const event = await client.events.getEvent(
        '!CRupQtOJNBgnlrLkdH:arcticfoxes.net', 
        '$gpQX80qUOEh29THVN4hXVXfnhcqNBYHajjPQ6BHBev8',
    );
    console.log(event.unsigned?.redacted_because);
}

await main();
