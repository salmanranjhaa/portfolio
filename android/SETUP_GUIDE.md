# 🚀 Quick Setup Guide

Follow these steps to get your React Native portfolio app running:

## Step 1: Install Node.js

1. Download Node.js from: https://nodejs.org/
2. Choose the **LTS version** (recommended)
3. Run the installer and follow the prompts
4. Verify installation:
   ```bash
   node --version
   npm --version
   ```

## Step 2: Install Dependencies

Open your terminal in the `android` folder and run:

```bash
npm install
```

This will install all required packages (may take 2-5 minutes).

## Step 3: Start the Development Server

```bash
npm start
```

You'll see a QR code in your terminal.

## Step 4: Test on Your Phone

### Option A: Use Expo Go (Easiest)

1. **Install Expo Go**:
   - Android: https://play.google.com/store/apps/details?id=host.exp.exponent
   - iOS: https://apps.apple.com/app/expo-go/id982107779

2. **Scan the QR code**:
   - Android: Use the Expo Go app
   - iOS: Use your Camera app

### Option B: Use Emulator

**Android Emulator**:
```bash
npm run android
```

**iOS Simulator** (Mac only):
```bash
npm run ios
```

## Step 5: Make It Your Own

1. **Add your photo**:
   - Replace the placeholder in `src/components/About.js`
   - Add image to `assets/` folder

2. **Update content**:
   - Edit text in component files
   - Modify colors in `src/styles/theme.js`

3. **Customize**:
   - Change app name in `app.json`
   - Update package name for Play Store

## 🎨 Customization Tips

### Change Colors

Edit `src/styles/theme.js`:

```javascript
export const colors = {
  primary: '#YOUR_COLOR',
  secondary: '#YOUR_COLOR',
  // ...
};
```

### Update Personal Info

- **About**: `src/components/About.js`
- **Experience**: `src/components/Experience.js`
- **Projects**: `src/components/Projects.js`
- **Contact**: `src/components/Contact.js`

### Add Your Photo

1. Place your photo in `assets/profile.png`
2. In `src/components/About.js`, replace:
   ```javascript
   <View style={styles.imagePlaceholder}>
     <Text style={styles.imagePlaceholderText}>SR</Text>
   </View>
   ```
   with:
   ```javascript
   <Image 
     source={require('../../assets/profile.png')}
     style={styles.profileImage}
   />
   ```

## 📱 Building for Production

### Generate APK (Android)

```bash
# Install EAS CLI
npm install -g eas-cli

# Login to Expo
eas login

# Configure build
eas build:configure

# Build APK
eas build --platform android --profile preview
```

### Submit to Play Store

```bash
eas build --platform android --profile production
```

## 🐛 Common Issues

### "Cannot connect to Metro"
- Make sure your phone and computer are on the same WiFi
- Try: `npm start -- --tunnel`

### "Module not found"
```bash
rm -rf node_modules
npm install
```

### "Expo Go won't load"
- Clear Expo Go cache in app settings
- Restart the Metro bundler: `npm start -- --clear`

## 📚 Additional Resources

- **Expo Documentation**: https://docs.expo.dev/
- **React Native Docs**: https://reactnative.dev/
- **Expo Forums**: https://forums.expo.dev/

## 💡 Next Steps

1. ✅ Get the app running
2. ✅ Customize content and colors
3. ✅ Add your profile photo
4. ✅ Test on multiple devices
5. ✅ Build and publish to app stores

---

**Need help?** Check the main README.md for detailed documentation.
