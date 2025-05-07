import fs from "node:fs";
import path from "node:path";
import type { Config } from "drizzle-kit";
import { execSync } from "node:child_process";

const createDatabase = () => {
    execSync(
        `wrangler d1 execute DB --command "SELECT name FROM sqlite_master WHERE type='table';"`,
    );

    execSync("bun run db:migrate");

    const database = getDatabase()!;
    return database;
};

const getDatabase = () => {
    const d1Directory = path.join(
        process.cwd(),
        ".wrangler/state/v3/d1/miniflare-D1DatabaseObject",
    );

    if (!fs.existsSync(d1Directory)) {
        return null;
    }

    const databases = fs.readdirSync(d1Directory).filter(file => file.endsWith(".sqlite"));

    const sortedDatabases = databases
        .map(file => {
            const filePath = path.join(d1Directory, file);
            const stats = fs.statSync(filePath);
            const time = stats.mtime.getTime();

            return {
                name: file,
                time,
            };
        })
        .sort((a, b) => b.time - a.time);

    const latestDatabase = sortedDatabases.at(0);

    if (!latestDatabase) {
        return null;
    }

    const database = path.join(d1Directory, latestDatabase.name);
    return database;
};

const getDbUrl = () => {
    let database = getDatabase();

    if (!database) {
        console.warn("\nNo sqlite databases found locally. Creating one now...");
        database = createDatabase();
    }

    return database;
};

const common = {
    out: "./drizzle",
    schema: "./database/schema.ts",
    dialect: "sqlite",
    migrations: {
        table: "drizzle",
    },
} satisfies Config;

const createLocalConfig = () => {
    const dbUrl = getDbUrl();

    const localConfig = {
        ...common,
        dbCredentials: {
            url: dbUrl,
        },
    } satisfies Config;

    return localConfig;
};

const remoteConfig = {
    ...common,
    driver: "d1-http",
    dbCredentials: {
        accountId: process.env.CLOUDFLARE_ACCOUNT_ID!,
        databaseId: process.env.CLOUDFLARE_DATABASE_ID!,
        token: process.env.CLOUDFLARE_API_TOKEN!,
    },
} satisfies Config;

const config = process.env.CI ? remoteConfig : createLocalConfig();
export default config;
