import Client from "./core/client.js";
import type { SyncData } from "./cs-api/generated/matrix.js";
import process from "node:process";

async function main(): Promise<void> {
    const client = new Client({
        homeserverUrl: process.env.MX_HOMESERVER_URL ?? "",
    });

    try {
        await client.login(process.env.MX_TOKEN ?? "");
    } catch (error: unknown) {
        console.log(error);
    }
}

await main();
