import { PrismaClient } from "@prisma/client";


const prisma = new PrismaClient();

const main = async () => {
    const users = await prisma.user.create({
        data: {
            email: "This is a test user",
            name: "Test user",
            role: "ADMIN",
            password: "test "
        }
    })
    console.log(users);
}

main()
.then(() => prisma.$disconnect())
.catch(e => {
    console.error(e)
    process.exit(1)
});