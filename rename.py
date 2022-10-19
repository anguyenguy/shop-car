import os

# # Absolute path of a file
# old_name = "test.txt"
# new_name = "text.txt"

path = "image/cars/car_2/"
dir_list = os.listdir(path)

index = 0

for i in dir_list:
        index +=1
        old_name = "image/text.txt"
        os.rename(path + i, path + str(index) + ".jpg")
