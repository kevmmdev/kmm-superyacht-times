# 🛥️ Yacht Position Tracker App (React Native + Expo)

This is an app **React Native**, **Expo**, and **TypeScript**. It allows users to:

- View yacht details
- View a map of the yacht's location
- Add new historical positions via a form modal with a map, date/time picker, and note field

---

## ✨ Features

- 📍 Map screen using `react-native-maps`
- ➕ "Add Position" modal:
  - Defaults to user's current location
  - Long press to move pin
  - Date/time picker
  - Note input (max 140 chars)
  - Sends data to the Position API
- 🔄 After creation, closes modal and returns to yacht detail modal

---

## 🧱 Tech Stack

- [React Native](https://reactnative.dev/)
- [Expo](https://expo.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [react-native-maps](https://github.com/react-native-maps/react-native-maps)
- [expo-location](https://docs.expo.dev/versions/latest/sdk/location/)
- [@react-native-community/datetimepicker](https://github.com/react-native-datetimepicker/datetimepicker)
- [expo-router](https://expo.github.io/router/)

---

## 🚀 Getting Started

### 1. Install dependencies

```bash
npm install

## Get started

1. Install dependencies

   ```bash
   npm install
   ```

2. Start the app

   ```bash
    npx expo start
   ```

In the output, you'll find options to open the app in a

- [development build](https://docs.expo.dev/develop/development-builds/introduction/)
- [Android emulator](https://docs.expo.dev/workflow/android-studio-emulator/)
- [iOS simulator](https://docs.expo.dev/workflow/ios-simulator/)
- [Expo Go](https://expo.dev/go), a limited sandbox for trying out app development with Expo

You can start developing by editing the files inside the **app** directory. This project uses [file-based routing](https://docs.expo.dev/router/introduction).

## Get a fresh project

When you're ready, run:

```bash
npm run reset-project
```

This command will move the starter code to the **app-example** directory and create a blank **app** directory where you can start developing.

## Learn more

To learn more about developing your project with Expo, look at the following resources:

- [Expo documentation](https://docs.expo.dev/): Learn fundamentals, or go into advanced topics with our [guides](https://docs.expo.dev/guides).
- [Learn Expo tutorial](https://docs.expo.dev/tutorial/introduction/): Follow a step-by-step tutorial where you'll create a project that runs on Android, iOS, and the web.

## Join the community

Join our community of developers creating universal apps.

- [Expo on GitHub](https://github.com/expo/expo): View our open source platform and contribute.
- [Discord community](https://chat.expo.dev): Chat with Expo users and ask questions.
