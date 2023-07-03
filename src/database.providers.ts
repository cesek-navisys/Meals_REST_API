import { Sequelize } from 'sequelize-typescript';
import {User} from "./entities/user/model/user.entity";
import {Meal} from "./entities/meal/model/meal.entity";
import {Answer} from "./entities/answer/model/answer.entity";


export const databaseProviders = [
    {
        provide: 'SEQUELIZE',
        useFactory: async () => {
            const sequelize = new Sequelize({
                dialect: 'postgres',
                host: 'localhost',
                port: 5432,
                username: 'postgres',
                password: '786123',
                database: 'demo-task',
            });
            sequelize.addModels([User, Meal, Answer]);
            await sequelize.sync();
            return sequelize;
        },
    },
];
