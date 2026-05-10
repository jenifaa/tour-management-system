/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-console */
import { Server } from "http";

import mongoose from "mongoose";
import app from "./app";
import { envVars } from "./app/config/env";
import { seedSuperAdmin } from "./app/utils/seedSuperAdmin";
import { connectRedis } from "./app/config/redis.config";
let server: Server;
let isConnected = false;

const initializeContext = async () => {
  if (isConnected) return;
  try {
    if (mongoose.connection.readyState !== 1) {
      await mongoose.connect(envVars.DB_URL);
      console.log("Connected to db");
    }
    await connectRedis();
    await seedSuperAdmin();
    isConnected = true;
  } catch (error) {
    console.log(error);
  }
};

if (!process.env.VERCEL) {
  initializeContext().then(() => {
    server = app.listen(envVars.PORT, () => {
      console.log(`Server is listening at ${envVars.PORT}`);
    });
  });
}

process.on("SIGTERM", () => {
  console.log("SIGTERM detected");
  if (server) {
    server.close(() => {
      process.exit(1);
    });
  }
  process.exit(1);
});
process.on("unhandledRejection", () => {
  console.log("UnhandledRejection detected");
  if (server) {
    server.close(() => {
      process.exit(1);
    });
  }
  process.exit(1);
});
process.on("uncaughtException", () => {
  console.log("uncaughtException detected");
  if (server) {
    server.close(() => {
      process.exit(1);
    });
  }
  process.exit(1);
});

export default async (req: any, res: any) => {
  await initializeContext(); 
  return app(req, res);
};