# Salman Ranjha Portfolio - React Native App

A beautiful, modern portfolio mobile application built with React Native and Expo, showcasing expertise in Data Science and AI.

## 🎨 Design Philosophy

This app maintains the same premium design philosophy as the web version:
- **Vibrant Color Scheme**: Turquoise (#40E0D0) and Purple Haze (#9370DB)
- **Smooth Animations**: Entrance animations, scroll effects, and micro-interactions
- **Modern Aesthetics**: Gradient backgrounds, glassmorphism, and dynamic visual elements
- **Responsive Design**: Optimized for all screen sizes

## ✨ Features

- 🎭 **Animated Hero Section** with stat counters
- 👤 **About Section** with interests and location
- 💼 **Experience Timeline** with tech stack badges
- 🚀 **Featured Projects** with detailed descriptions
- 🛠️ **Skills Grid** with color-coded proficiency levels
- 🎓 **Education Cards** with courses and thesis info
- 📧 **Contact Section** with native email/phone integration

## 📱 Screenshots

*Coming soon - Run the app to see it in action!*

## 🚀 Getting Started

### Prerequisites

- **Node.js** (v16 or higher) - [Download here](https://nodejs.org/)
- **npm** or **yarn**
- **Expo Go app** (for testing on physical device)
  - [iOS App Store](https://apps.apple.com/app/expo-go/id982107779)
  - [Google Play Store](https://play.google.com/store/apps/details?id=host.exp.exponent)

### Installation

1. **Install Node.js** if you haven't already

2. **Navigate to the android folder**:
   ```bash
   cd android
   ```

3. **Install dependencies**:
   ```bash
   npm install
   ```

4. **Start the development server**:
   ```bash
   npm start
   ```

5. **Run on your device**:
   - Scan the QR code with **Expo Go** app (Android) or **Camera app** (iOS)
   - Or press `a` for Android emulator, `i` for iOS simulator

## 📂 Project Structure

```
android/
├── App.js                  # Main app entry point
├── src/
│   ├── components/         # React components
│   │   ├── Navigation.js   # Top navigation bar
│   │   ├── Hero.js         # Hero section with animations
│   │   ├── About.js        # About me section
│   │   ├── Experience.js   # Timeline of work experience
│   │   ├── Projects.js     # Featured projects
│   │   ├── Skills.js       # Skills grid
│   │   ├── Education.js    # Education cards
│   │   └── Contact.js      # Contact information
│   └── styles/
│       └── theme.js        # Color scheme & design tokens
├── assets/                 # Images and assets
├── package.json            # Dependencies
├── app.json                # Expo configuration
└── babel.config.js         # Babel configuration
```

## 🎨 Customization

### Colors

Edit `src/styles/theme.js` to modify the color scheme:

```javascript
export const colors = {
  primary: '#40E0D0',        // Turquoise
  secondary: '#9370DB',      // Purple Haze
  // ... more colors
};
```

### Content

Update the content in each component file:
- Personal info: `src/components/About.js`
- Work experience: `src/components/Experience.js`
- Projects: `src/components/Projects.js`
- Skills: `src/components/Skills.js`

## 📦 Building for Production

### Android APK

```bash
# Build Android APK
expo build:android
```

### iOS IPA

```bash
# Build iOS IPA (requires Apple Developer account)
expo build:ios
```

### Using EAS Build (Recommended)

```bash
# Install EAS CLI
npm install -g eas-cli

# Build for Android
eas build --platform android

# Build for iOS
eas build --platform ios
```

## 🚀 Publishing to App Stores

### Google Play Store

1. Build a production APK/AAB using EAS Build
2. Create a Google Play Developer account ($25 one-time fee)
3. Upload your app bundle
4. Fill in store listing details
5. Submit for review

### Apple App Store

1. Build a production IPA using EAS Build
2. Enroll in Apple Developer Program ($99/year)
3. Upload via App Store Connect
4. Fill in app information
5. Submit for review

## 🛠️ Technologies Used

- **React Native** - Mobile app framework
- **Expo** - Development platform
- **React Native Reanimated** - Smooth animations
- **Expo Linear Gradient** - Beautiful gradients
- **Expo Mail Composer** - Native email integration

## 📱 Testing

### On Physical Device

1. Install **Expo Go** from your app store
2. Run `npm start`
3. Scan the QR code with Expo Go (Android) or Camera (iOS)

### On Emulator

**Android**:
```bash
npm run android
```

**iOS** (Mac only):
```bash
npm run ios
```

## 🐛 Troubleshooting

### "Cannot find module" errors
```bash
rm -rf node_modules
npm install
```

### Metro bundler issues
```bash
npm start -- --clear
```

### Expo Go connection issues
- Ensure your phone and computer are on the same WiFi network
- Try using tunnel connection: `npm start -- --tunnel`

## 📄 License

This project is for portfolio purposes.

## 👤 Author

**Salman Ranjha**
- Email: salman.ranjha@outlook.com
- LinkedIn: [salman-ranjha-934019177](https://linkedin.com/in/salman-ranjha-934019177)
- Location: St Gallen, Switzerland

---

Built with ❤️ using React Native and Expo
