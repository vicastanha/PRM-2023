import { User } from "src/entities/user.entity";
import { Repository } from "typeorm";
import { InjectRepository } from "@nestjs/typeorm";
import { Injectable } from "@nestjs/common";

@Injectable()

export class UserService {

    constructor(
        @InjectRepository(User)
        private readonly repository: Repository<User>
    ) { }

    findAll(): Promise<User[]> {
        return this.repository.find();
    }

}