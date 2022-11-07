import { Knex } from 'knex'

export const addUuid = (knex: Knex, table: Knex.TableBuilder): void => {
	table
		.uuid('id')
		.primary()
		.notNullable()
		.unique()
		.defaultTo(knex.raw('uuid_generate_v4()'))
}
