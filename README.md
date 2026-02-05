Notes App - Offline-First Draft Assistant
A robust, offline-first notes application built with React Native (Expo). This app serves as a proof-of-concept for a draft message system, focusing on data persistence, performance with long notes, and a seamless auto-save experience.
Click Here to Download the APK:
Link: https://expo.dev/artifacts/eas/nUjvdGEw74FQxHjdxRx73o.apk

Key Features:
Offline-First Architecture: Full data persistence using AsyncStorage. No internet connection is required to create, edit, or delete notes.
2-Second Auto-Save Heartbeat: A custom setInterval logic ensures that changes are saved every 2 seconds while the user is typing, preventing data loss even if the app is killed.
Smart Timestamps: Dynamically tracks and displays "Created" vs "Modified" status.
Created: Shown for new notes.
Modified: Automatically replaces the created label as soon as a change is saved.
Search & Filtering: Real-time search functionality to filter notes by title or content preview.
Delete with Confirmation: A native safety alert to prevent accidental deletion of important notes.
Performance Optimized: Handled edge cases for 5000+ word notes using optimized FlatList and useRef hooks to prevent unnecessary re-renders.

Tech Stack:
Framework: React Native (Expo)
Navigation: React Navigation (Stack)
Persistence: AsyncStorage
Build Tool: EAS (Expo Application Services)
Icons: Custom branded book icon

Technical Implementation Details:
1. The Auto-Save Logic
Unlike traditional "debounce" functions that wait for the user to stop typing, this app uses a Heartbeat Mechanism. It checks for differences between the current text and the last saved version every 2000ms. If changes are detected, it triggers a background save to local storage.
2. Offline Persistence
Data is serialized to JSON and stored in the device's internal storage. This ensures that when the app is restarted, all notes are immediately restored to the state.
3. Filename Casing & Build Stability
Resolved inconsistent filename casing and project root issues to ensure successful CI/CD builds on Linux-based EAS servers.

How to Run Locally:
Clone the repository:
git clone https://github.com/Abisha5823/offline-notes-app
cd OfflineNotesApp
Install dependencies:
npm install
Start the development server:
npx expo start
Run on a device:
Scan the QR code using the Expo Go app (Android) or the Camera app (iOS).

Developed by: Abisha B
