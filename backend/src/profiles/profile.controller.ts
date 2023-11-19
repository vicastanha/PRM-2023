import { ClassSerializerInterceptor, Controller, Get, Param, HttpException, HttpStatus, UseInterceptors } from "@nestjs/common";
import { User } from "src/users/user.entity";
import { UserService } from 'src/users/user.service';

@UseInterceptors(ClassSerializerInterceptor)
@Controller('profile')
export class ProfileController {

    constructor(
       private userService: UserService
    ) {}

    @Get(':username')
    getProfile(@Param('username') username: string): Promise<User> {
        const found = this.userService.findByUsername(username);
        if (!found) {
            throw new HttpException('User not found', HttpStatus.NOT_FOUND);
        }
        return found;
    }
}

