import debounce from "lodash/debounce";
import { useEffect, useMemo, useRef, useState } from "react";
import { ScrollView, StyleSheet, Text, TextInput, View } from "react-native";
import "react-native-get-random-values";
import { v4 as uuidv4 } from "uuid";

export default function EditorScreen({ route, notes, setNotes }) {
  const { noteId } = route.params;

  const existingNote = notes.find((n) => n.id === noteId);
  const [title, setTitle] = useState(existingNote?.title || "");
  const [content, setContent] = useState(existingNote?.content || "");
  const [saving, setSaving] = useState(false);

  // 1. Permanent ID for the current session
  const currentId = useRef(noteId || uuidv4()).current;

  // 2. Keep latest data in a ref
  const dataRef = useRef({ title, content });
  useEffect(() => {
    dataRef.current = { title, content };
  }, [title, content]);

  // 3. Create the debounced save function using useMemo

  const debouncedSave = useMemo(
    () =>
      debounce((id, allNotes) => {
        setSaving(true);
        const timestamp = Date.now();
        const currentData = dataRef.current;

        let updatedNotes;
        const noteIndex = allNotes.findIndex((n) => n.id === id);

        if (noteIndex > -1) {
          updatedNotes = [...allNotes];
          updatedNotes[noteIndex] = {
            ...updatedNotes[noteIndex],
            ...currentData,
            modifiedAt: timestamp,
          };
        } else {
          const newNote = {
            id,
            ...currentData,
            createdAt: timestamp,
            modifiedAt: timestamp,
          };
          updatedNotes = [newNote, ...allNotes];
        }

        setNotes(updatedNotes);
        setTimeout(() => setSaving(false), 800);
      }, 2000),
    [setNotes],
  );

  // 4. Clean up the debounce timer if the user leaves the screen
  useEffect(() => {
    return () => {
      debouncedSave.cancel();
    };
  }, [debouncedSave]);

  // 5. Trigger the save whenever title or content changes
  useEffect(() => {
    debouncedSave(currentId, notes);
  }, [title, content, currentId, notes, debouncedSave]);

  return (
    <View style={styles.container}>
      <Text style={styles.status}>{saving ? "Saving..." : "Saved"}</Text>
      <TextInput
        style={styles.titleInput}
        placeholder="Title"
        placeholderTextColor="#999"
        value={title}
        onChangeText={setTitle}
      />
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <TextInput
          style={styles.contentInput}
          placeholder="Start typing..."
          placeholderTextColor="#999"
          multiline
          textAlignVertical="top"
          value={content}
          onChangeText={setContent}
        />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 15, backgroundColor: "#fff" },
  status: { fontSize: 12, color: "#aaa", textAlign: "right", marginBottom: 5 },
  titleInput: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 15,
    color: "#000",
  },
  contentInput: { fontSize: 16, flex: 1, minHeight: 400, color: "#000" },
});
