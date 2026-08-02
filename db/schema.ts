import { integer, sqliteTable, text } from "drizzle-orm/sqlite-core";

export const rsvps = sqliteTable("rsvps", {
  id: integer("id").primaryKey({ autoIncrement: true }),
  name: text("name").notNull(),
  email: text("email").notNull().unique(),
  friday: text("friday").notNull(),
  saturday: text("saturday").notNull(),
  dietary: text("dietary").notNull().default(""),
  note: text("note").notNull().default(""),
  updatedAt: text("updated_at").notNull(),
});
