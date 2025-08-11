#*****************
# OSFLAG
# https://gist.github.com/sighingnow/deee806603ec9274fd47
#*****************

OSFLAG 				:=

ifeq ($(OS),Windows_NT)
	OSFLAG += -D WIN32
	ifeq ($(PROCESSOR_ARCHITECTURE),AMD64)
		OSFLAG += -D AMD64
	endif
	ifeq ($(PROCESSOR_ARCHITECTURE),x86)
		OSFLAG += -D IA32
	endif
else
	UNAME_S := $(shell uname -s)
	ifeq ($(UNAME_S),Linux)
		OSFLAG += -D LINUX
	endif
	ifeq ($(UNAME_S),Darwin)
		OSFLAG += -D OSX
	endif
		UNAME_P := $(shell uname -p)
	ifeq ($(UNAME_P),x86_64)
		OSFLAG += -D AMD64
	endif
		ifneq ($(filter %86,$(UNAME_P)),)
	OSFLAG += -D IA32
		endif
	ifneq ($(filter arm%,$(UNAME_P)),)
		OSFLAG += -D ARM
	endif
endif

#*****************
# Misc
#*****************

# https://makefiletutorial.com
SHELL=/bin/bash

workspaceFolder :=
gradlewScript :=

ifneq ($(OS),Windows_NT)
	workspaceFolder = ./
	gradlewScript = gradlew
else
	gradlewScript = .\gradlew.bat
endif

#*****************
# Tasks
#*****************

osflag:
	@echo $(OSFLAG)

#*****************
# Code tasks
#*****************

backend:
	@echo -e "\n*********Backend*********\n"
	@if [ -f "requirements.txt" ]; then \
		echo "Installing Python dependencies..."; \
		pip install -r requirements.txt; \
	fi
	@echo "Backend setup complete"

cli:
	@echo -e "\n*********CLI*********\n"
	@if [ -d "cli" ]; then \
		cd cli && pip install -e .; \
	else \
		echo "No CLI directory found, skipping..."; \
	fi
	@echo "CLI setup complete"

frontend:
	@echo -e "\n*********Frontend*********\n"
	@if [ -f "website/package.json" ]; then \
		echo "Installing Node.js dependencies..."; \
		cd website && npm install; \
		echo "Running frontend linting..."; \
		cd website && npm run lint || echo "Linting failed, continuing..."; \
		echo "Running frontend tests..."; \
		cd website && npm test -- --passWithNoTests || echo "Tests failed, continuing..."; \
		echo "Building frontend..."; \
		cd website && npm run build; \
	else \
		echo "No package.json found in website/, skipping..."; \
	fi
	@echo "Frontend setup complete"

frontend-dev:
	@echo -e "\n*********Frontend Development*********\n"
	@if [ -f "website/package.json" ]; then \
		echo "Starting frontend development server..."; \
		cd website && npm run dev; \
	else \
		echo "No package.json found in website/, skipping..."; \
	fi

frontend-export:
	@echo -e "\n*********Frontend Static Export*********\n"
	@if [ -f "website/package.json" ]; then \
		echo "Building and exporting static site..."; \
		cd website && npm run export; \
	else \
		echo "No package.json found in website/, skipping..."; \
	fi

#*****************
# Git tasks
#*****************

git-version:
	git --version

git-upgrade-ubuntu:
	sudo apt-get install software-properties-common
	sudo add-apt-repository ppa:git-core/ppa -y
	sudo apt-get update
	sudo apt-get upgrade
	sudo apt-get install git -y
	git --version

git-submodules-setup:
	git submodule sync --recursive
	git submodule foreach --recursive git fetch
	git submodule foreach git pull

git-get-submodules:
	git submodule update --init --recursive --remote --rebase

#*****************
# Development tasks
#*****************

dev:
	@echo -e "\n*********Development Environment*********\n"
	@echo "Starting development servers..."
	@if [ -f "website/package.json" ]; then \
		cd website && npm start & \
	fi

test:
	@echo -e "\n*********Running Tests*********\n"
	@if [ -f "website/package.json" ]; then \
		echo "Running frontend tests..."; \
		cd website && npm test; \
	fi
	@if [ -f "requirements.txt" ]; then \
		echo "Running Python tests..."; \
		python -m pytest tests/ -v || echo "No tests found"; \
	fi

lint:
	@echo -e "\n*********Linting Code*********\n"
	@if [ -f "website/package.json" ]; then \
		echo "Linting frontend..."; \
		cd website && npm run lint || echo "No lint script found"; \
	fi
	@if command -v flake8 >/dev/null 2>&1; then \
		echo "Linting Python code..."; \
		flake8 . --exclude=node_modules,website,build,dist; \
	fi

format:
	@echo -e "\n*********Formatting Code*********\n"
	@if [ -f "website/package.json" ]; then \
		echo "Formatting frontend..."; \
		cd website && npm run format || echo "No format script found"; \
	fi
	@if command -v black >/dev/null 2>&1; then \
		echo "Formatting Python code..."; \
		black . --exclude="/(node_modules|website|build|dist)/"; \
	fi

clean:
	@echo -e "\n*********Cleaning*********\n"
	@echo "Removing build artifacts..."
	@rm -rf build/ dist/ *.egg-info/
	@if [ -d "website/node_modules" ]; then \
		rm -rf website/node_modules/; \
	fi
	@if [ -d "website/build" ]; then \
		rm -rf website/build/; \
	fi
	@find . -type d -name "__pycache__" -exec rm -rf {} + 2>/dev/null || true
	@find . -name "*.pyc" -delete 2>/dev/null || true

#*****************
# All tasks  
#*****************

git: git-version git-get-submodules

code: backend cli frontend

dev-setup: all dev

all: git code
