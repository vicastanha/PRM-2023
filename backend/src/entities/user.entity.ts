import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn } from "typeorm";

@Entity()
export class User{
    // auto incremento e primary key
    @PrimaryGeneratedColumn() 
    id: number;

    @Column({nullable: false, length: 50})
    fullname: string;

    @Column({nullable: false, length: 50})
    username: string;
    
    @Column({ length: 250})
    description: string;

    @CreateDateColumn({name:'created_at'})
    createdAt: Date;
}