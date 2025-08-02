# Example for `react-native-visual-positioning-system`

This is an [Expo](https://expo.dev) project demonstrating the usage of the
[`react-native-visual-positioning-system`](../) library.

It is configured to use the local library source code from the parent directory,
allowing for easy development and testing.

## Get started

1. **Install root dependencies:**

   Navigate to the library's root directory and install its dependencies.

   ```bash
   cd ../
   npm install
   ```

2. **Install example dependencies:** Navigate back to this example directory and
   install its dependencies.

   ```bash
   cd example
   yarn
   ```

3. **Start the app:** Run the app on your desired platform.

   ```bash
   # For Android
   yarn android

   # For iOS
   yarn ios # MacOS only
   ```

## Development

If you modified the parent package's code, you need to build the library, merge
it, and rebuild the native modules before running the app. Follow these steps:

```bash
# Build the library
cd ../
npm run prepare

# Merge the changes
cd example
yarn upgrade react-native-visual-positioning-system

# Rebuild the native modules and run the app
yarn android
yarn ios
```
