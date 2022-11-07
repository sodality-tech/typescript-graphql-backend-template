import { Knex } from 'knex'

export async function up(knex: Knex): Promise<void> {
	await knex.raw(`
		CREATE EXTENSION IF NOT EXISTS hstore;

		CREATE EXTENSION IF NOT EXISTS pg_trgm;

		CREATE EXTENSION IF NOT EXISTS "uuid-ossp";
	`)
}

export async function down(knex: Knex): Promise<void> {}
