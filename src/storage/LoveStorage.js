import AsyncStorage from '@react-native-community/async-storage';

const key = 'invenLove';

const LoveStorage = {
  async get() {
    try {
      const raw = await AsyncStorage.getItem(key);
      const parsed = JSON.parse(raw);
      return parsed;
    } catch (e) {
      throw new Error('Failed to load Lovecard');
    }
  },
  async set(data) {
    try {
      await AsyncStorage.setItem(key, JSON.stringify(data));
    } catch (e) {
      throw new Error('Failed to save Lovecard');
    }
  },
};

export default LoveStorage;