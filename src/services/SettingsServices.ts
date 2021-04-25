import { getCustomRepository } from "typeorm";
import { SettingsRepositories } from "../repositories/SettingsRepositories";


interface IRequest{
    username: string;
    chat: boolean;
} 
class SettingsServices{
    async execute({ username, chat }: IRequest): Promise<void> {
        const settingsRepositories = getCustomRepository(SettingsRepositories)
        const settings = settingsRepositories.create({
            username,
            chat
        })
        await settingsRepositories.save(settings)
        
        
    }
}
export {SettingsServices}