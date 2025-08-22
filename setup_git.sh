#!/bin/bash

echo "🚀 Setting up URPG Git repository..."

# Initialize git if not already done
if [ ! -d ".git" ]; then
    echo "📁 Initializing Git repository..."
    git init
fi

# Create .gitignore if it doesn't exist
if [ ! -f ".gitignore" ]; then
    echo "📝 Creating .gitignore file..."
    cat > .gitignore << 'EOF'
# Dependencies
node_modules/
npm-debug.log*
yarn-debug.log*
yarn-error.log*

# Build outputs
dist/
build/

# Environment variables
.env
.env.local
.env.development.local
.env.test.local
.env.production.local

# IDE files
.vscode/
.idea/
*.swp
*.swo

# OS files
.DS_Store
Thumbs.db

# Logs
logs
*.log

# Runtime data
pids
*.pid
*.seed
*.pid.lock

# Coverage directory used by tools like istanbul
coverage/

# nyc test coverage
.nyc_output

# Dependency directories
jspm_packages/

# Optional npm cache directory
.npm

# Optional REPL history
.node_repl_history

# Output of 'npm pack'
*.tgz

# Yarn Integrity file
.yarn-integrity

# dotenv environment variables file
.env
EOF
fi

# Add all files
echo "📦 Adding files to Git..."
git add .

# Check if there's anything to commit
if git diff --cached --exit-code > /dev/null; then
    echo "✅ No changes to commit"
else
    echo "💾 Making initial commit..."
    git commit -m "Initial commit: URPG game with basic layout and navigation - Top bar, bottom navigation, 5 game screens, responsive design"
fi

# Check if remote is already set
if git remote get-url origin 2>/dev/null; then
    echo "🔗 Remote origin already exists"
else
    echo "🔗 Adding GitHub remote..."
    echo "Please enter your GitHub username:"
    read username
    git remote add origin "https://github.com/$username/URPG.git"
fi

# Set main branch and push
echo "📤 Setting up main branch and pushing to GitHub..."
git branch -M main
git push -u origin main

echo "🎉 Success! Your URPG game has been pushed to GitHub!"
echo ""
echo "🌟 Next steps:"
echo "1. Go to https://github.com/$username/URPG"
echo "2. Click Settings → Pages"
echo "3. Source: 'Deploy from a branch'"
echo "4. Branch: 'main' → '/ (root)'"
echo "5. Your game will be at: https://$username.github.io/URPG/"
echo ""
echo "📱 Test on iPhone: https://$username.github.io/URPG/"
