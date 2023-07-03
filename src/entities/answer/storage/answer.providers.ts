import {Answer} from "../model/answer.entity";
import {ANSWER} from "../../../constants";


export const answerProviders = [
    {
        provide: ANSWER,
        useValue: Answer,
    },
];
