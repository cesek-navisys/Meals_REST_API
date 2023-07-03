import {BelongsTo, Column, ForeignKey, HasMany, Model, PrimaryKey, Table} from "sequelize-typescript";
import {User} from "../../user/model/user.entity";
import {Meal} from "../../meal/model/meal.entity";
import {DataTypes} from "sequelize";


@Table({ timestamps: false })
export class Answer extends Model {

    @PrimaryKey
    @ForeignKey(() => User)
    @Column({ type: DataTypes.INTEGER })
    user_id: number;

    @PrimaryKey
    @ForeignKey(() => Meal)
    @Column({ type: DataTypes.INTEGER })
    meal_id: number;

    @Column({ type: DataTypes.BOOLEAN })
    likes: boolean;

    @BelongsTo(() => User)
    user: User;

    @BelongsTo(() => Meal)
    meal: Meal;
}
