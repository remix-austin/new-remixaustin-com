import type { Config } from "drizzle-kit";
import fs from "node:fs"
import path from "node:path"

const getDbUrl = () => {
    const d1Directory = path.join(
        process.cwd(),
        ".wrangler/state/v3/d1/miniflare-D1DatabaseObject",
    );

    const files = fs
        .readdirSync(d1Directory)
        .filter(file => file.endsWith(".sqlite"))
        .map(file => {
            const filePath = path.join(d1Directory, file);
            const stats = fs.statSync(filePath);
            const time = stats.mtime.getTime();

            return {
                name: file,
                time,
            }
        })
        .sort((a, b) => b.time - a.time);

    const latestFile = files[0];

    if (!latestFile) {
        throw new Error("No SQLite files found in the D1 directory.");
    }

    const dbUrl = path.join(d1Directory, latestFile.name);
    return dbUrl;
};

const common = {
    out: "./drizzle",
    schema: "./database/schema.ts",
    dialect: "sqlite",
} satisfies Config;

const localConfig = {
    ...common,
    dbCredentials: {
        url: getDbUrl(),
    },
} satisfies Config;

const remoteConfig = {
    ...common,
    driver: "d1-http",
    dbCredentials: {
        accountId: process.env.CLOUDFLARE_ACCOUNT_ID!,
        databaseId: process.env.CLOUDFLARE_DATABASE_ID!,
        token: process.env.CLOUDFLARE_API_TOKEN!,
    },
} satisfies Config;

const config = process.env.NODE_ENV !== "production" ? localConfig : remoteConfig;
export default config
