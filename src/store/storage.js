import AsyncStorage from "@react-native-async-storage/async-storage";

const STORAGE_KEY = "@notes_data";

export const saveNotes = async (notes) => {
  try {
    await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(notes));
  } catch (e) {
    console.error("Failed to save notes", e);
  }
};

export const loadNotes = async () => {
  try {
    const jsonValue = await AsyncStorage.getItem(STORAGE_KEY);
    return jsonValue != null ? JSON.parse(jsonValue) : [];
  } catch (e) {
    console.error("Failed to load notes", e);
    return [];
  }
};
