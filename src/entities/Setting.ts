import {v4 as uuidv4} from 'uuid'
import { Entity, Column, PrimaryColumn, UpdateDateColumn, CreateDateColumn } from 'typeorm'

@Entity("settings")
class Setting {
    @PrimaryColumn()
    id: string;
   
    @Column()
    username: string;
    
    @Column()
    chat: boolean;

    @UpdateDateColumn()
    updated_at: Date;
    
    @CreateDateColumn()
    created_at: Date;


    constructor() {
        if (!this.id) {
            this.id = uuidv4();
    }
    }
}

export {Setting}