import { ApiProperty } from "@nestjs/swagger";
import { Transform } from "class-transformer";

export class CreateAnswerDto {
    @ApiProperty()
    readonly user_id: number;

    @ApiProperty()
    readonly meal_id: number;

    @ApiProperty()
    @Transform(({ value }) => {
        if (value === 'true') return true;
        if (value === 'false') return false;
        return value;
      })
    readonly likes: boolean;
}
