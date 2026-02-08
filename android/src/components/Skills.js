import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { colors, typography, spacing, borderRadius } from '../styles/theme';

const Skills = () => {
    const skillCategories = [
        {
            id: 'programming',
            title: 'Programming Languages',
            skills: [
                { name: 'Python', level: 'expert' },
                { name: 'Java', level: 'expert' },
                { name: 'JavaScript', level: 'expert' },
                { name: 'SQL', level: 'advanced' },
                { name: 'VBA', level: 'intermediate' },
                { name: 'R', level: 'intermediate' },
            ],
        },
        {
            id: 'webdev',
            title: 'Web Development',
            skills: [
                { name: 'HTML5', level: 'expert' },
                { name: 'CSS3', level: 'expert' },
                { name: 'JavaScript', level: 'expert' },
                { name: 'React', level: 'advanced' },
                { name: 'Node.js', level: 'advanced' },
                { name: 'Next.js', level: 'intermediate' },
            ],
        },
        {
            id: 'mlai',
            title: 'ML & AI',
            skills: [
                { name: 'PyTorch', level: 'expert' },
                { name: 'Scikit-learn', level: 'expert' },
                { name: 'Transformers', level: 'expert' },
                { name: 'TensorFlow', level: 'advanced' },
                { name: 'BERT', level: 'expert' },
                { name: 'GPT', level: 'expert' },
            ],
        },
        {
            id: 'dataeng',
            title: 'Data Engineering',
            skills: [
                { name: 'Pandas', level: 'expert' },
                { name: 'NumPy', level: 'expert' },
                { name: 'Beautiful Soup', level: 'expert' },
                { name: 'Selenium', level: 'expert' },
                { name: 'Apache Spark', level: 'advanced' },
                { name: 'Airflow', level: 'advanced' },
            ],
        },
    ];

    const getLevelColor = (level) => {
        switch (level) {
            case 'expert':
                return colors.primary;
            case 'advanced':
                return colors.secondary;
            case 'intermediate':
                return colors.accentBlue;
            default:
                return colors.textMuted;
        }
    };

    return (
        <View style={styles.container}>
            {/* Section Header */}
            <View style={styles.header}>
                <Text style={styles.tag}>Technical Arsenal</Text>
                <Text style={styles.title}>Skills & Expertise</Text>
                <Text style={styles.subtitle}>
                    My technical skills across different domains
                </Text>
            </View>

            {/* Skills Grid */}
            <View style={styles.skillsGrid}>
                {skillCategories.map((category) => (
                    <View key={category.id} style={styles.skillCard}>
                        <LinearGradient
                            colors={['rgba(26, 26, 46, 0.8)', 'rgba(22, 33, 62, 0.6)']}
                            style={styles.cardGradient}
                        >
                            <View style={styles.iconPlaceholder}>
                                <Text style={styles.iconText}>💻</Text>
                            </View>

                            <Text style={styles.categoryTitle}>{category.title}</Text>

                            <View style={styles.skillTags}>
                                {category.skills.map((skill, idx) => (
                                    <View
                                        key={idx}
                                        style={[
                                            styles.skillBadge,
                                            { borderColor: getLevelColor(skill.level) + '50' },
                                        ]}
                                    >
                                        <Text
                                            style={[
                                                styles.skillText,
                                                { color: getLevelColor(skill.level) },
                                            ]}
                                        >
                                            {skill.name}
                                        </Text>
                                    </View>
                                ))}
                            </View>
                        </LinearGradient>
                    </View>
                ))}
            </View>

            {/* Legend */}
            <View style={styles.legend}>
                <View style={styles.legendItem}>
                    <View style={[styles.legendDot, { backgroundColor: colors.primary }]} />
                    <Text style={styles.legendText}>Expert</Text>
                </View>
                <View style={styles.legendItem}>
                    <View style={[styles.legendDot, { backgroundColor: colors.secondary }]} />
                    <Text style={styles.legendText}>Advanced</Text>
                </View>
                <View style={styles.legendItem}>
                    <View style={[styles.legendDot, { backgroundColor: colors.accentBlue }]} />
                    <Text style={styles.legendText}>Intermediate</Text>
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
        marginBottom: spacing.sm,
    },
    subtitle: {
        fontSize: typography.fontSize.base,
        color: colors.textSecondary,
        textAlign: 'center',
    },
    skillsGrid: {
        gap: spacing.lg,
    },
    skillCard: {
        borderRadius: borderRadius.xl,
        overflow: 'hidden',
        borderWidth: 1,
        borderColor: 'rgba(64, 224, 208, 0.2)',
    },
    cardGradient: {
        padding: spacing.lg,
    },
    iconPlaceholder: {
        width: 60,
        height: 60,
        borderRadius: 30,
        backgroundColor: 'rgba(64, 224, 208, 0.1)',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: spacing.md,
    },
    iconText: {
        fontSize: 30,
    },
    categoryTitle: {
        fontSize: typography.fontSize.xl,
        color: colors.text,
        fontWeight: typography.fontWeight.bold,
        marginBottom: spacing.md,
    },
    skillTags: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        gap: spacing.sm,
    },
    skillBadge: {
        paddingHorizontal: spacing.md,
        paddingVertical: spacing.sm,
        borderRadius: borderRadius.md,
        borderWidth: 1,
        backgroundColor: 'rgba(255, 255, 255, 0.05)',
    },
    skillText: {
        fontSize: typography.fontSize.sm,
        fontWeight: typography.fontWeight.medium,
    },
    legend: {
        flexDirection: 'row',
        justifyContent: 'center',
        gap: spacing.lg,
        marginTop: spacing.xl,
        paddingTop: spacing.lg,
        borderTopWidth: 1,
        borderTopColor: 'rgba(64, 224, 208, 0.2)',
    },
    legendItem: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: spacing.sm,
    },
    legendDot: {
        width: 12,
        height: 12,
        borderRadius: 6,
    },
    legendText: {
        fontSize: typography.fontSize.sm,
        color: colors.textSecondary,
    },
});

export default Skills;
