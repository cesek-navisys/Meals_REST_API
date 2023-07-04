import 'reflect-metadata';
import { Module } from '@nestjs/common';
import {UserModule} from "./entities/user/user.module";
import {MealModule} from "./entities/meal/meal.module";
import {AnswerModule} from "./entities/answer/answer.module";
import { databaseProviders } from './database.providers';


@Module({
  imports: [UserModule, MealModule, AnswerModule],
  providers: [...databaseProviders],
  exports: [...databaseProviders],
})
export class AppModule {}
