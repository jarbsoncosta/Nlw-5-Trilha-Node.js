import { getCustomRepository } from "typeorm";
import { UsersRepositories } from "../repositories/UsersRepositories";

interface UsersCreate{
    email: string
}


class UserServices{
    async execute({email}:UsersCreate) {
        const usersRepositories = getCustomRepository(UsersRepositories)
        
        const userExists = await usersRepositories.findOne({email})
        if (userExists) {
            throw new Error("User Already Exists")
        }
        const user = usersRepositories.create({ email })

        await usersRepositories.save(user)

        return user        
    }
}

export{UserServices}