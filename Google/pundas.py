import numpy as np
import pandas as pd


my_data = np.array([[0, 3], [10, 7], [20, 9], [30, 14], [40, 15]])
my_column_names = ['temperature', 'activity']


my_dataframe = pd.DataFrame(data=my_data, columns=my_column_names)
my_dataframe["adjusted"] = my_dataframe["activity"] + 2

print(my_dataframe)
