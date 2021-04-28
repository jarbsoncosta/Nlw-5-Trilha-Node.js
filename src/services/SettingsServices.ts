import { getCustomRepository, Repository } from "typeorm";
import { Setting } from "../entities/Setting";
import { SettingsRepositories } from "../repositories/SettingsRepositories";


interface ICreateSettings{
    username: string;
    chat: boolean;
} 
class SettingsServices{
    private settingsRepositories: Repository<Setting>
    constructor() {
        this.settingsRepositories = getCustomRepository(SettingsRepositories)
    }

    async execute({ username, chat }: ICreateSettings) {
    const usernameExists = await this.settingsRepositories.findOne({username})
        if (usernameExists) {
            throw new Error("UserName already exists");
            
        }
        const settings = this.settingsRepositories.create({
            username,
            chat
        })
        await this.settingsRepositories.save(settings)
        
        return (settings)
    }
}
export {SettingsServices}