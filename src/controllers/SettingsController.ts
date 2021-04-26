import { Request, Response } from "express";
import { SettingsServices } from '../services/SettingsServices'




class SettingsController {
    async create(request: Request, response: Response){
        const {username, chat} = request.body
        const createSettings = new SettingsServices()

        try {
            const setting = await createSettings.execute({
            username,
            chat
        })
          return response.json(setting)
          
        } catch(err){
            return response.status(400).json({message:err.message})
          
      }

        
       
   }
    
    
}
export {SettingsController}