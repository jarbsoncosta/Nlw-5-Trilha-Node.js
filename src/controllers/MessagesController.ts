import { Request, Response } from "express";
import { MessagesServices } from "../services/MessagesServices";


class MessagesController {
    async create(request: Request, response: Response): Promise<Response> {
        const { user_id, text, admin_id } = request.body
        
        const messagesServices = new MessagesServices()

        const createMessages = await messagesServices.execute({ admin_id, text, user_id })
        
        return response.json({ createMessages })
        
    }
    async ShowByUser(request: Request, response: Response): Promise<Response>{
        const { id} = request.params
        const messagesServices = new MessagesServices()

        const allMessages = await messagesServices.listByUser(id)

        return response.json(allMessages)
    }


}
export {MessagesController}