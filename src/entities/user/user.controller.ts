import {Body, Controller, Delete, Get, Param, Post} from "@nestjs/common";
import {UserService} from "./service/user.service";
import {CreateUserDto} from "./model/dto/create-user.dto";


@Controller('/api/v1/users')
export class UserController {

    constructor(private readonly userService: UserService) {
    }

    @Post()
    async create(@Body() dto: CreateUserDto) {
        return await this.userService.createUser(dto);
    }

    @Get()
    async getAllUsers() {
        return await this.userService.findAllUsers();
    }

    @Delete(':user_id')
    async remove(@Param('user_id') user_id: number) {
        await this.userService.deleteUserById(user_id);
    }
}
