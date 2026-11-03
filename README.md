# IT313_Ontario_Francismie_CoreComponents

## Laboratory 6 – IT 313 Mobile Programming
**Activity:** Video Demonstration: React Native Core Components in Action  
**Problem:** Student Directory Viewer

## Problem description
The Student Directory Viewer is a small Expo (React Native) application that allows an adviser to browse five students who need academic advising. The adviser can search students by name and flag or unflag a student for advising.

## Component structure

### `StudentDirectory` (`App.js`)
The parent component:
- Stores the student array in React state.
- Stores the search text in `query` state.
- Uses a controlled `TextInput` with `value` and `onChangeText`.
- Filters student names without regard to uppercase or lowercase letters.
- Renders a `StudentCard` for each matching student inside a `ScrollView`.
- Updates the selected student's `flagged` state when its button is pressed.
- Uses `student.id` as the stable React key.

### `StudentCard` (`components/StudentCard.js`)
The reusable child component receives `id`, `name`, `year`, `photoUrl`, `flagged`, and `onToggleFlag` as props. It displays the student's photo, name, year level, and a `Pressable` control. The control's appearance changes when it is pressed and when the student's flagged state changes.

## React Native core components used
- **View:** Groups and arranges the screen elements and each student card.
- **Text:** Displays headings, student names, year levels, and button labels.
- **Image:** Displays each student's remote profile photo with a fixed width, height, and rounded corners.
- **ScrollView:** Makes the student cards scrollable.
- **TextInput:** Accepts the search text. Its `value` and `onChangeText` props keep it controlled by React state.
- **Pressable:** Makes the advising flag control respond to touch and show pressed/flagged styles.

## How to run the app

1. Install Node.js LTS if it is not already installed.
2. Open this project folder in Visual Studio Code.
3. Open the VS Code terminal (**Terminal → New Terminal**).
4. Install the project dependencies:

   ```bash
   npm install
   ```

5. Start Expo:

   ```bash
   npx expo start
   ```

6. Open Expo Go on your phone and scan the QR code, or run the project in an available emulator.

If the development server has cache issues, stop it with `Ctrl + C` and run:

```bash
npx expo start -c
```

An internet connection is needed for the remote profile photos.

## Required TextInput experiment for the demonstration video

The submitted app should keep the controlled `TextInput` working. For the experiment in the activity sheet:

1. Temporarily remove `value={query}` and `onChangeText={setQuery}` from the `TextInput`.
2. Type a student name. Explain that the input can display typed text, but React state is not updated, so the student list does not filter based on the new text.
3. Restore both props exactly as shown in `App.js`.
4. Type a name again and confirm that the list filters correctly.

Do not leave the experiment version in your final code or GitHub repository.

## GitHub repository
Create a **public** GitHub repository named:

`IT313_Ontario_Francismie_CoreComponents`

The repository should include the source files and this `README.md`. The code pushed to GitHub must match the code demonstrated in the video. Do not upload passwords, API keys, access tokens, or other private information.

## Video checklist
The final edited video must be no longer than 20 minutes and should show:
- Your name and section, and a short explanation of the problem.
- Your approach and the purpose of each required React Native component.
- Building and explaining `StudentCard` and `StudentDirectory` in the code editor.
- Running the app and testing the search and flag toggle.
- The temporary uncontrolled `TextInput` experiment, followed by restoring the controlled input.
- At least one problem/error and how you identified and fixed it.
- Your GitHub repository or terminal push, and the repository link read aloud.
- A short conclusion.

Keep your code, commands, and running app readable in the recording. Showing your face is optional unless your instructor says otherwise. Your work and explanation must be your own. Do not show passwords or access tokens.

---
**Note:** This project is prepared as a starter implementation of the activity requirements. Review and understand the code, then explain and demonstrate it in your own words in your recording.
