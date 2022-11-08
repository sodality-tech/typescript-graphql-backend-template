import db from '../src/db/knex'

export default async () => {
	await db.destroy()
}
