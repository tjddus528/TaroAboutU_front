import AsyncStorage from '@react-native-community/async-storage';

const key = 'invenYN';

const YNStorage = {
  async get() {
    try {
      const raw = await AsyncStorage.getItem(key);
      const parsed = JSON.parse(raw);
      return parsed;
    } catch (e) {
      throw new Error('Failed to load YNcard');
    }
  },
  async set(data) {
    try {
      await AsyncStorage.setItem(key, JSON.stringify(data));
    } catch (e) {
      throw new Error('Failed to save YNcard');
    }
  },
};

export default YNStorage;