import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
    console.log('Truncating tables...');
    await prisma.$executeRaw`TRUNCATE TABLE "users" RESTART IDENTITY CASCADE;`

    console.log('Seeding...');
    // Do stuff here

    console.log('Seeding completed.');
}
  

main().then(prisma.$disconnect).catch(console.error);