copy-env:
	if [ ! -f .env ]; then cp .env.example .env; fi

dev: copy-env
	npm run dev

lint:
	npm run lint

test:
	npm run test