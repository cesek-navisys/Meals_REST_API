import {Inject, Injectable} from "@nestjs/common";
import {Meal} from "../model/meal.entity";
import {CreateMealDto} from "../model/dto/create-meal.dto";
import { MEAL } from "../../../constants";


@Injectable()
export class MealService {

    constructor(@Inject(MEAL) private mealRepository: typeof Meal) {
    }

    async createMeal(dto: CreateMealDto): Promise<Meal> {
        const meal = await this.mealRepository.create({
            name: dto.name,
            is_salty: dto.is_salty,
        });
        return meal.save();
    }

    async findAllMeals(): Promise<Meal[]> {
        return await this.mealRepository.findAll();
    }

    async deleteMealById(meal_id: number): Promise<void> {
        await this.mealRepository.destroy({ where: { meal_id } });
    }
}
