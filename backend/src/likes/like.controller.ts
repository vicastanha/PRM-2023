import { Body, ClassSerializerInterceptor, Controller, Delete, Get, HttpCode, HttpException, HttpStatus, Param, ParseIntPipe, Post, Put, Query, UseGuards, UseInterceptors } from "@nestjs/common";
import { TopicService } from "src/topics/topic.service";
import { AuthGuard } from "src/auth/auth.guard";
import { LikeService } from "./like.service";
import { Like } from "./like.entity";


@UseInterceptors(ClassSerializerInterceptor)
@Controller('likes')
export class LikeController {
    constructor(
        private readonly likeService: LikeService,
        private readonly topicService: TopicService
    ) {}

    @UseGuards(AuthGuard)
    @Get()
    async findByTopic(@Query() query): Promise<Like[]> {

        if (!query?.topic) {
            throw new HttpException('Tópico não informado', HttpStatus.BAD_REQUEST)
        }

        //Busco o tópico
        const found = await this.topicService.findById(query.topic);

        if (!found) {
            throw new HttpException('Tópico não encontrado', HttpStatus.BAD_REQUEST)
        }

        return this.likeService.findByTopic(found);  
    }

    @Post()
    create(@Body() topic: Like): Promise<Like> {
        return this.likeService.create(topic);
    }

    @Delete(':id')
    @HttpCode(204)
    async delete(@Param('id', ParseIntPipe) id: number): Promise<void> {
        return this.likeService.delete(id);
    }

}