set dotenv-load := true

start:
	yarn dev:server

worker:
	yarn dev:worker

debug:
	yarn debug:server

debug-worker:
	yarn debug:worker

typecheck:
	yarn check

test:
    yarn test

generate:
	yarn generate

alias gen := generate

migrate:
	yarn knex migrate:latest

migrate_up migration:
	yarn knex migrate:up {{migration}}

migration name:
	yarn knex migrate:make {{name}} -x ts

rollback:
	yarn knex migrate:rollback

replicate-prod:
	./bin/replicate-production-database

run-script path *arg:
		yarn ts-node --transpile-only {{path}} {{arg}}

debug-script path *arg:
		yarn ts-node-dev --inspect=9449 --files {{path}} {{arg}}

generate-schema target output:
	pg_dump --schema-only {{target}} > {{output}}

# -- Repo Setup
setup:
	brew bundle
