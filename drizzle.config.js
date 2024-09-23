/** @type { import("drizzle-kit").Config } */
export default {
  schema: "./utils/schema.tsx",
  dialect: 'postgresql',
  dbCredentials: {
    url: 'postgresql://neondb_owner:f2FxLPS5QEyO@ep-twilight-recipe-a5holyex.us-east-2.aws.neon.tech/neondb?sslmode=require',
  }
};