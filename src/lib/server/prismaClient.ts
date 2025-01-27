import { PrismaClient } from '@prisma/client';

const globalForPrisma = globalThis as unknown as { prismaClient: PrismaClient };

const prismaClient = globalForPrisma.prismaClient || new PrismaClient();

if (process.env.NODE_ENV !== 'production') globalForPrisma.prismaClient = prismaClient;

export { prismaClient };
