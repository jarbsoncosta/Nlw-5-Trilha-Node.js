import { getCustomRepository, Repository } from "typeorm";
import { User } from "../entities/User";
import { UsersRepositories } from "../repositories/UsersRepositories";


class UserServices{
    private usersRepositories: Repository<User>
    constructor() {
        this.usersRepositories =  getCustomRepository(UsersRepositories)
    }
    
    async execute(email:string) {
               
        const userExists = await this.usersRepositories.findOne({email})
        if (userExists) {
            return userExists
        }
        const user = this.usersRepositories.create({ email })

        await this.usersRepositories.save(user)

        return user        
    }
}

export{UserServices}