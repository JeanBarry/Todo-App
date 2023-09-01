ifneq ("$(wildcard .env)","")
	include .env
endif

copy-env:
	if [ ! -f .env ]; then cp .env.example .env; fi

dev: copy-env
	docker compose -f docker/compose.yaml --env-file=.env up -d

restart-dev: copy-env
	docker compose -f docker/compose.yaml --env-file=.env up --build -d

stop-dev:
	docker compose -f docker/compose.yaml --env-file=.env down

start: copy-env
	docker compose -f docker/compose.yaml --env-file=.env up -d

stop:
	docker compose -f docker/compose.yaml --env-file=.env stop

lint:
	docker exec -it todo-app npm run lint

lint-fix:
	docker exec -it todo-app npm run lint:fix

test:
	docker exec -it todo-app npm run test

storybook:
	docker exec -it todo-app npm run storybook

clean:
	sudo sh ./scripts/clean.sh
