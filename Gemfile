source "https://rubygems.org"
git_source(:github) { |repo| "https://github.com/#{repo}.git" }

ruby "3.0.0"

# Bundle edge Rails instead: gem "rails", github: "rails/rails", branch: "main"
gem "rails", "~> 7.0.2", ">= 7.0.2.2"

# Use postgresql as the database for Active Record
gem "pg", "~> 1.1"

# Use the Puma web server [https://github.com/puma/puma]
gem "puma", "~> 5.0"

# Windows does not include zoneinfo files, so bundle the tzinfo-data gem
gem "tzinfo-data", platforms: %i[ mingw mswin x64_mingw jruby ]

group :development, :test do
  # See https://guides.rubyonrails.org/debugging_rails_applications.html#debugging-with-the-debug-gem
  gem "debug", platforms: %i[ mri mingw x64_mingw ]
end

group :development do
  # Speed up commands on slow machines / big apps [https://github.com/rails/spring]
  # gem "spring"
end

gem 'bcrypt', '~> 3.1', '>= 3.1.16'

gem 'rack-cors', :require => 'rack/cors'

gem 'faker', :git => 'https://github.com/faker-ruby/faker.git', :branch => 'master'

gem 'byebug', '~> 11.1', '>= 11.1.3'

gem 'active_model_serializers', '~> 0.10.2'

gem 'email_validator'

gem 'figaro'

# gem "sidekiq", "~> 6.4"

# gem 'mail', '~> 2.7', '>= 2.7.1'