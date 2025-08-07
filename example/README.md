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

If you modified the parent package's code, you need to

- build the library (`npm prepare`)
- merge it, and
- rebuild the native modules before running the app.

For your convenience this has been merged into a simple command per OS:

```bash
yarn android:upgrade
```

or

```bash
yarn ios:upgrade
```
