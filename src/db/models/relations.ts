import { Sequelize } from 'sequelize'

export const applyRelationships = (sequelize: Sequelize): void => {
	const { user, invite } = sequelize.models

	invite.belongsTo(user, { as: 'fromUser', foreignKey: 'fromUserId' })
}
