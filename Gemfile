source "https://rubygems.org"

# Use GitHub Pages gem to ensure compatibility with GitHub Pages
gem "github-pages", group: :jekyll_plugins

# If you want to specify the Jekyll version (optional), you can pin the version below.
# However, GitHub Pages will automatically use the Jekyll version that it supports.
# gem "jekyll", "~> 4.3.3" # Comment this out if using 'github-pages'

# This is the default theme for new Jekyll sites. You may change this to anything you like.
gem "minima", "~> 2.5"

# Additional plugins for Jekyll
group :jekyll_plugins do
  gem "jekyll-feed", "~> 0.12"
  # Add any additional plugins you need here
end

# Windows and JRuby does not include zoneinfo files, so bundle the tzinfo-data gem
# and associated library.
platforms :mingw, :x64_mingw, :mswin, :jruby do
  gem "tzinfo", ">= 1", "< 3"
  gem "tzinfo-data"
end

# Performance-booster for watching directories on Windows
gem "wdm", "~> 0.1.1", :platforms => [:mingw, :x64_mingw, :mswin]

# Lock `http_parser.rb` gem to `v0.6.x` on JRuby builds since newer versions of the gem
# do not have a Java counterpart.
gem "http_parser.rb", "~> 0.6.0", :platforms => [:jruby]
