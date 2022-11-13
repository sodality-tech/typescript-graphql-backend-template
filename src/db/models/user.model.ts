import {
	DataTypes,
	InferAttributes,
	InferCreationAttributes,
	Model,
	Sequelize,
} from 'sequelize'
import { ModelDefiner } from '../../@types/models'

export class User extends Model<
	InferAttributes<User>,
	InferCreationAttributes<User>
> {
	declare id: string
	declare firstName: string
	declare lastName: string
}

const define: ModelDefiner = (sequelize: Sequelize) => {
	sequelize.define<User>(
		'user',
		{
			id: {
				type: DataTypes.STRING,
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
			},
			firstName: {
				type: DataTypes.STRING,
			},
			lastName: {
				type: DataTypes.STRING,
			},
		},
		{
			underscored: true,
		}
	)
}

export default define
