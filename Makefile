.PHONY: help install dev build start lint clean reinstall

# Default: show help
help:
	@echo ""
	@echo "STICH — Royal Heritage Website"
	@echo "Usage: make [target]"
	@echo ""
	@echo "Targets:"
	@echo "  install    Install dependencies (npm install)"
	@echo "  dev        Run dev server (http://localhost:3000)"
	@echo "  build      Production build (next build)"
	@echo "  start      Serve production build (next start)"
	@echo "  lint       Run ESLint"
	@echo "  clean      Remove .next, out, node_modules/.cache"
	@echo "  reinstall  Clean + fresh install + build"
	@echo ""

install:
	npm install

dev:
	npm run dev

build:
	npm run build

start:
	npm run start

lint:
	npm run lint

clean:
	-@rmdir /s /q .next 2>nul || rm -rf .next
	-@rmdir /s /q out 2>nul || rm -rf out
	-@rmdir /s /q node_modules\.cache 2>nul || rm -rf node_modules/.cache

reinstall: clean
	npm install
	npm run build
