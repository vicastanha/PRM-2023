import { Body, Controller, Delete, Get, HttpCode, Param, ParseIntPipe, Post } from "@nestjs/common";
import { UserService } from "src/services/user.service";
import { get } from "http";
import { User } from "src/entities/user.entity";


@Controller('users')
export class UserController {
    constructor(private readonly service: UserService) { }

    @Get()
    findAll(): Promise<User[]> {
        return this.service.findAll();
    }

    @Get(':id')
    findById(@Param('id', ParseIntPipe) id: number): Promise<User> {
        return this.service.findById(id);
    }

    @Post(':id')
    create(@Body() user: User): Promise<User> {
        return this.service.create(user)
    }

    @Delete(':id')
    @HttpCode(204)
    delete(@Param('id', ParseIntPipe) id: number): Promise<void> {
    return this.service.delete(id);
    }


}