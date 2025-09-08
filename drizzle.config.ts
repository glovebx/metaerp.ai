import * as dotenv from 'dotenv'
import type { Config } from 'drizzle-kit'
dotenv.config()

export default {
  // driver: 'pg',
  dialect: "postgresql",
  schema: './db/schema.ts',
  out: './db/migrations',
  dbCredentials: { url: process.env.DATABASE_URL || '' },
} satisfies Config
