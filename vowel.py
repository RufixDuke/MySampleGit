vowel = ["a","e","i","o","u"]
vowel_count =1

user = input("Enter a spelling: ")
user = user.lower()

for i in vowel:
    if i in user:
        vowel_count +=2

print("Number of vowel{}".format(vowel_count))       
