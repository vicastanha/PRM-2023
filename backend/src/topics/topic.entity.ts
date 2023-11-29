import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, ManyToOne, JoinColumn, UpdateDateColumn, VirtualColumn, TreeParent, Tree } from "typeorm";
import { User } from "../users/user.entity";

@Tree('materialized-path')
@Entity()
export class Topic {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({ nullable: false, length: 250 })
    content: string;

    @VirtualColumn({ query: (alias) => `select  count (id) from topic_user_comment where topic_id = ${alias}.id` })
    totalComments: number;

    @ManyToOne(() => User, { eager: true, nullable: false })
    @JoinColumn({ name: 'user_id' })
    owner: User;

    @TreeParent()
    @JoinColumn({ name: 'topic_id' })
    repost: Topic;

    @Column({ name: 'topic_id', nullable: true })
    topic_id: number;

    @CreateDateColumn({ name: 'created_at' })
    createdAt: Date;


    @UpdateDateColumn({ name: 'updated_at' })
    UpdatedAt: Date;

}