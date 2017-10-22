# You will be given two inputs: a string of words and a letter.
# For each string, return the alphabetic character after every instance of letter(case insensitive).

# If there is a number, punctuation or underscore following the letter, it should not be returned.

# Return an empty string if there are no instances of letter in the given string.

def comes_after(str,letter)
  result = []
  unwanted_chars = "1234567890.,!;:?_ "
  str.length.times do |index|
    if str[index] == letter.downcase || str[index] == letter.upcase
      result << str[index + 1]
    end
  end
  result.join.delete(unwanted_chars)
end
