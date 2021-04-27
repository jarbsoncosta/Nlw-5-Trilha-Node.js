import { getCustomRepository } from "typeorm";
import { UsersRepositories } from "../repositories/UsersRepositories";


class UserServices{
    async execute(email:string) {
        const usersRepositories = getCustomRepository(UsersRepositories)
        
        const userExists = await usersRepositories.findOne({email})
        if (userExists) {
            return userExists
        }
        const user = usersRepositories.create({ email })

        await usersRepositories.save(user)

        return user        
    }
}

export{UserServices}