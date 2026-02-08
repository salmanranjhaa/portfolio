import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { colors, typography, spacing, borderRadius, shadows } from '../styles/theme';

const About = () => {
    const interests = [
        'Machine Learning',
        'Natural Language Processing',
        'Data Engineering',
        'Complex Systems',
        'Quantum Computing',
        'Applied AI',
    ];

    return (
        <View style={styles.container}>
            {/* Section Header */}
            <View style={styles.header}>
                <Text style={styles.tag}>Who I Am</Text>
                <Text style={styles.title}>About Me</Text>
            </View>

            {/* Content */}
            <View style={styles.content}>
                {/* Profile Image */}
                <View style={styles.imageContainer}>
                    <View style={styles.imageWrapper}>
                        <LinearGradient
                            colors={colors.gradients.primary}
                            style={styles.imageGradientBorder}
                        >
                            <View style={styles.imagePlaceholder}>
                                <Text style={styles.imagePlaceholderText}>SR</Text>
                            </View>
                        </LinearGradient>
                    </View>
                </View>

                {/* About Text */}
                <View style={styles.textContainer}>
                    <Text style={styles.intro}>
                        Passionate about bridging{' '}
                        <Text style={styles.highlight}>cutting-edge research</Text> and{' '}
                        <Text style={styles.highlight}>real-world impact</Text> through
                        data-driven innovation.
                    </Text>

                    <Text style={styles.paragraph}>
                        Currently pursuing an MSc in Computer Science at{' '}
                        <Text style={styles.bold}>Universität St. Gallen</Text>, specializing
                        in Data Science and AI. I'm simultaneously working as a Research
                        Assistant at the Institute of Responsible Innovation and teaching the
                        next generation as a TA for Fundamentals of Computer Science.
                    </Text>

                    <Text style={styles.paragraph}>
                        My journey combines technical depth with business acumen, shaped by my
                        interdisciplinary background from{' '}
                        <Text style={styles.bold}>Bocconi University</Text> (Economics,
                        Management, and CS) and hands-on experience as a Technical Business
                        Analyst at FBK S.r.l.
                    </Text>

                    {/* Interests */}
                    <View style={styles.interestsSection}>
                        <Text style={styles.interestsTitle}>Core Interests</Text>
                        <View style={styles.interestTags}>
                            {interests.map((interest, index) => (
                                <View key={index} style={styles.tag}>
                                    <LinearGradient
                                        colors={['rgba(64, 224, 208, 0.2)', 'rgba(147, 112, 219, 0.2)']}
                                        style={styles.tagGradient}
                                    >
                                        <Text style={styles.tagText}>{interest}</Text>
                                    </LinearGradient>
                                </View>
                            ))}
                        </View>
                    </View>

                    {/* Location */}
                    <View style={styles.location}>
                        <Text style={styles.locationIcon}>📍</Text>
                        <Text style={styles.locationText}>St Gallen, Switzerland</Text>
                    </View>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        paddingVertical: spacing['3xl'],
        paddingHorizontal: spacing.lg,
    },
    header: {
        marginBottom: spacing.xl,
        alignItems: 'center',
    },
    tag: {
        fontSize: typography.fontSize.sm,
        color: colors.primary,
        fontWeight: typography.fontWeight.semibold,
        textTransform: 'uppercase',
        letterSpacing: 1.5,
        marginBottom: spacing.sm,
    },
    title: {
        fontSize: typography.fontSize['4xl'],
        color: colors.text,
        fontWeight: typography.fontWeight.bold,
        textAlign: 'center',
    },
    content: {
        gap: spacing.xl,
    },
    imageContainer: {
        alignItems: 'center',
        marginBottom: spacing.lg,
    },
    imageWrapper: {
        position: 'relative',
    },
    imageGradientBorder: {
        width: 200,
        height: 200,
        borderRadius: 100,
        padding: 4,
        ...shadows.glow,
    },
    imagePlaceholder: {
        width: '100%',
        height: '100%',
        borderRadius: 100,
        backgroundColor: colors.backgroundSecondary,
        alignItems: 'center',
        justifyContent: 'center',
    },
    imagePlaceholderText: {
        fontSize: typography.fontSize['5xl'],
        color: colors.primary,
        fontWeight: typography.fontWeight.bold,
    },
    textContainer: {
        gap: spacing.md,
    },
    intro: {
        fontSize: typography.fontSize.lg,
        color: colors.text,
        lineHeight: typography.fontSize.lg * typography.lineHeight.relaxed,
        marginBottom: spacing.sm,
    },
    paragraph: {
        fontSize: typography.fontSize.base,
        color: colors.textSecondary,
        lineHeight: typography.fontSize.base * typography.lineHeight.relaxed,
    },
    highlight: {
        color: colors.primary,
        fontWeight: typography.fontWeight.semibold,
    },
    bold: {
        color: colors.text,
        fontWeight: typography.fontWeight.bold,
    },
    interestsSection: {
        marginTop: spacing.lg,
    },
    interestsTitle: {
        fontSize: typography.fontSize.xl,
        color: colors.text,
        fontWeight: typography.fontWeight.semibold,
        marginBottom: spacing.md,
    },
    interestTags: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        gap: spacing.sm,
    },
    tagGradient: {
        paddingHorizontal: spacing.md,
        paddingVertical: spacing.sm,
        borderRadius: borderRadius.lg,
        borderWidth: 1,
        borderColor: 'rgba(64, 224, 208, 0.3)',
    },
    tagText: {
        fontSize: typography.fontSize.sm,
        color: colors.text,
        fontWeight: typography.fontWeight.medium,
    },
    location: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: spacing.sm,
        marginTop: spacing.lg,
    },
    locationIcon: {
        fontSize: typography.fontSize.lg,
    },
    locationText: {
        fontSize: typography.fontSize.base,
        color: colors.textSecondary,
        fontWeight: typography.fontWeight.medium,
    },
});

export default About;
