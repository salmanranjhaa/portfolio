import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    Linking,
    Platform,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import * as MailComposer from 'expo-mail-composer';
import { colors, typography, spacing, borderRadius } from '../styles/theme';

const Contact = () => {
    const handleEmail = async () => {
        try {
            const isAvailable = await MailComposer.isAvailableAsync();
            if (isAvailable) {
                await MailComposer.composeAsync({
                    recipients: ['salman.ranjha@outlook.com'],
                    subject: 'Portfolio Inquiry',
                });
            } else {
                Linking.openURL('mailto:salman.ranjha@outlook.com');
            }
        } catch (error) {
            console.error('Error opening email:', error);
        }
    };

    const handlePhone = () => {
        Linking.openURL('tel:+41783385893');
    };

    const handleLinkedIn = () => {
        Linking.openURL('https://linkedin.com/in/salman-ranjha-934019177');
    };

    const contactCards = [
        {
            id: 'email',
            icon: '✉️',
            title: 'Email',
            value: 'salman.ranjha@outlook.com',
            onPress: handleEmail,
        },
        {
            id: 'phone',
            icon: '📞',
            title: 'Phone',
            value: '+41 (78) 338-5893',
            onPress: handlePhone,
        },
        {
            id: 'location',
            icon: '📍',
            title: 'Location',
            value: 'St Gallen, Switzerland',
            onPress: null,
        },
        {
            id: 'linkedin',
            icon: '💼',
            title: 'LinkedIn',
            value: 'Connect with me',
            onPress: handleLinkedIn,
        },
    ];

    return (
        <View style={styles.container}>
            {/* Section Header */}
            <View style={styles.header}>
                <Text style={styles.tag}>Let's Connect</Text>
                <Text style={styles.title}>Get In Touch</Text>
                <Text style={styles.subtitle}>
                    Interested in collaboration, research opportunities, or just want to
                    chat about AI and data science? Feel free to reach out!
                </Text>
            </View>

            {/* Contact Cards */}
            <View style={styles.contactGrid}>
                {contactCards.map((card) => (
                    <TouchableOpacity
                        key={card.id}
                        style={styles.contactCard}
                        onPress={card.onPress}
                        activeOpacity={card.onPress ? 0.7 : 1}
                        disabled={!card.onPress}
                    >
                        <LinearGradient
                            colors={['rgba(26, 26, 46, 0.8)', 'rgba(22, 33, 62, 0.6)']}
                            style={styles.cardGradient}
                        >
                            <View style={styles.iconContainer}>
                                <Text style={styles.icon}>{card.icon}</Text>
                            </View>
                            <Text style={styles.cardTitle}>{card.title}</Text>
                            <Text
                                style={[
                                    styles.cardValue,
                                    card.onPress && styles.cardValueLink,
                                ]}
                            >
                                {card.value}
                            </Text>
                        </LinearGradient>
                    </TouchableOpacity>
                ))}
            </View>

            {/* CTA Box */}
            <View style={styles.ctaBox}>
                <LinearGradient
                    colors={colors.gradients.primary}
                    start={{ x: 0, y: 0 }}
                    end={{ x: 1, y: 1 }}
                    style={styles.ctaGradient}
                >
                    <Text style={styles.ctaTitle}>Let's Connect</Text>
                    <Text style={styles.ctaText}>
                        I'm interested in roles at the intersection of AI product
                        development, research engineering, and data science. Feel free to
                        reach out to discuss opportunities or collaboration.
                    </Text>
                    <TouchableOpacity
                        style={styles.ctaButton}
                        onPress={handleEmail}
                        activeOpacity={0.8}
                    >
                        <Text style={styles.ctaButtonText}>Get in Touch</Text>
                    </TouchableOpacity>
                </LinearGradient>
            </View>

            {/* Footer */}
            <View style={styles.footer}>
                <Text style={styles.footerText}>
                    © {new Date().getFullYear()} Salman Ranjha. All rights reserved.
                </Text>
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
        marginBottom: spacing.md,
    },
    subtitle: {
        fontSize: typography.fontSize.base,
        color: colors.textSecondary,
        textAlign: 'center',
        lineHeight: typography.fontSize.base * typography.lineHeight.relaxed,
        paddingHorizontal: spacing.md,
    },
    contactGrid: {
        gap: spacing.lg,
        marginBottom: spacing.xl,
    },
    contactCard: {
        borderRadius: borderRadius.xl,
        overflow: 'hidden',
        borderWidth: 1,
        borderColor: 'rgba(64, 224, 208, 0.2)',
    },
    cardGradient: {
        padding: spacing.lg,
        alignItems: 'center',
    },
    iconContainer: {
        width: 60,
        height: 60,
        borderRadius: 30,
        backgroundColor: 'rgba(64, 224, 208, 0.1)',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: spacing.md,
    },
    icon: {
        fontSize: 30,
    },
    cardTitle: {
        fontSize: typography.fontSize.lg,
        color: colors.text,
        fontWeight: typography.fontWeight.semibold,
        marginBottom: spacing.xs,
    },
    cardValue: {
        fontSize: typography.fontSize.base,
        color: colors.textSecondary,
        textAlign: 'center',
    },
    cardValueLink: {
        color: colors.primary,
        textDecorationLine: 'underline',
    },
    ctaBox: {
        borderRadius: borderRadius.xl,
        overflow: 'hidden',
        marginVertical: spacing.xl,
    },
    ctaGradient: {
        padding: spacing.xl,
        alignItems: 'center',
    },
    ctaTitle: {
        fontSize: typography.fontSize['2xl'],
        color: colors.text,
        fontWeight: typography.fontWeight.bold,
        marginBottom: spacing.md,
    },
    ctaText: {
        fontSize: typography.fontSize.base,
        color: 'rgba(255, 255, 255, 0.9)',
        textAlign: 'center',
        lineHeight: typography.fontSize.base * typography.lineHeight.relaxed,
        marginBottom: spacing.xl,
    },
    ctaButton: {
        backgroundColor: 'rgba(255, 255, 255, 0.2)',
        paddingHorizontal: spacing.xl,
        paddingVertical: spacing.md,
        borderRadius: borderRadius.lg,
        borderWidth: 2,
        borderColor: colors.text,
    },
    ctaButtonText: {
        color: colors.text,
        fontSize: typography.fontSize.base,
        fontWeight: typography.fontWeight.bold,
    },
    footer: {
        paddingTop: spacing.xl,
        borderTopWidth: 1,
        borderTopColor: 'rgba(64, 224, 208, 0.2)',
        alignItems: 'center',
    },
    footerText: {
        fontSize: typography.fontSize.sm,
        color: colors.textMuted,
    },
});

export default Contact;
