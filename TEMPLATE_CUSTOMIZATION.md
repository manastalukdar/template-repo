# Template Customization Guide

This document provides a comprehensive guide for customizing this template repository for your specific project needs.

## Quick Start Customization

### 1. Repository Information

Replace the following placeholders throughout the repository:

- `template-repo` → Your repository name
- `manastalukdar` → Your GitHub username/organization
- `template-repo-website` → Your website project name
- `Your Name` → Your actual name
- `template_repo` → Your project's Python package name

### 2. Key Files to Update

#### README.md

- Update project title and description
- Replace badge URLs with your repository
- Update installation and usage instructions
- Add your project-specific links

#### package.json (website/)

```json
{
  "name": "your-project-name",
  "description": "Your project description",
  "author": "Your Name <your.email@example.com>",
  "repository": {
    "type": "git",
    "url": "https://github.com/yourusername/your-repo.git"
  }
}
```

#### Dependabot Configuration (.github/dependabot.yml)

Update reviewer and assignee information:

```yaml
reviewers:
  - "yourusername"
assignees:
  - "yourusername"
```

### 3. Documentation Structure

Update the following documentation files:

- `documentation/project/metadata.md` - Project metadata and badges
- `documentation/product/installation.md` - Installation instructions
- `documentation/product/usage.md` - Usage documentation
- `documentation/development/requirements.md` - Development requirements
- `documentation/development/design-architecture.md` - Architecture decisions

## Detailed Customization

### GitHub Configuration

#### Issue Templates

Located in `.github/ISSUE_TEMPLATE/`:

- Customize issue templates for your project needs
- Add project-specific labels and categories

#### Pull Request Template

Update `.github/pull_request_template.md` with:

- Your project's PR requirements
- Specific testing instructions
- Code review guidelines

#### Workflows

Update GitHub Actions in `.github/workflows/`:

- `main.yml` - Adjust build matrix and deployment settings
- `linter.yml` - Configure linting rules
- `codeql-analysis.yml` - Security analysis configuration

### Development Environment

#### Makefile

Customize build targets:

```make
# Add your project-specific targets
your-custom-target:
    @echo "Running custom build..."
    # Your commands here
```

#### Docker Configuration

Update `Dockerfile` and `docker-compose.yml`:

- Change base images as needed
- Update port mappings
- Configure environment variables
- Add project-specific services

#### Dev Container

Modify `.devcontainer/devcontainer.json`:

- Update development tools
- Configure port forwarding
- Add project-specific extensions

### Code Quality Configuration

#### Pre-commit Hooks

Customize `.pre-commit-config.yaml`:

- Add/remove hooks based on your stack
- Configure hook parameters
- Set up project-specific linting rules

#### VS Code Settings

Update `.vscode/settings.json`:

- Configure language-specific settings
- Set up debugging configurations
- Add project-specific paths

### Language-Specific Customization

#### Python Projects

1. Update `requirements.txt` with your dependencies
2. Create `setup.py` or `pyproject.toml` for package distribution
3. Add project structure in `app/` directory
4. Configure testing in `tests/` directory

#### Node.js Projects

1. Complete `website/package.json` configuration
2. Add webpack/build configuration
3. Set up testing framework (Jest recommended)
4. Configure linting and formatting rules

#### Java Projects

1. Add `pom.xml` or `build.gradle`
2. Configure Java version in GitHub Actions
3. Set up project structure in `src/`
4. Configure testing framework

### Documentation Customization

#### API Documentation

For API projects, add:

- OpenAPI/Swagger specifications
- API endpoint documentation
- Authentication guides
- Rate limiting information

#### User Documentation

- Installation guides for different platforms
- Tutorials and examples
- FAQ section
- Troubleshooting guides

#### Developer Documentation

- Contributing guidelines
- Code style guides
- Architecture decision records (ADRs)
- Development environment setup

## Automation Scripts

### Customization Script

Create a simple script to automate the customization process:

```bash
#!/bin/bash
# customize.sh

echo "Customizing template repository..."

# Replace placeholders
find . -type f -name "*.md" -o -name "*.json" -o -name "*.yml" -o -name "*.yaml" | \
    xargs sed -i.bak "s/template-repo/$1/g"

find . -type f -name "*.md" -o -name "*.json" -o -name "*.yml" -o -name "*.yaml" | \
    xargs sed -i.bak "s/manastalukdar/$2/g"

# Clean up backup files
find . -name "*.bak" -delete

echo "Customization complete!"
```

Usage: `./customize.sh your-repo-name your-username`

## Project-Specific Additions

### Database Integration

If your project uses databases:

1. Add database configuration to docker-compose.yml
2. Create database migration scripts
3. Add database connection configuration
4. Update environment variables

### Authentication & Authorization

For projects requiring auth:

1. Add authentication middleware
2. Configure OAuth providers
3. Set up user management
4. Add security headers

### Monitoring & Logging

For production-ready projects:

1. Add logging configuration
2. Set up health check endpoints
3. Configure metrics collection
4. Add error tracking

### Deployment Configuration

1. Add deployment scripts
2. Configure CI/CD pipelines
3. Set up staging/production environments
4. Add infrastructure as code (Terraform, CloudFormation)

## Maintenance

### Regular Updates

1. Update dependencies regularly using Dependabot
2. Review and update GitHub Actions
3. Keep documentation current
4. Update security configurations

### Version Management

1. Use semantic versioning
2. Maintain CHANGELOG.md
3. Tag releases appropriately
4. Update version numbers consistently

## Checklist

After customization, verify:

- [ ] All placeholder text replaced
- [ ] Repository URLs updated
- [ ] GitHub Actions working
- [ ] Dependencies installing correctly
- [ ] Linting and formatting configured
- [ ] Documentation complete and accurate
- [ ] Docker configuration working
- [ ] Pre-commit hooks functioning
- [ ] VS Code settings appropriate
- [ ] Tests running successfully

## Getting Help

If you encounter issues during customization:

1. Check the [Issues](https://github.com/manastalukdar/template-repo/issues) for common problems
2. Review the documentation in the `documentation/` directory
3. Create a new issue with your specific question
4. Consider contributing improvements back to the template
