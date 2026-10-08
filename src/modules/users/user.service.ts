import  { userRepository } from "./user.repository.ts";


export const getUsersService = async () => {
    const users = await userRepository.getUsers();
    return users;
};


export const createUserService = async (userData: any) => {
    const user = await userRepository.createUser(userData);

    return user;
};