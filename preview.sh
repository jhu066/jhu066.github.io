#!/bin/bash

cd "$(dirname "$0")"

# Install Ruby 3.3 if not present (compatible with Jekyll 3.x)
if [ ! -f "/opt/homebrew/opt/ruby@3.3/bin/ruby" ]; then
  echo "Installing Ruby 3.3 via Homebrew..."
  brew install ruby@3.3
fi

export PATH="/opt/homebrew/opt/ruby@3.3/bin:/opt/homebrew/lib/ruby/gems/3.3.0/bin:$PATH"
export GEM_HOME="$HOME/.gem/ruby/3.3.0"
export PATH="$GEM_HOME/bin:$PATH"

# Install bundler and dependencies if needed
if [ ! -f "Gemfile.lock" ]; then
  echo "Installing bundler and dependencies..."
  gem install bundler
  bundle install
fi

echo "Starting Jekyll server at http://localhost:4000"
bundle exec jekyll serve --livereload
