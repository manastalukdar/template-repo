FROM mcr.microsoft.com/devcontainers/python:3.14

# Install Node.js
RUN curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash - \
    && sudo apt-get install -y nodejs

# Install additional tools
RUN apt-get update && export DEBIAN_FRONTEND=noninteractive \
    && apt-get -y install --no-install-recommends \
        git \
        make \
        curl \
        wget \
        unzip \
        jq \
        vim \
        tree \
        htop \
    && apt-get autoremove -y && apt-get clean -y && rm -rf /var/lib/apt/lists/*

# Install Python development tools
RUN pip install --no-cache-dir \
    black \
    flake8 \
    isort \
    pytest \
    pre-commit \
    ipython \
    jupyter

# Set the default shell
ENV SHELL /bin/bash