# Development

This document covers the development setup, workflow, and guidelines for this project.

## Prerequisites

- Python 3.10+
- Node.js 16+
- Java 17+
- Git
- Make

## Quick Start

1. Clone the repository:
   ```bash
   git clone https://github.com/manastalukdar/template-repo.git
   cd template-repo
   ```

2. Install all dependencies:
   ```bash
   make all
   ```

3. Run the development environment:
   ```bash
   make dev
   ```

## Project Structure

```
.
├── app/                 # Main application code
├── documentation/       # Project documentation
├── website/            # Website/frontend code
├── .github/            # GitHub workflows and templates
├── Makefile           # Build automation
├── requirements.txt   # Python dependencies
└── README.md         # Project overview
```

## Development Workflow

### Local Development

1. **Backend Development**:
   ```bash
   make backend
   ```

2. **Frontend Development**:
   ```bash
   make frontend
   ```

3. **CLI Development**:
   ```bash
   make cli
   ```

### Testing

Run all tests:
```bash
make test
```

Run specific test suites:
```bash
# Backend tests
make test-backend

# Frontend tests  
make test-frontend

# Integration tests
make test-integration
```

### Code Quality

Format code:
```bash
make format
```

Run linters:
```bash
make lint
```

Type checking:
```bash
make typecheck
```

### Git Workflow

1. Create feature branch from main:
   ```bash
   git checkout -b feature/your-feature
   ```

2. Make changes and commit:
   ```bash
   git add .
   git commit -m "feat: add new feature"
   ```

3. Push and create PR:
   ```bash
   git push origin feature/your-feature
   ```

## Environment Setup

### Development Environment Variables

Create a `.env.local` file with:

```bash
# Development settings
DEBUG=true
LOG_LEVEL=debug

# API endpoints
API_BASE_URL=http://localhost:3000

# Database (if applicable)
DATABASE_URL=sqlite:///dev.db
```

### IDE Configuration

See [IDE setup guide](./ide-setup.md) for VS Code and other editor configurations.

## Debugging

### Backend Debugging

1. Enable debug mode in your environment
2. Use your IDE's debugger or add breakpoints
3. Check logs in `logs/` directory

### Frontend Debugging

1. Open browser developer tools
2. Use React DevTools (if applicable)
3. Check network tab for API calls

## Performance Profiling

### Backend Performance

```bash
# Profile Python code
python -m cProfile -o profile.stats app/main.py

# Analyze with snakeviz
pip install snakeviz
snakeviz profile.stats
```

### Frontend Performance

Use browser dev tools Performance tab or:

```bash
# Lighthouse audit
npm install -g lighthouse
lighthouse http://localhost:3000
```

## Troubleshooting

### Common Issues

1. **Dependencies not installing**:
   - Clear cache: `npm cache clean --force`
   - Delete node_modules and reinstall

2. **Tests failing**:
   - Check environment variables
   - Ensure database is properly set up
   - Run tests in isolation

3. **Build errors**:
   - Check Node.js/Python versions
   - Verify all dependencies are installed
   - Check for syntax errors

### Getting Help

1. Check existing [issues](https://github.com/manastalukdar/template-repo/issues)
2. Search the documentation
3. Create a new issue with:
   - Clear description of the problem
   - Steps to reproduce
   - Environment details
   - Error messages/logs
