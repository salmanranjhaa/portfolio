import React from 'react';
import { StyleSheet, View, StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { LinearGradient } from 'expo-linear-gradient';
import { SafeAreaProvider } from 'react-native-safe-area-context';

// Import screen components
import HomeScreen from './src/screens/HomeScreen';
import AboutScreen from './src/screens/AboutScreen';
import ExperienceScreen from './src/screens/ExperienceScreen';
import ProjectsScreen from './src/screens/ProjectsScreen';
import SkillsScreen from './src/screens/SkillsScreen';
import EducationScreen from './src/screens/EducationScreen';
import ContactScreen from './src/screens/ContactScreen';

// Import custom drawer
import CustomDrawer from './src/components/CustomDrawer';

const Drawer = createDrawerNavigator();

export default function App() {
    return (
        <SafeAreaProvider>
            <View style={styles.container}>
                <StatusBar barStyle="light-content" backgroundColor="#0f0f1a" />

                {/* Background Gradient */}
                <LinearGradient
                    colors={['#0f0f1a', '#1a1a2e', '#0f0f1a']}
                    style={StyleSheet.absoluteFillObject}
                />

                <NavigationContainer>
                    <Drawer.Navigator
                        drawerContent={(props) => <CustomDrawer {...props} />}
                        screenOptions={{
                            headerStyle: {
                                backgroundColor: 'rgba(15, 15, 26, 0.95)',
                                borderBottomWidth: 1,
                                borderBottomColor: 'rgba(64, 224, 208, 0.2)',
                            },
                            headerTintColor: '#40E0D0',
                            headerTitleStyle: {
                                fontWeight: '600',
                                fontSize: 18,
                            },
                            drawerStyle: {
                                backgroundColor: 'rgba(26, 26, 46, 0.98)',
                                width: 280,
                            },
                            drawerActiveTintColor: '#40E0D0',
                            drawerInactiveTintColor: '#b0b0c3',
                            drawerActiveBackgroundColor: 'rgba(64, 224, 208, 0.1)',
                        }}
                    >
                        <Drawer.Screen
                            name="Home"
                            component={HomeScreen}
                            options={{ title: '🏠 Home' }}
                        />
                        <Drawer.Screen
                            name="About"
                            component={AboutScreen}
                            options={{ title: '👤 About Me' }}
                        />
                        <Drawer.Screen
                            name="Experience"
                            component={ExperienceScreen}
                            options={{ title: '💼 Experience' }}
                        />
                        <Drawer.Screen
                            name="Projects"
                            component={ProjectsScreen}
                            options={{ title: '🚀 Projects' }}
                        />
                        <Drawer.Screen
                            name="Skills"
                            component={SkillsScreen}
                            options={{ title: '⚡ Skills' }}
                        />
                        <Drawer.Screen
                            name="Education"
                            component={EducationScreen}
                            options={{ title: '🎓 Education' }}
                        />
                        <Drawer.Screen
                            name="Contact"
                            component={ContactScreen}
                            options={{ title: '📧 Contact' }}
                        />
                    </Drawer.Navigator>
                </NavigationContainer>
            </View>
        </SafeAreaProvider>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#0f0f1a',
    },
});
