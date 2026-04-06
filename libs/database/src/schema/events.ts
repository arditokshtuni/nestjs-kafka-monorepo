import {
    pgTable,
    uuid,
    varchar,
    text,
    timestamp,
    integer,
    pgEnum,
} from 'drizzle-orm/pg-core';
import { users } from './users';
import { title } from 'process';

export const eventStatusEnum = pgEnum('event_status', [
    'DRAFT',
    'PUBLISHED',
    'CANCELLED',
]);

export const events = pgTable('events', {
    id: uuid('id').defaultRandom().primaryKey(),
    title: varchar('title', { length: 255 }).notNull(),
    descriptio: text('description'),
    date: timestamp('date').notNull(),
    location: varchar('location', { length: 255 }).notNull(),
    capacity: integer('capacity').notNull(),
    price: integer('price').default(0).notNull(),
    status: eventStatusEnum('status').default('DRAFT').notNull(),
    organizerId: uuid('organazier_id')
        .references(() => users.id)
        .notNull(),
    createdAt: timestamp('created_at').defaultNow().notNull(),
    updatedAt: timestamp('updated_at').defaultNow().notNull(),
});

export type Event = typeof events.$inferSelect;
export type NewEvents = typeof events.$inferInsert;
