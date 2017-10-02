# Find the number with the most digits.
#
# If two numbers in the argument array have the same number of digits,
# return the first one in the array.

def find_longest(arr)
  arr.detect { |i| i.to_s.length == arr.max.to_s.length }
end
