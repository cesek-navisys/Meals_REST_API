import {Body, Controller, Delete, Get, Param, Post} from "@nestjs/common";
import {MealService} from "./service/meal.service";
import {CreateMealDto} from "./model/dto/create-meal.dto";


@Controller('/api/v1/meals')
export class MealController {

    constructor(private readonly mealService: MealService) {
    }

    @Post()
    async create(@Body() dto: CreateMealDto) {
        return await this.mealService.createMeal(dto);
    }

    @Get()
    async getAllMeals() {
        return await this.mealService.findAllMeals();
    }

    @Delete(':meal_id')
    async remove(@Param('meal_id') meal_id: number) {
        await this.mealService.deleteMealById(meal_id);
    }
}
