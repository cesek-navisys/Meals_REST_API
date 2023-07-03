import {User} from "../model/user.entity";
import { USER } from "../../../constants";


export const userProviders = [
    {
        provide: USER,
        useValue: User,
    },
];
