import { getCustomRepository } from "typeorm";
import { SettingsRepositories } from "../repositories/SettingsRepositories";


interface ICreateSettings{
    username: string;
    chat: boolean;
} 
class SettingsServices{
    async execute({ username, chat }: ICreateSettings) {
        const settingsRepositories = getCustomRepository(SettingsRepositories)

        const usernameExists = await settingsRepositories.findOne({username})
        if (usernameExists) {
            throw new Error("UserName already exists");
            
        }
        const settings = settingsRepositories.create({
            username,
            chat
        })
        await settingsRepositories.save(settings)
        
        return (settings)
    }
}
export {SettingsServices}