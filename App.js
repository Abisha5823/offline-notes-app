import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { useEffect, useState } from "react";
import EditorScreen from "./src/screens/EditorScreen";
import HomeScreen from "./src/screens/HomeScreen";
import { loadNotes, saveNotes } from "./src/store/storage";

const Stack = createStackNavigator();

export default function App() {
  const [notes, setNotes] = useState([]);

  // Load notes on startup
  useEffect(() => {
    const fetchNotes = async () => {
      const storedNotes = await loadNotes();
      setNotes(storedNotes);
    };
    fetchNotes();
  }, []);

  // Update global state and persist
  const handleUpdateNotes = (newNotes) => {
    setNotes(newNotes);
    saveNotes(newNotes);
  };

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="My notes">
          {(props) => (
            <HomeScreen {...props} notes={notes} setNotes={handleUpdateNotes} />
          )}
        </Stack.Screen>
        <Stack.Screen name="Editor">
          {(props) => (
            <EditorScreen
              {...props}
              notes={notes}
              setNotes={handleUpdateNotes}
            />
          )}
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
