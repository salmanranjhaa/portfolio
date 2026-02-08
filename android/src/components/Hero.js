import React, { useEffect, useRef } from 'react';
import {
    View,
    Text,
    StyleSheet,
    Animated,
    Dimensions,
    TouchableOpacity,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { colors, typography, spacing, borderRadius } from '../styles/theme';

const { width, height } = Dimensions.get('window');

const Hero = () => {
    const fadeAnim = useRef(new Animated.Value(0)).current;
    const slideAnim = useRef(new Animated.Value(50)).current;
    const stat1 = useRef(new Animated.Value(0)).current;
    const stat2 = useRef(new Animated.Value(0)).current;
    const stat3 = useRef(new Animated.Value(0)).current;

    useEffect(() => {
        // Entrance animations
        Animated.parallel([
            Animated.timing(fadeAnim, {
                toValue: 1,
                duration: 1000,
                useNativeDriver: true,
            }),
            Animated.spring(slideAnim, {
                toValue: 0,
                tension: 20,
                friction: 7,
                useNativeDriver: true,
            }),
        ]).start();

        // Animate stats
        setTimeout(() => {
            Animated.parallel([
                Animated.timing(stat1, {
                    toValue: 167000,
                    duration: 2000,
                    useNativeDriver: false,
                }),
                Animated.timing(stat2, {
                    toValue: 2,
                    duration: 1000,
                    useNativeDriver: false,
                }),
                Animated.timing(stat3, {
                    toValue: 5,
                    duration: 1500,
                    useNativeDriver: false,
                }),
            ]).start();
        }, 500);
    }, []);

    return (
        <View style={styles.container}>
            {/* Animated Background Orbs */}
            <View style={styles.backgroundOrbs}>
                <LinearGradient
                    colors={['rgba(64, 224, 208, 0.15)', 'rgba(147, 112, 219, 0.15)']}
                    style={[styles.orb, styles.orb1]}
                />
                <LinearGradient
                    colors={['rgba(147, 112, 219, 0.15)', 'rgba(64, 224, 208, 0.15)']}
                    style={[styles.orb, styles.orb2]}
                />
                <LinearGradient
                    colors={['rgba(64, 224, 208, 0.1)', 'rgba(147, 112, 219, 0.1)']}
                    style={[styles.orb, styles.orb3]}
                />
            </View>

            {/* Hero Content */}
            <Animated.View
                style={[
                    styles.content,
                    {
                        opacity: fadeAnim,
                        transform: [{ translateY: slideAnim }],
                    },
                ]}
            >
                <Text style={styles.greeting}>Hi, I'm</Text>

                <Text style={styles.name}>
                    <Text style={styles.nameGradient}>Salman Ranjha</Text>
                </Text>

                <View style={styles.titleContainer}>
                    <Text style={styles.title}>Data Scientist & AI Engineer</Text>
                </View>

                <Text style={styles.description}>
                    MSc Computer Science student specializing in{' '}
                    <Text style={styles.highlight}>Data Science</Text> and{' '}
                    <Text style={styles.highlight}>AI</Text>, bridging cutting-edge
                    research and real-world impact through data-driven innovation.
                </Text>

                {/* CTA Buttons */}
                <View style={styles.ctaContainer}>
                    <TouchableOpacity activeOpacity={0.8}>
                        <LinearGradient
                            colors={colors.gradients.primary}
                            start={{ x: 0, y: 0 }}
                            end={{ x: 1, y: 1 }}
                            style={styles.primaryButton}
                        >
                            <Text style={styles.buttonText}>Get in Touch</Text>
                        </LinearGradient>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.secondaryButton} activeOpacity={0.8}>
                        <Text style={styles.secondaryButtonText}>View My Work</Text>
                    </TouchableOpacity>
                </View>

                {/* Animated Stats */}
                <View style={styles.statsContainer}>
                    <View style={styles.statItem}>
                        <Text style={styles.statNumber}>167k</Text>
                        <Text style={styles.statLabel}>
                            Entrepreneurial Biographies Analyzed
                        </Text>
                    </View>

                    <View style={styles.statItem}>
                        <Text style={styles.statNumber}>2</Text>
                        <Text style={styles.statLabel}>Active Roles</Text>
                    </View>

                    <View style={styles.statItem}>
                        <Text style={styles.statNumber}>5</Text>
                        <Text style={styles.statLabel}>Languages Spoken</Text>
                    </View>
                </View>
            </Animated.View>

            {/* Scroll Indicator */}
            <View style={styles.scrollIndicator}>
                <View style={styles.scrollLine} />
                <Text style={styles.scrollText}>Scroll to explore</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        minHeight: height * 0.9,
        paddingTop: 100,
        paddingHorizontal: spacing.lg,
        position: 'relative',
        justifyContent: 'center',
    },
    backgroundOrbs: {
        ...StyleSheet.absoluteFillObject,
    },
    orb: {
        position: 'absolute',
        borderRadius: 9999,
    },
    orb1: {
        width: width * 0.6,
        height: width * 0.6,
        top: -width * 0.2,
        right: -width * 0.1,
    },
    orb2: {
        width: width * 0.5,
        height: width * 0.5,
        bottom: width * 0.2,
        left: -width * 0.2,
    },
    orb3: {
        width: width * 0.4,
        height: width * 0.4,
        top: height * 0.3,
        left: width * 0.3,
    },
    content: {
        zIndex: 10,
    },
    greeting: {
        fontSize: typography.fontSize.xl,
        color: colors.textSecondary,
        marginBottom: spacing.sm,
        fontWeight: typography.fontWeight.medium,
    },
    name: {
        fontSize: typography.fontSize['5xl'],
        fontWeight: typography.fontWeight.extrabold,
        marginBottom: spacing.md,
    },
    nameGradient: {
        color: colors.primary,
    },
    titleContainer: {
        marginBottom: spacing.lg,
    },
    title: {
        fontSize: typography.fontSize['2xl'],
        color: colors.secondary,
        fontWeight: typography.fontWeight.semibold,
    },
    description: {
        fontSize: typography.fontSize.lg,
        color: colors.textSecondary,
        lineHeight: typography.fontSize.lg * typography.lineHeight.relaxed,
        marginBottom: spacing.xl,
    },
    highlight: {
        color: colors.primary,
        fontWeight: typography.fontWeight.bold,
    },
    ctaContainer: {
        flexDirection: 'row',
        gap: spacing.md,
        marginBottom: spacing['2xl'],
        flexWrap: 'wrap',
    },
    primaryButton: {
        paddingHorizontal: spacing.xl,
        paddingVertical: spacing.md,
        borderRadius: borderRadius.lg,
    },
    buttonText: {
        color: colors.text,
        fontSize: typography.fontSize.base,
        fontWeight: typography.fontWeight.semibold,
    },
    secondaryButton: {
        paddingHorizontal: spacing.xl,
        paddingVertical: spacing.md,
        borderRadius: borderRadius.lg,
        borderWidth: 2,
        borderColor: colors.primary,
    },
    secondaryButtonText: {
        color: colors.primary,
        fontSize: typography.fontSize.base,
        fontWeight: typography.fontWeight.semibold,
    },
    statsContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        gap: spacing.lg,
        marginTop: spacing.xl,
    },
    statItem: {
        flex: 1,
        minWidth: 100,
    },
    statNumber: {
        fontSize: typography.fontSize['3xl'],
        color: colors.primary,
        fontWeight: typography.fontWeight.bold,
        marginBottom: spacing.xs,
    },
    statLabel: {
        fontSize: typography.fontSize.sm,
        color: colors.textSecondary,
        lineHeight: typography.fontSize.sm * typography.lineHeight.normal,
    },
    scrollIndicator: {
        position: 'absolute',
        bottom: spacing.xl,
        alignSelf: 'center',
        alignItems: 'center',
    },
    scrollLine: {
        width: 2,
        height: 40,
        backgroundColor: colors.primary,
        marginBottom: spacing.sm,
        opacity: 0.5,
    },
    scrollText: {
        fontSize: typography.fontSize.sm,
        color: colors.textMuted,
    },
});

export default Hero;
