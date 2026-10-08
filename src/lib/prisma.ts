import { DATABASE_URL, NODE_ENV } from "../config/env.js";
import { PrismaPg } from "@prisma/adapter-pg";
import { PrismaClient } from "../generated/prisma/client.js";

const globalForPrisma = globalThis as unknown as {
    prisma: PrismaClient | undefined;
};

const adapter = new PrismaPg({
    connectionString: DATABASE_URL,
});

export const prisma =
    globalForPrisma.prisma ??
    new PrismaClient({
        adapter,
        log: ["query", "error", "warn"],
    });

if (NODE_ENV !== "production") {
    globalForPrisma.prisma = prisma;
}
