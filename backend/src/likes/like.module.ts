import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { TopicModule } from "src/topics/topic.module";
import { User } from "src/users/user.entity";
import { Topic } from "src/topics/topic.entity";
import { UserModule } from "src/users/user.module";
import { LikeService } from "./like.service";
import { LikeController } from "./like.controller";

@Module({
    imports: [
        TypeOrmModule.forFeature([ Topic ]),
        TopicModule,
        UserModule
    ],
    providers: [ LikeService],
    controllers: [ LikeController]
})
export class LikeModule{}