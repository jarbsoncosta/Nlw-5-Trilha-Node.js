import { Request, Response } from "express";
import { SettingsServices } from '../services/SettingsServices'




class SettingsController {
    async create(request: Request, response: Response): Promise<Response>{
        const {username, chat} = request.body
        const createSettings = new SettingsServices()

        const setting = createSettings.execute({
            username,
            chat
        })

        return response.json(setting)

       
       
   }
    
    
}
export {SettingsController}