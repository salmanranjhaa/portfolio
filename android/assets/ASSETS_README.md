# Asset Placeholder Files

The following asset files are needed for the app:

## Required Assets

1. **icon.png** (1024x1024) - App icon
2. **splash.png** (1242x2436) - Splash screen
3. **adaptive-icon.png** (1024x1024) - Android adaptive icon
4. **favicon.png** (48x48) - Web favicon

## How to Add Assets

### Option 1: Use https://www.appicon.co/
1. Upload your logo/icon
2. Select "Expo" as the platform
3. Download and extract to the `assets` folder

### Option 2: Manual Creation
1. Create images with the dimensions above
2. Save them in the `assets` folder
3. Ensure they match the names in `app.json`

## Temporary Placeholders

For now, you can use these solid color placeholders:

- **Background**: Dark blue (#0f0f1a)
- **Logo**: "SR" text in turquoise gradient
- **Splash**: Gradient from turquoise to purple

## Quick Generate Command

If you have ImageMagick installed:

```bash
# Create icon placeholder (1024x1024)
convert -size 1024x1024 gradient:#40E0D0-#9370DB \
  -gravity center -pointsize 400 -fill white -annotate +0+0 "SR" \
  assets/icon.png

# Create splash placeholder (1242x2436)  
convert -size 1242x2436 gradient:#0f0f1a-#1a1a2e \
  -gravity center -pointsize 200 -fill #40E0D0 -annotate +0+0 "Salman Ranjha\nPortfolio" \
  assets/splash.png
```

## Using the Expo Asset Generator

1. Install the Expo CLI globally:
   ```bash
   npm install -g expo-cli
   ```

2. Generate icons:
   ```bash
   expo generate-icons
   ```

---

**Note**: The app will run without these assets, but you'll see warnings. Add them when you're ready to publish.
