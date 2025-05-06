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

export { talks };
