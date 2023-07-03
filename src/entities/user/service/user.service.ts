import {Inject, Injectable} from "@nestjs/common";
import {User} from "../model/user.entity";
import {CreateUserDto} from "../model/dto/create-user.dto";
import { USER } from "../../../constants";


@Injectable()
export class UserService {

    constructor(@Inject(USER) private userRepository: typeof User) {
    }

    async createUser(dto: CreateUserDto): Promise<User> {
        const user = await this.userRepository.create({
            name: dto.name,
        });
        return user.save();
    }

    async findAllUsers(): Promise<User[]> {
        return this.userRepository.findAll();
    }

    async deleteUserById(user_id: number): Promise<void> {
        await this.userRepository.destroy({ where: { user_id } });
    }
}
