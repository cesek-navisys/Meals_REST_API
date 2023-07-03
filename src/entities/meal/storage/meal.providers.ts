import {Meal} from "../model/meal.entity";
import { MEAL } from "../../../constants";


export const mealProviders = [
    {
        provide: MEAL,
        useValue: Meal,
    },
];
