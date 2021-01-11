workspaceFolder :=

# https://gist.github.com/sighingnow/deee806603ec9274fd47
ifneq ($(OS),Windows_NT)
	workspaceFolder = ./
endif

#*****************
# Code tasks
#*****************

backend:
	@echo WIP

cli:
	@echo WIP

frontend:
	@echo WIP

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
# All tasks
#*****************

git: git-version git-get-submodules

code: backend cli frontend

all: git code
