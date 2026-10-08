import { userRepository } from "./user.repository";

export const getUsersService: () => Promise<any[]> = async () => {
    const users = await userRepository.getUsers();
    return users;
};

export const createUserService: (userData: any) => Promise<any> = async (userData) => {
    const user = await userRepository.createUser(userData);

    return user;
};
