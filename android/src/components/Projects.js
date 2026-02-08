import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { colors, typography, spacing, borderRadius } from '../styles/theme';

const Projects = () => {
    const projects = [
        {
            id: 1,
            title: 'HuggingFace Model Metadata Framework (HF-MMF)',
            date: 'Sept. 2025 — Dec. 2025',
            institution: 'ML/AI Program, University of St. Gallen',
            description:
                'Architected scalable metadata pipeline to curate datasets (50TB-1.6PB) enabling Weight Space Learning research',
            highlights: [
                'Designed multi-attribution scoring system evaluating 4 product metrics: Popularity (downloads), Originality (research backing), Influence (derivative models), and Documentation quality',
                'Implemented parallel workflow with atomic chaining, retry logic, and process-based parallelism supporting multi-worker coordination',
                'Developed distributed parallel download system with CI/CD pipeline, containerization, and automated deployment',
            ],
            techStack: ['Python', 'Pandas', 'SQLite', 'HuggingFace Hub API', 'Dask', 'PyTorch', 'Plotly'],
        },
        {
            id: 2,
            title: 'DITE: Distributed Task Execution Platform',
            date: 'Sept. 2025 — Dec. 2025',
            institution: 'Advanced Software & Systems Engineering, University of St. Gallen',
            description: 'Led full-stack product development for federated microservices platform',
            highlights: [
                'Designed product architecture balancing technical complexity with user needs: event-driven communication (MQTT, WebSub), semantic file discovery (OpenAPI), and IAM security integration',
                'Managed product trade-offs evaluating standardized protocols vs. custom solutions to ensure federation autonomy',
                'Shipped production-ready system with CI/CD pipeline, containerization, and automated deployment achieving integration with 15 distributed federations',
            ],
            techStack: ['React', 'Vite', 'MQTT', 'WebSub', 'GitHub Actions'],
        },
        {
            id: 3,
            title: 'Document Information Extraction System',
            date: 'Feb. 2025 — May 2025',
            institution: 'Natural Language Processing, University of St. Gallen',
            description:
                'Enhanced multi-technique transformer-based LLM prompting to solve low-resource document extraction',
            highlights: [
                'Applied product thinking to navigate accuracy-cost-latency trade-offs with LLMs vs. QA baseline',
                'Conducted data quality experiments focusing on synthetic strategies, achieving 52% F1 with LLMs vs. 0% baseline',
            ],
            techStack: ['PyTorch', 'Transformers', 'GPT-4', 'Gemini 1.5 Pro'],
        },
    ];

    return (
        <View style={styles.container}>
            {/* Section Header */}
            <View style={styles.header}>
                <Text style={styles.tag}>Selected Work</Text>
                <Text style={styles.title}>Featured Projects</Text>
            </View>

            {/* Projects Grid */}
            <View style={styles.projectsGrid}>
                {projects.map((project) => (
                    <View key={project.id} style={styles.projectCard}>
                        <LinearGradient
                            colors={['rgba(26, 26, 46, 0.6)', 'rgba(22, 33, 62, 0.4)']}
                            style={styles.cardGradient}
                        >
                            <View style={styles.projectHeader}>
                                <Text style={styles.projectTitle}>{project.title}</Text>
                                <Text style={styles.projectDate}>{project.date}</Text>
                            </View>

                            <Text style={styles.institution}>{project.institution}</Text>
                            <Text style={styles.description}>{project.description}</Text>

                            {/* Highlights */}
                            <View style={styles.highlights}>
                                {project.highlights.map((highlight, idx) => (
                                    <View key={idx} style={styles.highlightItem}>
                                        <Text style={styles.bullet}>•</Text>
                                        <Text style={styles.highlightText}>{highlight}</Text>
                                    </View>
                                ))}
                            </View>

                            {/* Tech Stack */}
                            <View style={styles.techStack}>
                                {project.techStack.map((tech, idx) => (
                                    <View key={idx} style={styles.techBadge}>
                                        <Text style={styles.techText}>{tech}</Text>
                                    </View>
                                ))}
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
    projectsGrid: {
        gap: spacing.xl,
    },
    projectCard: {
        borderRadius: borderRadius.xl,
        overflow: 'hidden',
        borderWidth: 1,
        borderColor: 'rgba(64, 224, 208, 0.2)',
    },
    cardGradient: {
        padding: spacing.lg,
    },
    projectHeader: {
        marginBottom: spacing.sm,
    },
    projectTitle: {
        fontSize: typography.fontSize.xl,
        color: colors.text,
        fontWeight: typography.fontWeight.bold,
        marginBottom: spacing.xs,
    },
    projectDate: {
        fontSize: typography.fontSize.sm,
        color: colors.primary,
        fontWeight: typography.fontWeight.medium,
    },
    institution: {
        fontSize: typography.fontSize.sm,
        color: colors.secondary,
        marginBottom: spacing.md,
        fontStyle: 'italic',
    },
    description: {
        fontSize: typography.fontSize.base,
        color: colors.text,
        marginBottom: spacing.md,
        lineHeight: typography.fontSize.base * typography.lineHeight.relaxed,
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
    },
    techBadge: {
        backgroundColor: 'rgba(147, 112, 219, 0.2)',
        paddingHorizontal: spacing.md,
        paddingVertical: spacing.xs,
        borderRadius: borderRadius.md,
        borderWidth: 1,
        borderColor: 'rgba(147, 112, 219, 0.3)',
    },
    techText: {
        fontSize: typography.fontSize.xs,
        color: colors.secondary,
        fontWeight: typography.fontWeight.medium,
    },
});

export default Projects;
