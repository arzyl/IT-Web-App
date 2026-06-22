import { integer, pgTable, varchar, timestamp } from "drizzle-orm/pg-core"

export const userTable = pgTable("users",{
    id: integer().primaryKey().generatedAlwaysAsIdentity(),
    activity: varchar().notNull(),
    assignee: varchar().notNull(),
    priority: varchar().notNull(),
    createAt: timestamp().defaultNow().notNull(),
})