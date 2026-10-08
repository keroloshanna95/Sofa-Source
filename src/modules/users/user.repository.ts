import { prisma } from "../../lib/prisma";

const getUsers: () => Promise<any[]> = async () => {
    const users = await prisma.user.findMany();
    if (!users) {
        throw new Error("No users found");
    }
    return users;
};

const createUser: (userData: any) => Promise<any> = async (userData) => {
    const user = await prisma.user.create({ data: userData });
    return user;
};

export const userRepository = {
    getUsers,
    createUser
};


