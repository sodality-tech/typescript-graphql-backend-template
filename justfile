set dotenv-load := true

# For running any yarn command (for things in package.json)
yarn command:
		yarn {{command}}

# Run dev node-ts server
start:
	yarn dev

worker:
	yarn worker

# Run a debuggable node-ts server (see README)
debug:
	yarn debug

debug-worker:
	yarn worker-debug

typecheck:
	yarn tsc --noEmit

test:
    yarn test

# ---- Code generation

# Generate models only for BE
generate:
	yarn generate

alias gen := generate

# ---- Migrations

# Migrate to latest
migrate:
	yarn knex migrate:latest

# Run a specific up migrate
migrate_up migration:
	yarn knex migrate:up {{migration}}

# Create a new migraiton file with provided name (see migrations folder)
migration name:
	yarn knex migrate:make {{name}} -x ts

# Rollback one
rollback:
	yarn knex migrate:rollback

# replicate production data and push to staging (this will overwrite staging DB)
# sometimes ignorable errors occur in psql (within heroku). The replication works,
# but the exitcode of bash is non-zero, so Just thinks it failed. Do not fret young one.
replicate-prod:
	./bin/replicate-production-database

# ---- Scripts
run-script path *arg:
		yarn ts-node --transpile-only {{path}} {{arg}}

debug-script path *arg:
		yarn ts-node-dev --inspect=9449 --files {{path}} {{arg}}

# Generates a SQL schema (create table, etc) from a given database and writes it to a file
generate-schema target output:
	pg_dump --schema-only {{target}} > {{output}}
