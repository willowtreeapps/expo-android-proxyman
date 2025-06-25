# expo-android-proxyman

This is an Expo Plugin which enables the Android app to be inspected by [Proxyman](https://proxyman.com/).

## Usage

```bash
npx expo install expo-android-proxyman
```

Then add it to your `app.json` or `app.config.js`:

```json
{
  "expo": {
    "plugins": [
      "expo-android-proxyman"
    ]
  }
}
```

## Implementation Details

When the native Android project is generated (e.g. when you run `expo prebuild`) this plugin modifies the generated `android/app/src/main/AndroidManifest.xml` file, adding `android:networkSecurityConfig="@xml/network_security_config"` to the `<application>`.

Additionally, it copies the `network_security_config.xml` file to `res/xml/network_security_config.xml`.

## Troubleshooting

- see [https://docs.proxyman.com/debug-devices/react-native#id-3.-troubleshooting-android](https://docs.proxyman.com/debug-devices/react-native#id-3.-troubleshooting-android)