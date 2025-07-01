import { pgTable, uuid } from "drizzle-orm/pg-core";

export const podcasts = pgTable("podcasts", {
  id: uuid("id").primaryKey().defaultRandom(),
});
