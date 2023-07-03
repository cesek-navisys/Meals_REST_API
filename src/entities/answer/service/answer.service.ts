import {Inject} from "@nestjs/common";
import {Answer} from "../model/answer.entity";
import {Meal} from "../../meal/model/meal.entity";
import {CreateAnswerDto} from "../model/dto/create-answer.dto";
import {FindOptions} from "sequelize";
import {ANSWER} from "../../../constants";


export class AnswerService {

    constructor(
        @Inject(ANSWER)
        private answerRepository: typeof Answer,
    ) {}

    async createAnswer(dto: CreateAnswerDto): Promise<Answer> {
        const answer = await this.answerRepository.create({
            user_id: dto.user_id,
            meal_id: dto.meal_id,
            likes: dto.likes
        });

        return answer.save();
    }

    async findUserAnswers(user_id: number, includeMeals: boolean = false): Promise<Answer[]> {
        const options: FindOptions = {
            where: { user_id },
            include: includeMeals ? [Meal] : []
        };

        return await this.answerRepository.findAll(options);
    }

    async getAnswerSummary(userId: number): Promise<{ saltyMeals: number; sweetMeals: number }> {
        const totalAnswers = await this.answerRepository.count({
            where: { user_id: userId },
            group: ['meal_id'],
        });

        const saltyMeals = await this.answerRepository.count({
            where: { user_id: userId, likes: true },
            include: [{ association: 'meal', where: { is_salty: true } }],
            group: ['meal.meal_id'],
        });

        const sweetMeals = await this.answerRepository.count({
            where: { user_id: userId, likes: true },
            include: [{ association: 'meal', where: { is_salty: false } }],
            group: ['meal.meal_id'],
        });

        const saltyMealsPercentage = Math.round((saltyMeals.length / totalAnswers.length) * 100);
        const sweetMealsPercentage = Math.round((sweetMeals.length / totalAnswers.length) * 100);

        return { saltyMeals: saltyMealsPercentage, sweetMeals: sweetMealsPercentage };
    }
}
