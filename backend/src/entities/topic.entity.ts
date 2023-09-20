import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn } from "typeorm";

@Entity()
export class Topic{
    
    @PrimaryGeneratedColumn()
    id: number;

    @Column({nullable: false, length: 250 })
    content: string;

    @CreateDateColumn({ name: 'created_at' })
    createdAt: Date;
}