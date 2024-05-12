import Colors from '@/constants/Colors';
import { Ionicons } from '@expo/vector-icons';
import { Tabs } from 'expo-router';

export default function UserLayout() {
    return (
        <Tabs
            screenOptions={{
                tabBarActiveTintColor: Colors.primary,
                tabBarStyle: {
                    height: 90,
                    paddingHorizontal: 10,
                    paddingVertical: 12,
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
