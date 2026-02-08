import React, { useState } from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet,
    Animated,
    Platform,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { colors, typography, spacing, shadows } from '../styles/theme';

const Navigation = ({ scrollY }) => {
    const [menuOpen, setMenuOpen] = useState(false);

    // Animated navbar background based on scroll
    const navBackground = scrollY.interpolate({
        inputRange: [0, 100],
        outputRange: ['rgba(15, 15, 26, 0)', 'rgba(15, 15, 26, 0.95)'],
        extrapolate: 'clamp',
    });

    const navItems = [
        { label: 'Home', id: 'home' },
        { label: 'About', id: 'about' },
        { label: 'Experience', id: 'experience' },
        { label: 'Projects', id: 'projects' },
        { label: 'Skills', id: 'skills' },
        { label: 'Contact', id: 'contact' },
    ];

    return (
        <Animated.View style={[styles.container, { backgroundColor: navBackground }]}>
            <View style={styles.navContent}>
                {/* Logo */}
                <View style={styles.logoContainer}>
                    <LinearGradient
                        colors={colors.gradients.primary}
                        start={{ x: 0, y: 0 }}
                        end={{ x: 1, y: 1 }}
                        style={styles.logo}
                    >
                        <Text style={styles.logoText}>SR</Text>
                    </LinearGradient>
                </View>

                {/* Menu Items - Hidden on mobile, shown on tablet/desktop */}
                <View style={styles.menuContainer}>
                    {navItems.map((item) => (
                        <TouchableOpacity
                            key={item.id}
                            style={styles.menuItem}
                            activeOpacity={0.7}
                        >
                            <Text style={styles.menuText}>{item.label}</Text>
                            <View style={styles.menuUnderline} />
                        </TouchableOpacity>
                    ))}
                </View>
            </View>
        </Animated.View>
    );
};

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        backgroundColor: 'rgba(15, 15, 26, 0.95)',
        paddingTop: Platform.OS === 'ios' ? 44 : 0,
        borderBottomWidth: 1,
        borderBottomColor: 'rgba(64, 224, 208, 0.1)',
    },
    navContent: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: spacing.lg,
        paddingVertical: spacing.md,
    },
    logoContainer: {
        zIndex: 10,
    },
    logo: {
        width: 50,
        height: 50,
        borderRadius: 25,
        alignItems: 'center',
        justifyContent: 'center',
        ...shadows.medium,
    },
    logoText: {
        color: colors.text,
        fontSize: typography.fontSize.xl,
        fontWeight: typography.fontWeight.bold,
    },
    menuContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: spacing.lg,
    },
    menuItem: {
        paddingVertical: spacing.sm,
        position: 'relative',
    },
    menuText: {
        color: colors.text,
        fontSize: typography.fontSize.base,
        fontWeight: typography.fontWeight.medium,
    },
    menuUnderline: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        height: 2,
        backgroundColor: colors.primary,
        transform: [{ scaleX: 0 }],
    },
});

export default Navigation;
