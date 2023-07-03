import {Column, Model, PrimaryKey, Table} from "sequelize-typescript";
import {DataTypes} from "sequelize";


@Table({ timestamps: false })
export class User extends Model {

    @PrimaryKey
    @Column({ autoIncrement: true, type: DataTypes.INTEGER})
    user_id: number

    @Column({ type: DataTypes.STRING})
    name: string;
}
