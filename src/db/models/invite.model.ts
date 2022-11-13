import {
	DataTypes,
	InferAttributes,
	InferCreationAttributes,
	Model,
	NonAttribute,
	Sequelize,
} from 'sequelize'
import { ModelDefiner } from '../../@types/models'
import { User } from './user.model'

export class Invite extends Model<
	InferAttributes<Invite>,
	InferCreationAttributes<Invite>
> {
	declare id: string
	declare name: string
	declare fromUserId: string

	declare fromUser?: NonAttribute<User>
}

const define: ModelDefiner = (sequelize: Sequelize) => {
	sequelize.define<Invite>(
		'invite',
		{
			id: {
				type: DataTypes.STRING,
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
			},
			name: {
				type: DataTypes.STRING,
			},
			fromUserId: {
				type: DataTypes.UUIDV4,
			},
		},
		{
			underscored: true,
		}
	)
}

export default define
