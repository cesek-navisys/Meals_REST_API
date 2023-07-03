import {Body, Controller, Get, Param, Post, Query} from "@nestjs/common";
import {AnswerService} from "./service/answer.service";
import {CreateAnswerDto} from "./model/dto/create-answer.dto";


@Controller('/api/v1/answers')
export class AnswerController {

    constructor(private readonly answerService: AnswerService) {
    }

    @Post()
    async create(@Body() dto: CreateAnswerDto) {
        return await this.answerService.createAnswer(dto);
    }

    @Get(':user_id')
    async getUserAnswers(
        @Param('user_id') user_id: number,
        @Query('include_meals') includeMeals: boolean
    ) {
        return await this.answerService.findUserAnswers(user_id, includeMeals);
    }

    @Get(':user_id/summary')
    async getAnswerSummary(@Param('user_id') user_id: number) {
        return await this.answerService.getAnswerSummary(user_id);
    }

}
