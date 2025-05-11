import { sql } from "drizzle-orm";
import { integer, sqliteTable, text } from "drizzle-orm/sqlite-core";

const timestamps = {
    updatedAt: integer().default(sql`(CURRENT_TIMESTAMP)`).notNull(),
    createdAt: integer().default(sql`(CURRENT_TIMESTAMP)`).notNull(),
};

const talks = sqliteTable("talks", {
    id: integer().primaryKey({ autoIncrement: true }).notNull(),
    name: text().notNull(),
    email: text().notNull(),
    phone: text().notNull(),
    title: text().notNull(),
    description: text().notNull(),
    status: text({ enum: ["submitted", "rejected", "scheduled", "completed"] }).default(
        "submitted",
    ),
    date: text(),
    link: text(),
    ...timestamps,
});

const signins = sqliteTable("signins", {
    id: integer().primaryKey({ autoIncrement: true }).notNull(),
    date: text().notNull(),
    firstName: text().notNull(),
    lastName: text().notNull(),
    email: text().notNull(),
    company: text().notNull(),
    remote: integer({ mode: "boolean" }).notNull(),
    familiarity: integer().notNull(),
    referrer: text({
        enum: ["website", "meetup", "friend", "twitter", "linkedin", "search", "other"],
    }).notNull(),
    desires: text({ mode: "json" }).notNull().$type<string[]>(),
    ...timestamps,
});

export { talks, signins };
