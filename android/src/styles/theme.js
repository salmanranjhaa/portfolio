// Color Theme - Matching the website's turquoise and purple haze theme
export const colors = {
    // Primary Colors
    primary: '#40E0D0',        // Turquoise
    primaryDark: '#2CB8A8',
    primaryLight: '#7FFFD4',

    // Secondary Colors
    secondary: '#9370DB',      // Purple Haze
    secondaryDark: '#7B68AA',
    secondaryLight: '#B19CD9',

    // Accent Colors
    accent: '#FF6B9D',
    accentOrange: '#FF8C42',
    accentBlue: '#4FC3F7',

    // Background Colors
    background: '#0f0f1a',
    backgroundSecondary: '#1a1a2e',
    backgroundTertiary: '#16213e',

    // Card Colors
    cardBackground: 'rgba(26, 26, 46, 0.6)',
    cardBorder: 'rgba(64, 224, 208, 0.2)',

    // Text Colors
    text: '#ffffff',
    textSecondary: '#b0b0c3',
    textMuted: '#6b6b85',

    // Status Colors
    success: '#06ffa5',
    warning: '#ffbe0b',
    error: '#f5576c',

    // Gradient Colors
    gradients: {
        primary: ['#40E0D0', '#9370DB'],
        secondary: ['#9370DB', '#40E0D0'],
        hero: ['#667eea', '#764ba2'],
        accent: ['#f093fb', '#f5576c'],
        background: ['#0f0f1a', '#1a1a2e', '#0f0f1a'],
    }
};

// Typography
export const typography = {
    fontFamily: {
        regular: 'System',
        mono: 'Courier New',
    },
    fontSize: {
        xs: 12,
        sm: 14,
        base: 16,
        lg: 18,
        xl: 20,
        '2xl': 24,
        '3xl': 30,
        '4xl': 36,
        '5xl': 48,
        '6xl': 60,
    },
    fontWeight: {
        light: '300',
        regular: '400',
        medium: '500',
        semibold: '600',
        bold: '700',
        extrabold: '800',
    },
    lineHeight: {
        tight: 1.25,
        normal: 1.5,
        relaxed: 1.75,
    }
};

// Spacing
export const spacing = {
    xs: 4,
    sm: 8,
    md: 16,
    lg: 24,
    xl: 32,
    '2xl': 48,
    '3xl': 64,
};

// Border Radius
export const borderRadius = {
    sm: 4,
    md: 8,
    lg: 12,
    xl: 16,
    '2xl': 24,
    full: 9999,
};

// Shadows
export const shadows = {
    small: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 2,
    },
    medium: {
        shadowColor: colors.primary,
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.2,
        shadowRadius: 8,
        elevation: 4,
    },
    large: {
        shadowColor: colors.primary,
        shadowOffset: { width: 0, height: 8 },
        shadowOpacity: 0.3,
        shadowRadius: 16,
        elevation: 8,
    },
    glow: {
        shadowColor: colors.primary,
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 0.5,
        shadowRadius: 20,
        elevation: 10,
    }
};

// Animation Timings
export const animations = {
    fast: 150,
    normal: 300,
    slow: 500,
};

export default {
    colors,
    typography,
    spacing,
    borderRadius,
    shadows,
    animations,
};
