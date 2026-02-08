import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { colors, typography, spacing, borderRadius } from '../styles/theme';

const Education = () => {
    const education = [
        {
            id: 1,
            degree: "Master's in Computer Science",
            focus: 'Data Science and AI',
            institution: 'Universität St. Gallen',
            location: 'St Gallen, Switzerland',
            date: 'Sept. 2024 — Present',
            courses: [
                'ML/DL',
                'NLP',
                'Advanced Databases',
                'Data Science',
                'Cyber Security',
                'Cryptography',
                'Marketing Analytics',
                'Software Engineering',
            ],
            thesis:
                'Neural Decoders for Quantum Error Correction in Space Communications (AI optimization for quantum networks)',
        },
        {
            id: 2,
            degree: "Bachelor's in Economics, Management, and Computer Science",
            focus: 'Interdisciplinary Program',
            institution: 'Bocconi University',
            location: 'Milan, Italy',
            date: 'Sept. 2018 — May 2021',
            courses: [
                'Machine Learning',
                'Big Data',
                'Finance',
                'Econometrics',
                'Marketing Analytics',
            ],
            thesis:
                'Analyzed social media engagement and Formula 1 brand growth using Twitter data and econometric analysis',
        },
    ];

    return (
        <View style={styles.container}>
            {/* Section Header */}
            <View style={styles.header}>
                <Text style={styles.title}>Education</Text>
            </View>

            {/* Education Cards */}
            <View style={styles.educationGrid}>
                {education.map((edu) => (
                    <View key={edu.id} style={styles.educationCard}>
                        <LinearGradient
                            colors={['rgba(26, 26, 46, 0.6)', 'rgba(22, 33, 62, 0.4)']}
                            style={styles.cardGradient}
                        >
                            <View style={styles.educationHeader}>
                                <Text style={styles.icon}>🎓</Text>
                                <View style={styles.headerText}>
                                    <Text style={styles.degree}>{edu.degree}</Text>
                                    <Text style={styles.focus}>{edu.focus}</Text>
                                </View>
                            </View>

                            <Text style={styles.institution}>{edu.institution}</Text>
                            <Text style={styles.location}>{edu.location}</Text>
                            <Text style={styles.date}>{edu.date}</Text>

                            {/* Courses */}
                            <View style={styles.coursesSection}>
                                <Text style={styles.coursesTitle}>Relevant Courses</Text>
                                <View style={styles.courseTags}>
                                    {edu.courses.map((course, idx) => (
                                        <View key={idx} style={styles.courseTag}>
                                            <Text style={styles.courseText}>{course}</Text>
                                        </View>
                                    ))}
                                </View>
                            </View>

                            {/* Thesis */}
                            <View style={styles.thesisSection}>
                                <Text style={styles.thesisLabel}>Thesis:</Text>
                                <Text style={styles.thesisText}>{edu.thesis}</Text>
                            </View>
                        </LinearGradient>
                    </View>
                ))}
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        paddingVertical: spacing['3xl'],
        paddingHorizontal: spacing.lg,
        backgroundColor: 'rgba(15, 15, 26, 0.5)',
    },
    header: {
        marginBottom: spacing.xl,
        alignItems: 'center',
    },
    title: {
        fontSize: typography.fontSize['4xl'],
        color: colors.text,
        fontWeight: typography.fontWeight.bold,
        textAlign: 'center',
    },
    educationGrid: {
        gap: spacing.xl,
    },
    educationCard: {
        borderRadius: borderRadius.xl,
        overflow: 'hidden',
        borderWidth: 1,
        borderColor: 'rgba(64, 224, 208, 0.2)',
    },
    cardGradient: {
        padding: spacing.lg,
    },
    educationHeader: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: spacing.md,
        marginBottom: spacing.md,
    },
    icon: {
        fontSize: 40,
    },
    headerText: {
        flex: 1,
    },
    degree: {
        fontSize: typography.fontSize.lg,
        color: colors.text,
        fontWeight: typography.fontWeight.bold,
        marginBottom: spacing.xs,
    },
    focus: {
        fontSize: typography.fontSize.base,
        color: colors.primary,
        fontWeight: typography.fontWeight.medium,
    },
    institution: {
        fontSize: typography.fontSize.lg,
        color: colors.text,
        fontWeight: typography.fontWeight.semibold,
        marginBottom: spacing.xs,
    },
    location: {
        fontSize: typography.fontSize.base,
        color: colors.textSecondary,
        marginBottom: spacing.xs,
    },
    date: {
        fontSize: typography.fontSize.sm,
        color: colors.secondary,
        marginBottom: spacing.lg,
        fontStyle: 'italic',
    },
    coursesSection: {
        marginBottom: spacing.lg,
    },
    coursesTitle: {
        fontSize: typography.fontSize.base,
        color: colors.text,
        fontWeight: typography.fontWeight.semibold,
        marginBottom: spacing.sm,
    },
    courseTags: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        gap: spacing.sm,
    },
    courseTag: {
        backgroundColor: 'rgba(64, 224, 208, 0.1)',
        paddingHorizontal: spacing.md,
        paddingVertical: spacing.xs,
        borderRadius: borderRadius.md,
        borderWidth: 1,
        borderColor: 'rgba(64, 224, 208, 0.3)',
    },
    courseText: {
        fontSize: typography.fontSize.xs,
        color: colors.primary,
        fontWeight: typography.fontWeight.medium,
    },
    thesisSection: {
        paddingTop: spacing.md,
        borderTopWidth: 1,
        borderTopColor: 'rgba(64, 224, 208, 0.2)',
    },
    thesisLabel: {
        fontSize: typography.fontSize.base,
        color: colors.text,
        fontWeight: typography.fontWeight.bold,
        marginBottom: spacing.xs,
    },
    thesisText: {
        fontSize: typography.fontSize.sm,
        color: colors.textSecondary,
        lineHeight: typography.fontSize.sm * typography.lineHeight.relaxed,
    },
});

export default Education;
