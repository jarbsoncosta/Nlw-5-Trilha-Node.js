import {v4 as uuidv4} from 'uuid'
import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryColumn } from "typeorm";
import { User } from './User';



@Entity("messages")
class Message{
    @PrimaryColumn()
    id: string;

    @Column()
    admin_id: string;

    @Column()
    text: string;
    
    @JoinColumn({name:"user_id"})
    @ManyToOne(()=>User)
    use: User;

    @Column()
    user_id: string;

   

    @CreateDateColumn()
    created_at: Date;
    

    
    constructor() {
        if (!this.id) {
        this.id = uuidv4()
    }
}


}

export {Message}