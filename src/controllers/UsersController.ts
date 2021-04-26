import { Request, Response } from "express"
import { UserServices } from "../services/UsersServices"




class UsersController {
    async create(request: Request, response: Response) {
        const { email } = request.body

        const usersServices = new UserServices()
        try {
            const user = await usersServices.execute({ email })
        
            return response.json({user})
            
        } catch (err) {
            response.status(400).json({message:err.message})

            
        }
             
    }

}

export{UsersController}