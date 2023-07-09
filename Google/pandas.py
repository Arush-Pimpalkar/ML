import numpy as np

one_D_array = np.array([6, 8, 4, 46, 1])
# print("one dimensional array = ", one_D_array)


sequence_of_integers = np.arange(5, 12)
# print(sequence_of_integers)

random_ints = np.random.randint(low=5, high=100, size=(5))
# print(random_ints)

random_floats_between_0_and_1 = np.random.random([15])
# print("0 and 1 ", random_floats_between_0_and_1)

random_floats_between_2_and_3 = random_floats_between_0_and_1 + 2.0
# print("2 and 3 ", random_floats_between_2_and_3)

noise = 4 * (random_floats_between_0_and_1 - 0.5)
print(noise)

feature = np.arange(6, 21)
# print("features = ", feature)


label = 3 * feature + 4
label = label + noise
print("label = ", label)
