import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Topic } from "src/topics/topic.entity";
import { Repository } from "typeorm";
import { Comment } from "./comment.entity";

//lugares com comment substituir por like para a prova

@Injectable()
export class CommentService {

    constructor(
        @InjectRepository(Comment)
        private readonly repository: Repository<Comment>,
    ) {}

    findByTopic(topic: Topic): Promise<Comment[]> {
        return this.repository.find({
            where: {
                topic: {// mantém o topic no like quando fizer a copia
                    id: topic.id
                }
            }
        });
    }
    create(topic: Comment): Promise<Comment> {
        return this.repository.save(topic);
    }
    async delete(id: number): Promise<void> {
        await this.repository.delete(id);
    }
}