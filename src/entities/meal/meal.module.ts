import {Module} from "@nestjs/common";
import {Meal} from "./model/meal.entity";
import {MealController} from "./meal.controller";
import {MealService} from "./service/meal.service";
import {mealProviders} from "./storage/meal.providers";


@Module({
    imports: [Meal],
    controllers: [MealController],
    providers: [
        MealService,
        ...mealProviders,
    ],
})
export class MealModule {}
