import { prisma } from "@/lib/prisma/db";

export async function getAllUsers() {
    return await prisma.user.findMany();
}

export async function createRandomUser() {
    const rand = Math.random().toString(36).substring(7);
    const user = await prisma.user.create({
        data: {
            name: rand,
            email: rand + "@example.com"
        }
    });
    return user;
}

export function exitIfProductionDatabase() {
    if(!process.env.DATABASE_URL.includes("localhost")) {
        console.error("\x1b[1m\x1b[31mThis script/function is DANGEROUS to run on production database. Please change environtment variable for DATABASE_URL to your local database.\x1b[0m");
        process.exit(1);
    }
}

export async function DANGEROUSLY_deleteAllUsers() {
    exitIfProductionDatabase();
    await prisma.$executeRaw`TRUNCATE TABLE "User" RESTART IDENTITY CASCADE;`
}
export async function createUser(name: string, email: string) {
    return await prisma.user.create({
        data: {
            name,
            email
        }
    });
}