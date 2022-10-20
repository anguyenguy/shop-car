#### RENAME IMAGES IN A FOLDER 1 --> n that make easier to manage URL

import os

path = "image/cars/car_6/"
dir_list = os.listdir(path)

index = 0

for i in dir_list:
        index +=1
        old_name = "image/text.txt"
        os.rename(path + i, path + str(index) + ".jpg")

#### USAGE
# 1. Edit path
# 2. Run command: $python rename.py