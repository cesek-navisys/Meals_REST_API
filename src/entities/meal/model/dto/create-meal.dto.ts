import { ApiProperty } from "@nestjs/swagger";
import { Transform } from 'class-transformer';

export class CreateMealDto {
    @ApiProperty()
    readonly name: string;
    @ApiProperty()
    @Transform(({ value }) => {
        if (value === 'true') return true;
        if (value === 'false') return false;
        return value;
      })
    readonly is_salty: boolean;
}
