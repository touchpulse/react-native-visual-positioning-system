# React Native Visual Positioning System

A Turbo Native Module for Google's Visual Positioning System.

## Installation

```sh
npm install react-native-visual-positioning-system
# or
yarn add react-native-visual-positioning-system
```

Then, for iOS, you need to install the pods:

```sh
cd ios
RCT_NEW_ARCH_ENABLED=1 bundle exec pod install
```

For Android, you need to enable the New Architecture by setting
`newArchEnabled=true` in your `android/gradle.properties` file.

## Usage

```javascript
import VisualPositioningSystem from "react-native-visual-positioning-system";

// To call the add method
const result = await VisualPositioningSystem.add(3, 7);
```

## Example

An example project is available in the `example` directory. See the
[README.md](./example/README.md) file in that directory for instructions on how
to run the example, or use `npm run android:upgrade` or `npm run ios:upgrade` to
run the example with the latest changes to the package.

## Publishing to NPM

To publish the package to NPM, follow these steps:

1. Ensure you have committed all your changes and have the latest version of the
   code.

2. Create a git tag for the new version. For example:

   ```sh
   git tag v1.0.0
   git push --tags
   ```

   Double-check whether the version number in `package.json` is updated to the
      new version you are releasing. If not, update it accordingly. You can use
      semantic versioning (e.g., `1.0.0`, `1.0.1`, etc.) for the version number.

3. Publish the package to NPM:

   ```sh
   npm publish
   ```

4. Verify that the package is published by checking the NPM registry or by
   installing it in a test project.

Note: Replace `v1.0.0` with the actual version number you are releasing.
