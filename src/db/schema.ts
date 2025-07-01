import {
  pgTable,
  uuid,
  text,
  integer,
  timestamp,
  jsonb,
} from "drizzle-orm/pg-core";

export const podcasts = pgTable("podcasts", {
  id: uuid("id").primaryKey().defaultRandom(), // internal UUID
  trackId: integer("track_id").unique().notNull(), // iTunes unique ID for the podcast
  collectionName: text("collection_name").notNull(), // podcast title
  artistName: text("artist_name").notNull(), // creator name
  feedUrl: text("feed_url"),
  collectionViewUrl: text("collection_view_url"), // Link to Apple Podcast
  artworkUrl600: text("artwork_url_600"), // High-res thumbnail
  primaryGenreName: text("primary_genre_name"), // e.g., "Business"
  genres: jsonb("genres"), // full array ["Business", "Podcasts", ...]
  releaseDate: text("release_date"),
  country: text("country"),
  searchTerm: text("search_term").notNull(), // for mapping search input
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

// Type for inserting new podcast record, excluding internal fields
export type NewPodcastInput = Omit<
  typeof podcasts.$inferInsert,
  "id" | "createdAt"
>;
