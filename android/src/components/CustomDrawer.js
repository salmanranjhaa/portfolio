import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    ScrollView,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { LinearGradient } from 'expo-linear-gradient';
import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';
import { colors, typography, spacing } from '../styles/theme';

const CustomDrawer = (props) => {
    return (
        <SafeAreaView style={styles.container} edges={['top', 'left', 'right']}>
            {/* Header with Gradient */}
            <LinearGradient
                colors={colors.gradients.primary}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 1 }}
                style={styles.header}
            >
                <View style={styles.avatarContainer}>
                    <LinearGradient
                        colors={['#0f0f1a', '#1a1a2e']}
                        style={styles.avatar}
                    >
                        <Text style={styles.avatarText}>SR</Text>
                    </LinearGradient>
                </View>
                <Text style={styles.name}>Salman Ranjha</Text>
                <Text style={styles.title}>Data Scientist & AI Engineer</Text>
            </LinearGradient>

            {/* Drawer Items */}
            <DrawerContentScrollView
                {...props}
                contentContainerStyle={styles.drawerContent}
                showsVerticalScrollIndicator={false}
            >
                <DrawerItemList {...props} />
            </DrawerContentScrollView>

            {/* Footer */}
            <View style={styles.footer}>
                <Text style={styles.footerText}>© 2026 Salman Ranjha</Text>
                <Text style={styles.version}>v1.0.0</Text>
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'rgba(26, 26, 46, 0.98)',
    },
    header: {
        padding: spacing.xl,
        paddingTop: spacing.md,
        borderBottomWidth: 1,
        borderBottomColor: 'rgba(64, 224, 208, 0.2)',
    },
    avatarContainer: {
        alignItems: 'center',
        marginBottom: spacing.md,
    },
    avatar: {
        width: 80,
        height: 80,
        borderRadius: 40,
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 3,
        borderColor: 'rgba(255, 255, 255, 0.9)',
    },
    avatarText: {
        fontSize: 32,
        fontWeight: typography.fontWeight.bold,
        color: colors.primary,
    },
    name: {
        fontSize: typography.fontSize['2xl'],
        fontWeight: typography.fontWeight.bold,
        color: colors.text,
        textAlign: 'center',
        marginBottom: spacing.xs,
    },
    title: {
        fontSize: typography.fontSize.sm,
        color: colors.textSecondary,
        textAlign: 'center',
    },
    drawerContent: {
        paddingTop: spacing.md,
    },
    footer: {
        padding: spacing.lg,
        borderTopWidth: 1,
        borderTopColor: 'rgba(64, 224, 208, 0.2)',
        alignItems: 'center',
    },
    footerText: {
        fontSize: typography.fontSize.xs,
        color: colors.textMuted,
        marginBottom: spacing.xs,
    },
    version: {
        fontSize: typography.fontSize.xs,
        color: colors.primary,
    },
});

export default CustomDrawer;
