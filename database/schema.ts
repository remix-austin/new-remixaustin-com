import { sql } from "drizzle-orm";
import { integer, sqliteTable, text } from "drizzle-orm/sqlite-core";

const timestamps = {
    updatedAt: integer(),
    createdAt: integer().default(sql`(CURRENT_TIMESTAMP)`).notNull(),
}

const guestBook = sqliteTable("guestBook", {
    id: integer().primaryKey({ autoIncrement: true }),
    name: text().notNull(),
    email: text().notNull().unique(),
});

const talks = sqliteTable("talks", {
    id: integer().primaryKey({ autoIncrement: true }).notNull(),
    name: text().notNull(),
    email: text().notNull(),
    phone: text().notNull(),
    title: text().notNull(),
    description: text().notNull(),
    status: text({enum: ["submitted", "rejected", "scheduled", "completed"]}).default("submitted"),
    date: text(),
    link: text(),
    ...timestamps,
})

export {guestBook, talks}
