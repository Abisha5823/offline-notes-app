# Notes App – Offline-First Draft Assistant

**APK Download**:https://expo.dev/artifacts/eas/nUjvdGEw74FQxHjdxRx73o.apk

## Project Overview

Developed an offline-first mobile notes application that allows users to create, edit, search, and manage notes without requiring an internet connection.

The application was designed as a draft assistant system with a strong focus on data persistence, auto-save reliability, and smooth performance when handling large notes.

## Problem Statement

Many note-taking applications rely heavily on internet connectivity or risk losing user data when applications are closed unexpectedly.

The goal of this project was to create a lightweight and reliable note management solution that:

* Works completely offline
* Automatically saves user progress
* Minimizes risk of data loss
* Maintains performance for large notes

## Solution

Built a React Native mobile application with local storage persistence and automatic save functionality.

The application continuously monitors changes and stores note data locally, ensuring users can access their notes even without network connectivity.

## Key Features

### Offline-First Architecture

* No internet connection required
* Create, edit, and delete notes locally
* Persistent storage across app restarts

### Auto-Save Mechanism

* Automatic save every 2 seconds while editing
* Prevents accidental data loss
* Detects changes before saving

### Smart Note Tracking

* Created timestamp for new notes
* Modified timestamp for updated notes
* Automatic status updates

### Search Functionality

* Real-time note filtering
* Search by title or content
* Instant result updates

### Safe Deletion

* Confirmation dialog before deletion
* Prevents accidental note removal

### Performance Optimization

* Efficient rendering for large notes
* Optimized list management
* Reduced unnecessary re-renders

## My Responsibilities

* Application architecture design
* UI development
* State management implementation
* Offline storage integration
* Auto-save workflow development
* Performance optimization
* Testing and debugging
* Build and deployment configuration

## Tech Stack

### Mobile Development

* React Native
* Expo

### Navigation

* React Navigation

### Data Storage

* AsyncStorage

### Build & Deployment

* Expo Application Services (EAS)

### Development Tools

* JavaScript
* Git
* GitHub

## System Architecture

User
↓
React Native Application
↓
State Management
↓
AsyncStorage
↓
Persistent Local Storage

## Technical Highlights

### Auto-Save Workflow

User Edits Note
↓
Change Detection
↓
2-Second Save Interval
↓
AsyncStorage Update

### Offline Persistence

* Notes serialized into JSON format
* Stored locally on device
* Automatically restored on application launch

## Challenges Faced

* Preventing data loss during editing
* Managing large note performance
* Reducing unnecessary component re-renders
* Ensuring stable mobile builds across environments

## Outcomes

* Successfully developed a fully offline mobile notes application
* Implemented reliable auto-save functionality
* Achieved smooth performance for long-form note editing
* Delivered a stable Android build using Expo EAS

## Skills Demonstrated

* React Native Development
* Mobile Application Development
* Local Data Persistence
* State Management
* Performance Optimization
* Offline-First Architecture
* Testing & Debugging
* Build & Deployment
