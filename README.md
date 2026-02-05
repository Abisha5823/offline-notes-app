Notes App – Offline-First Draft Assistant

A robust offline-first notes application built with React Native (Expo)

Designed as a proof-of-concept draft message system

Focuses on data persistence, performance with long notes, and seamless auto-save

APK Download:
https://expo.dev/artifacts/eas/nUjvdGEw74FQxHjdxRx73o.apk

Key Features

Offline-First Architecture

Full data persistence using AsyncStorage

No internet required to create, edit, or delete notes

2-Second Auto-Save Heartbeat

Custom setInterval logic saves data every 2 seconds while typing

Prevents data loss even if the app is force-closed

Smart Timestamps

Automatically tracks note status

Displays Created for new notes

Updates to Modified when changes are saved

Search & Filtering

Real-time search by note title or content preview

Delete with Confirmation

Native alert dialog to avoid accidental deletions

Performance Optimized

Handles 5000+ word notes efficiently

Uses optimized FlatList and useRef to reduce unnecessary re-renders

Tech Stack

Framework: React Native (Expo)

Navigation: React Navigation (Stack)

Persistence: AsyncStorage

Build Tool: EAS (Expo Application Services)

Icons: Custom branded book icon

Technical Implementation Details

Auto-Save Logic

Uses a heartbeat mechanism instead of debounce

Compares current text with last saved version every 2000ms

Saves only when changes are detected

Offline Persistence

Notes are serialized to JSON

Stored in device internal storage

Automatically restored on app restart

Build Stability

Resolved filename casing and project root issues

Ensured successful CI/CD builds on Linux-based EAS servers

How to Run Locally

Clone the repository
git clone https://github.com/Abisha5823/offline-notes-app

Navigate to project
cd OfflineNotesApp

Install dependencies
npm install

Start development server
npx expo start

Run on device

Scan QR using Expo Go (Android) or Camera app (iOS)

Developed By

Abisha B
