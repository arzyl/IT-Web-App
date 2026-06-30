import { integer, pgTable, varchar, timestamp } from "drizzle-orm/pg-core"

export const userTable = pgTable("users",{
    id: integer().primaryKey().generatedAlwaysAsIdentity(),
    activity: varchar().notNull(),
    assignee: varchar().notNull(),
    priority: varchar().notNull(),
    createAt: timestamp().defaultNow().notNull(),
    status: varchar().notNull()
})

export const historyTable = pgTable("history",{
    h_id: integer().references(()=> userTable.id),
    finishDate: timestamp().defaultNow().notNull()
})