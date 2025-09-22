import { pgTable, serial, text, boolean, timestamp } from 'drizzle-orm/pg-core'

export const petitionSignatures = pgTable('petition_signatures', {
  id: serial('id').primaryKey(),
  name: text('name').notNull(),
  email: text('email'),
  zipCode: text('zip_code'),
  phone: text('phone'),
  message: text('message'),
  keepInformed: boolean('keep_informed').default(false),
  createdAt: timestamp('created_at').defaultNow(),
})