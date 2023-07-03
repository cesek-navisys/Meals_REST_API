import {Column, Model, PrimaryKey, Table} from "sequelize-typescript";
import {DataTypes} from "sequelize";


@Table({ timestamps: false })
export class Meal extends Model {

    @PrimaryKey
    @Column({ autoIncrement: true, type: DataTypes.INTEGER})
    meal_id: number

    @Column({ type: DataTypes.STRING})
    name: string;

    @Column({ type: DataTypes.BOOLEAN})
    is_salty: boolean;
}
