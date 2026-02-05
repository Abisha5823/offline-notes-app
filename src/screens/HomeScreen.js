import { useMemo, useState } from "react";
import {
  Alert,
  FlatList,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

export default function HomeScreen({ navigation, notes, setNotes }) {
  const [search, setSearch] = useState("");

  const filteredNotes = useMemo(() => {
    return notes
      .filter(
        (n) =>
          n.title.toLowerCase().includes(search.toLowerCase()) ||
          n.content.toLowerCase().includes(search.toLowerCase()),
      )
      .sort((a, b) => b.modifiedAt - a.modifiedAt);
  }, [search, notes]);

  // DELETE WITH CONFIRMATION
  const handleDeletePress = (id) => {
    Alert.alert(
      "Delete Note",
      "Are you sure you want to delete this note? This action cannot be undone.",
      [
        { text: "Cancel", style: "cancel" },
        {
          text: "Delete",
          onPress: () => setNotes(notes.filter((n) => n.id !== id)),
          style: "destructive",
        },
      ],
    );
  };

  const renderNote = ({ item }) => {
    const isModified = item.modifiedAt > item.createdAt + 1000;
    const label = isModified ? "Modified: " : "Created: ";
    const displayTime = isModified ? item.modifiedAt : item.createdAt;

    return (
      <TouchableOpacity
        style={styles.noteCard}
        onPress={() => navigation.navigate("Editor", { noteId: item.id })}
      >
        <View style={{ flex: 1 }}>
          <Text style={styles.noteTitle} numberOfLines={1}>
            {item.title || "Untitled"}
          </Text>
          <Text style={styles.notePreview} numberOfLines={1}>
            {item.content || "No content..."}
          </Text>
          <Text style={styles.timestamp}>
            {label}
            {new Date(displayTime).toLocaleString()}
          </Text>
        </View>
        <TouchableOpacity
          style={styles.deleteButton}
          onPress={() => handleDeletePress(item.id)}
        >
          <Text style={styles.deleteText}>Delete</Text>
        </TouchableOpacity>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Search notes..."
        placeholderTextColor="#999"
        style={styles.searchBar}
        onChangeText={setSearch}
      />
      <FlatList
        data={filteredNotes}
        keyExtractor={(item) => item.id}
        renderItem={renderNote}
        ListEmptyComponent={
          <Text style={styles.emptyText}>No notes found</Text>
        }
      />
      <TouchableOpacity
        style={styles.fab}
        onPress={() => navigation.navigate("Editor", { noteId: null })}
      >
        <Text style={styles.fabText}>+</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#f8f9fa", padding: 10 },
  searchBar: {
    backgroundColor: "#fff",
    padding: 12,
    borderRadius: 10,
    marginBottom: 15,
    elevation: 3,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 5,
    color: "#000",
  },
  noteCard: {
    backgroundColor: "#fff",
    padding: 15,
    borderRadius: 12,
    marginBottom: 10,
    flexDirection: "row",
    alignItems: "center",
    elevation: 2,
    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowRadius: 2,
  },
  noteTitle: { fontSize: 18, fontWeight: "bold", color: "#444" },
  notePreview: { color: "#666", marginTop: 4, fontSize: 14 },
  timestamp: { fontSize: 11, color: "#999", marginTop: 10, fontWeight: "500" },
  deleteButton: { padding: 8, marginLeft: 10 },
  deleteText: { color: "#FF3B30", fontWeight: "bold", fontSize: 13 },
  fab: {
    position: "absolute",
    right: 20,
    bottom: 20,
    backgroundColor: "#007AFF",
    width: 60,
    height: 60,
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
    elevation: 5,
    shadowColor: "#000",
    shadowOpacity: 0.3,
    shadowRadius: 5,
  },
  fabText: { color: "#fff", fontSize: 35, marginTop: -3 },
  emptyText: {
    textAlign: "center",
    marginTop: 50,
    color: "#aaa",
    fontSize: 16,
  },
});
