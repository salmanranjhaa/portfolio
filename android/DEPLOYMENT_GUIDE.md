# 📱 App Store Deployment Guide

Complete guide for publishing your React Native portfolio app to Google Play Store and Apple App Store.

## 🎯 Overview

This guide covers:
1. Preparing your app for production
2. Building release versions
3. Publishing to Google Play Store
4. Publishing to Apple App Store

---

## 📋 Pre-Deployment Checklist

### 1. Update App Information

**Edit `app.json`**:
```json
{
  "expo": {
    "name": "Your App Name",
    "slug": "your-app-slug",
    "version": "1.0.0",
    "android": {
      "package": "com.yourname.portfolio",
      "versionCode": 1
    },
    "ios": {
      "bundleIdentifier": "com.yourname.portfolio",
      "buildNumber": "1.0.0"
    }
  }
}
```

### 2. Add App Icons

Place these files in `assets/`:
- `icon.png` (1024x1024)
- `splash.png` (1242x2436)
- `adaptive-icon.png` (1024x1024)
- `favicon.png` (48x48)

Use https://www.appicon.co/ to generate from your logo.

### 3. Test Thoroughly

- ✅ Test on multiple Android devices
- ✅ Test on different screen sizes
- ✅ Test all links (email, phone, LinkedIn)
- ✅ Verify all content is correct
- ✅ Check animations are smooth

---

## 🤖 Google Play Store Deployment

### Step 1: Install EAS CLI

```bash
npm install -g eas-cli
```

### Step 2: Login to Expo

```bash
eas login
```

Create an account at https://expo.dev if you don't have one.

### Step 3: Configure Build

```bash
eas build:configure
```

This creates `eas.json` in your project.

### Step 4: Build APK (for testing)

```bash
eas build --platform android --profile preview
```

This creates an APK you can install on your device for testing.

### Step 5: Build AAB (for Play Store)

```bash
eas build --platform android --profile production
```

This creates an Android App Bundle (.aab) for the Play Store.

### Step 6: Create Google Play Console Account

1. Go to https://play.google.com/console
2. Pay one-time $25 registration fee
3. Complete account setup

### Step 7: Create App Listing

1. Click **Create app**
2. Fill in app details:
   - **App name**: Salman Ranjha Portfolio
   - **Default language**: English
   - **App or game**: App
   - **Free or paid**: Free

### Step 8: Upload App Bundle

1. Go to **Production** → **Create release**
2. Upload the .aab file from EAS Build
3. Add release notes
4. Review and roll out

### Step 9: Complete Store Listing

Required information:
- **Short description** (80 chars)
- **Full description** (4000 chars)
- **Screenshots** (minimum 2)
- **App icon** (512x512)
- **Feature graphic** (1024x500)
- **Privacy policy** URL
- **Category**: Business or Productivity
- **Content rating**: Everyone

### Step 10: Submit for Review

Review all sections and click **Submit for review**.

**Review time**: Usually 1-3 days.

---

## 🍎 Apple App Store Deployment

### Step 1: Enroll in Apple Developer Program

1. Go to https://developer.apple.com/programs/
2. Enroll ($99/year)
3. Complete verification (can take 1-2 days)

### Step 2: Create App ID

1. Go to https://developer.apple.com/account
2. **Certificates, IDs & Profiles** → **Identifiers**
3. Create new App ID:
   - **Bundle ID**: com.yourname.portfolio
   - **App Name**: Salman Ranjha Portfolio

### Step 3: Build iOS App

```bash
eas build --platform ios --profile production
```

This creates an .ipa file.

### Step 4: Create App Store Connect Listing

1. Go to https://appstoreconnect.apple.com
2. Click **My Apps** → **+** → **New App**
3. Fill in:
   - **Name**: Salman Ranjha Portfolio
   - **Primary Language**: English
   - **Bundle ID**: Select your bundle ID
   - **SKU**: unique identifier (e.g., salman-portfolio-001)

