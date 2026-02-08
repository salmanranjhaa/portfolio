import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { colors, typography, spacing, borderRadius } from '../styles/theme';

const Experience = () => {
    const experiences = [
        {
            id: 1,
            date: 'Sept. 2024 — Present',
            title: 'Research Assistant',
            company: 'Institute of Responsible Innovation, University of St. Gallen',
            highlights: [
                'Engineered comprehensive web scraping pipelines to collect multimodal data (video, audio, text) from platforms including Kickstarter, processing over 150,000 creator profiles',
                'Applied state-of-the-art transformer models (BERT, BART-Large-MNLI) for zero-shot classification and semantic analysis, processing 167,000+ biographical texts',
                'Conducted advanced NLP analysis combining neural models with psycholinguistic lexicons (LIWC, Moral Foundations Dictionary)',
                'Developed topic modeling pipelines using BERTopic for unsupervised clustering and thematic analysis',
                'Created comprehensive analytical reports and interactive visualizations (Plotly, Seaborn)',
            ],
            techStack: ['Python', 'BERT', 'NLP', 'Web Scraping', 'BERTopic'],
        },
        {
            id: 2,
            date: 'Feb. 2025 — Present',
            title: 'Teaching Assistant — Fundamentals of Computer Science',
            company: 'Universität St. Gallen',
            highlights: [
                'Instructed and mentored students in Python programming, machine learning fundamentals, and databases',
                'Coached student teams in developing end-to-end data-driven web applications using Streamlit',
                'Designed targeted review sessions and assessed projects based on code quality and documentation standards',
            ],
            techStack: ['Python', 'Machine Learning', 'Streamlit', 'Databases'],
        },
        {
            id: 3,
            date: 'Apr. 2022 — Oct. 2024',
            title: 'Technical Business Analyst',
            company: 'FBK S.r.l., Milan',
            highlights: [
                'Managed full project lifecycle for SaaS Bid Management platform implementation across enterprise clients including Johnson & Johnson',
                'Developed interactive Tableau dashboards visualizing KPIs to support data-driven strategic decision-making',
                'Engineered API integrations between client ERP systems (SAP, JD Edwards) and platform',
                'Applied NLP techniques (spaCy, NLTK) to analyze unstructured client documents',
                'Created technical documentation and wrote optimized SQL queries for Oracle and Exasol databases',
            ],
            techStack: ['Tableau', 'API Integration', 'NLP', 'SQL', 'SAP'],
        },
    ];

    return (
        <View style={styles.container}>
            {/* Section Header */}
            <View style={styles.header}>
                <Text style={styles.tag}>My Journey</Text>
                <Text style={styles.title}>Experience</Text>
            </View>

            {/* Timeline */}
            <View style={styles.timeline}>
                {experiences.map((exp, index) => (
                    <View key={exp.id} style={styles.timelineItem}>
                        {/* Timeline Marker */}
                        <View style={styles.markerContainer}>
                            <LinearGradient
                                colors={colors.gradients.primary}
                                style={styles.marker}
                            />
                            {index < experiences.length - 1 && (
                                <View style={styles.timelineLine} />
                            )}
                        </View>

                        {/* Content Card */}
                        <View style={styles.contentCard}>
                            <LinearGradient
                                colors={['rgba(26, 26, 46, 0.6)', 'rgba(22, 33, 62, 0.4)']}
                                style={styles.cardGradient}
                            >
                                <Text style={styles.date}>{exp.date}</Text>
                                <Text style={styles.jobTitle}>{exp.title}</Text>
                                <Text style={styles.company}>{exp.company}</Text>

                                {/* Highlights */}
                                <View style={styles.highlights}>
                                    {exp.highlights.map((highlight, idx) => (
                                        <View key={idx} style={styles.highlightItem}>
                                            <Text style={styles.bullet}>•</Text>
                                            <Text style={styles.highlightText}>{highlight}</Text>
                                        </View>
                                    ))}
                                </View>

                                {/* Tech Stack */}
                                <View style={styles.techStack}>
                                    {exp.techStack.map((tech, idx) => (
                                        <View key={idx} style={styles.techBadge}>
                                            <Text style={styles.techText}>{tech}</Text>
                                        </View>
                                    ))}
                                </View>
                            </LinearGradient>
                        </View>
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
    timeline: {
        marginTop: spacing.xl,
    },
    timelineItem: {
        flexDirection: 'row',
        marginBottom: spacing.xl,
    },
    markerContainer: {
        alignItems: 'center',
        marginRight: spacing.md,
        position: 'relative',
    },
    marker: {
        width: 16,
        height: 16,
        borderRadius: 8,
        marginTop: spacing.sm,
    },
    timelineLine: {
        width: 2,
        flex: 1,
        backgroundColor: 'rgba(64, 224, 208, 0.3)',
        marginTop: spacing.xs,
    },
    contentCard: {
        flex: 1,
        borderRadius: borderRadius.xl,
        overflow: 'hidden',
        borderWidth: 1,
        borderColor: 'rgba(64, 224, 208, 0.2)',
    },
    cardGradient: {
        padding: spacing.lg,
    },
    date: {
        fontSize: typography.fontSize.sm,
        color: colors.primary,
        fontWeight: typography.fontWeight.semibold,
        marginBottom: spacing.sm,
    },
    jobTitle: {
        fontSize: typography.fontSize.xl,
        color: colors.text,
        fontWeight: typography.fontWeight.bold,
        marginBottom: spacing.xs,
    },
    company: {
        fontSize: typography.fontSize.base,
        color: colors.secondary,
        marginBottom: spacing.md,
        fontWeight: typography.fontWeight.medium,
    },
    highlights: {
        marginBottom: spacing.md,
    },
    highlightItem: {
        flexDirection: 'row',
        marginBottom: spacing.sm,
    },
    bullet: {
        color: colors.primary,
        marginRight: spacing.sm,
        fontSize: typography.fontSize.base,
        lineHeight: typography.fontSize.base * typography.lineHeight.relaxed,
    },
    highlightText: {
        flex: 1,
        fontSize: typography.fontSize.sm,
        color: colors.textSecondary,
        lineHeight: typography.fontSize.sm * typography.lineHeight.relaxed,
    },
    techStack: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        gap: spacing.sm,
        marginTop: spacing.sm,
    },
    techBadge: {
        backgroundColor: 'rgba(64, 224, 208, 0.1)',
        paddingHorizontal: spacing.md,
        paddingVertical: spacing.xs,
        borderRadius: borderRadius.md,
        borderWidth: 1,
        borderColor: 'rgba(64, 224, 208, 0.3)',
    },
    techText: {
        fontSize: typography.fontSize.xs,
        color: colors.primary,
        fontWeight: typography.fontWeight.medium,
    },
});

export default Experience;
