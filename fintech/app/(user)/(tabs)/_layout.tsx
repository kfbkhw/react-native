import { Tabs } from 'expo-router';
import { BlurView } from 'expo-blur';
import { Ionicons } from '@expo/vector-icons';
import UserHomeHeader from '@/components/UserHomeHeader';
import Colors from '@/constants/Colors';

export default function UserLayout() {
    return (
        <Tabs
            screenOptions={{
                tabBarActiveTintColor: Colors.primary,
                tabBarBackground: () => (
                    <BlurView
                        intensity={100}
                        tint={'extraLight'}
                        style={{
                            flex: 1,
                            backgroundColor: 'rgba(0,0,0,0.05)',
                        }}
                    />
                ),
                tabBarStyle: {
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    right: 0,
                    height: 90,
                    paddingHorizontal: 10,
                    paddingVertical: 12,
                    backgroundColor: 'transparent',
                },
            }}
        >
            <Tabs.Screen
                name="home"
                options={{
                    title: 'Home',
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons
                            name="home-outline"
                            size={size}
                            color={color}
                        />
                    ),
                    header: () => <UserHomeHeader />,
                    headerTransparent: true,
                }}
            />
            <Tabs.Screen
                name="transfer"
                options={{
                    title: 'Transfers',
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons
                            name="swap-horizontal-outline"
                            size={size}
                            color={color}
                        />
                    ),
                }}
            />
            <Tabs.Screen
                name="invest"
                options={{
                    title: 'Invest',
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons
                            name="trending-up-outline"
                            size={size}
                            color={color}
                        />
                    ),
                }}
            />
            <Tabs.Screen
                name="crypto"
                options={{
                    title: 'Crypto',
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons
                            name="logo-bitcoin"
                            size={size}
                            color={color}
                        />
                    ),
                }}
            />
        </Tabs>
    );
}
