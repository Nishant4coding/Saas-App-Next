/* eslint-disable no-var */
import { PrismaClient } from "@prisma/client";

declare global {
  // Extend the global object to include the `prisma` property

  var prisma: PrismaClient | undefined;
}

// Create a single PrismaClient instance and attach it to `globalThis`
export const client = globalThis.prisma || new PrismaClient();

if (process.env.NODE_ENV !== "production") {
  globalThis.prisma = client; // Cache the Prisma client in development
}
