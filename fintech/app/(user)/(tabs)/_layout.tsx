import { Tabs } from 'expo-router';

export default function Layout() {
    return (
        <Tabs>
            <Tabs.Screen name="home" options={{ title: 'Home' }} />
            <Tabs.Screen name="transfer" options={{ title: 'Transfers' }} />
            <Tabs.Screen name="invest" options={{ title: 'Invest' }} />
            <Tabs.Screen name="crypto" options={{ title: 'Crypto' }} />
        </Tabs>
    );
}
