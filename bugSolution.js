// bugSolution.js
import AsyncStorage from '@react-native-async-storage/async-storage';

export const getData = async (key) => {
  try {
    const value = await AsyncStorage.getItem(key);
    if (value !== null) {
      return JSON.parse(value); // Assuming JSON storage
    } else {
      return null; // Handle case where key doesn't exist
    }
  } catch (error) {
    console.error('Error retrieving data:', error);
    return null; // Or throw the error depending on error handling strategy
  }
};

//Example Usage
 getData('myKey').then(data => console.log(data));