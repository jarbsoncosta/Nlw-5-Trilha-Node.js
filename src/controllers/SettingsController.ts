import { Request, Response } from "express";
import { getCustomRepository } from "typeorm";
import { SettingsRepositories } from "../repositories/SettingsRepositories";



class SettingsController {
    async create(request: Request, response: Response){
        const { username, chat } = request.body
        
         const settingsRepositories = getCustomRepository(SettingsRepositories)
        const settings = settingsRepositories.create({
            username,
            chat
        })
        await settingsRepositories.save(settings)

        return response.json(settings)
        
       
   }
    
    
}
export {SettingsController}