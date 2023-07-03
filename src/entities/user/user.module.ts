import { Module } from '@nestjs/common';
import {UserService} from "./service/user.service";
import {userProviders} from "./storage/user.providers";
import {UserController} from "./user.controller";
import {User} from "./model/user.entity";


@Module({
    imports: [User],
    controllers: [UserController],
    providers: [
        UserService,
        ...userProviders,
    ],
})
export class UserModule {}