### Step 5: Upload Build

EAS Build will automatically upload to App Store Connect, or:

```bash
eas submit --platform ios
```

### Step 6: Complete App Information

**App Information**:
- Category: Business or Utilities
- Content rating
- Privacy policy URL

**Pricing**: Free

**App Privacy**: Answer questions about data collection

### Step 7: Add Screenshots

Required:
- 6.5" iPhone screenshots (1284 x 2778)
- 5.5" iPhone screenshots (1242 x 2208)

Optional:
- iPad screenshots
- App previews (videos)

### Step 8: Submit for Review

1. Select your build
2. Add **What's New** text
3. Submit for review

**Review time**: Usually 1-3 days.

---

## 🔄 Updating the App

### Version Updates

**Update version numbers**:

1. In `app.json`:
```json
{
  "version": "1.0.1",
  "android": {
    "versionCode": 2
  },
  "ios": {
    "buildNumber": "1.0.1"
  }
}
```

2. Build new version:
```bash
eas build --platform all --profile production
```

3. Submit to stores with update notes

---

## 📸 Creating Screenshots

### Tools

- **iPhone Simulator** (Mac only)
- **Android Emulator**
- **Expo Screenshots**: Built-in screenshot tool

### Tips

1. Show key features:
   - Hero section with your name
   - Skills grid
   - Projects showcase
   - Contact information

2. Use clean backgrounds

3. Add text overlays highlighting features

4. Keep consistent branding

---

## 🔐 App Signing

### Android

EAS Build handles signing automatically. You'll get:
- **Upload key**: Used by Google Play
- **App signing key**: Managed by Google

### iOS

EAS Build creates and manages:
- **Distribution certificate**
- **Provisioning profile**

All handled automatically!

---

## 📊 Analytics (Optional)

Add analytics to track usage:

```bash
npm install firebase
```

Or use:
- Google Analytics
- Mixpanel
- Amplitude

---

## 💰 Costs Summary

| Service | Cost | Frequency |
|---------|------|-----------|
| Google Play Developer | $25 | One-time |
| Apple Developer Program | $99 | Annual |
| Expo EAS Build (optional) | Free tier available | Monthly plans from $29 |

---

## 🆘 Troubleshooting

### Build Failures

```bash
# Clear cache and rebuild
eas build --platform android --clear-cache
```

### App Rejection

Common reasons:
1. Missing privacy policy
2. Broken links
3. Incomplete metadata
4. Technical issues

Fix and resubmit.

### Certificate Issues (iOS)

```bash
# Clear credentials and regenerate
eas credentials
```

---

## 📚 Additional Resources

### Google Play
- **Console Help**: https://support.google.com/googleplay/android-developer
- **Best Practices**: https://developer.android.com/distribute/best-practices

### Apple App Store
- **Guidelines**: https://developer.apple.com/app-store/review/guidelines/
- **Marketing**: https://developer.apple.com/app-store/marketing/guidelines/

### EAS Build
- **Documentation**: https://docs.expo.dev/build/introduction/
- **Troubleshooting**: https://docs.expo.dev/build/troubleshooting/

---

## ✅ Final Checklist

Before submitting:

- [ ] All content is accurate and spell-checked
- [ ] App icons and splash screens are added
- [ ] Screenshots are high-quality
- [ ] Privacy policy is published (if collecting data)
- [ ] All links work correctly
- [ ] App has been tested on multiple devices
- [ ] Version numbers are correct
- [ ] Store listings are complete
- [ ] Build is successful
- [ ] Terms of service agreed to

---

## 🎉 Success!

Once approved, your app will be live on the stores!

**Share your app**:
- Add badges to your website
- Share on LinkedIn
- Include in your resume

**Monitor**:
- Reviews and ratings
- Download statistics
- Crash reports

**Iterate**:
- Respond to feedback
- Fix bugs quickly
- Add new features

Good luck! 🚀

