import {Module} from "@nestjs/common";
import {Answer} from "./model/answer.entity";
import {AnswerController} from "./answer.controller";
import {AnswerService} from "./service/answer.service";
import {answerProviders} from "./storage/answer.providers";


@Module({
    imports: [Answer],
    controllers: [AnswerController],
    providers: [
        AnswerService,
        ...answerProviders,
    ],
})
export class AnswerModule {}
