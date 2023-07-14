copy-env:
	if [ ! -f .env ]; then cp .env.example .env; fi

dev: copy-env
	npm run dev

lint:
	npm run lint

lint-fix:
	npm run lint:fix

test:
	npm run test

install:
	npm install

build:
	npm run build

start:
	npm run start

clean:
	rm -rf node_modules

storybook:
	npm run storybook
