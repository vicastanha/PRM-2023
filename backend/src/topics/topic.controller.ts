import { Body, ClassSerializerInterceptor, Controller, Delete, Get, HttpCode, HttpException, HttpStatus, Param, ParseIntPipe, Post, Put, Query, UseGuards, UseInterceptors } from "@nestjs/common";
import { Topic } from "src/topics/topic.entity";
import { AuthGuard } from "src/auth/auth.guard";
import { TopicService } from "src/topics/topic.service";
import { UserService } from "src/users/user.service";


@UseInterceptors(ClassSerializerInterceptor)
@Controller('topics')
export class TopicController {
    constructor(
        private readonly service: TopicService,
        private readonly userService: UserService
    ) {}


    @UseGuards(AuthGuard)
    @Get()
    async findAll(@Query() query): Promise<Topic[]> {

        if (query?.username) {
            //Busco os tópicos do usuário
            const found = await this.userService.findByUsername(query.username);

            if (!found) {
                throw new HttpException('Usuário não encontrado', HttpStatus.BAD_REQUEST)
            }

            return this.service.findByUser(found);
        } else {
            return this.service.findAll();
        }
    }


    @Get(':id')
    findById(@Param('id', ParseIntPipe) id: number): Promise<Topic> {
        return this.service.findById(id);
    }

    @Post()
    create(@Body() topic: Topic): Promise<Topic> {
        return this.service.create(topic)
    }


    @Delete(':id')
    @HttpCode(204)
    async delete(@Param('id', ParseIntPipe) id: number): Promise<void> {
        const found = await this.service.findById(id);
        if (!found) {
            throw new HttpException('User not found', HttpStatus.NOT_FOUND);
        }
        return this.service.delete(found.id);

    }
    @Put(':id')
    async update(@Param('id', ParseIntPipe) id: number, @Body() topic: Topic): Promise<Topic> {
        const found = await this.service.findById(id);
        if (!found) {
            throw new HttpException('Topic not found', HttpStatus.NOT_FOUND);
        }
        return found;
    }



}