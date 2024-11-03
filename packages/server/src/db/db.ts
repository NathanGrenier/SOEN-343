import pg from "pg";
import dotenv from "dotenv";

dotenv.config();

const { Pool } = pg;

class Database {
  private static instance: Database;
  private pool: pg.Pool;

  private constructor() {
    this.pool = new Pool({
      connectionString: process.env.DATABASE_URL,
    });

    this.pool.on("connect", () => {
      console.log("Connected to the database");
    });

    this.pool.on("error", (err) => {
      console.error("Database error:", err);
    });
  }

  public static getInstance(): Database {
    if (!Database.instance) {
      Database.instance = new Database();
    }
    return Database.instance;
  }

  public getPool(): pg.Pool {
    return this.pool;
  }
}

export default Database.getInstance();
