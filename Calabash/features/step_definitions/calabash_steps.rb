require 'calabash-android/calabash_steps'

Given /^(my|the) app is running$/ do |_|
  # no-op exists for backwards compatibility
end

Then /^I (?:touch) "([^\"]*)"$/ do |newActivity1|
    touch("view marked: '#{newActivity1}'")
end
