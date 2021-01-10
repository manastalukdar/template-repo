workspaceFolder :=

# https://gist.github.com/sighingnow/deee806603ec9274fd47
ifneq ($(OS),Windows_NT)
	workspaceFolder = ./
endif

backend:
	@echo WIP

cli:
	@echo WIP

frontend:
	@echo WIP

#*****************
# Project tasks
#*****************

get-git-submodules:
	git submodule update --init --recursive --remote --merge

#*****************
# All tasks
#*****************

git: get-git-submodules

code: backend cli frontend

all: git code
