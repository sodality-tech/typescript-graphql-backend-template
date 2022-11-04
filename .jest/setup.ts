import db from '../db'

export default async () => {
	await db.migrate.latest()
}
