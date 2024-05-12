import { useEffect } from 'react';
import { TouchableOpacity } from 'react-native';
import 'react-native-reanimated';
import { ClerkProvider } from '@clerk/clerk-expo';
import * as SecureStore from 'expo-secure-store';
import { Link, Stack, useRouter } from 'expo-router';
import { useFonts } from 'expo-font';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import * as SplashScreen from 'expo-splash-screen';
import Ionicons from '@expo/vector-icons/Ionicons';
import Colors from '@/constants/Colors';

export { ErrorBoundary } from 'expo-router';

SplashScreen.preventAutoHideAsync();

const CLERK_KEY = process.env.EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY;

const tokenCache = {
    async getToken(key: string) {
        try {
            return SecureStore.getItemAsync(key);
        } catch (error) {
            return null;
        }
    },
    async saveToken(key: string, value: string) {
        try {
            return SecureStore.setItemAsync(key, value);
        } catch (error) {
            return;
        }
    },
};

export default function RootLayout() {
    return (
        <ClerkProvider publishableKey={CLERK_KEY!} tokenCache={tokenCache}>
            <GestureHandlerRootView>
                <Layout />
            </GestureHandlerRootView>
        </ClerkProvider>
    );
}

function Layout() {
    const [loaded, error] = useFonts({
        SpaceMono: require('@/assets/fonts/SpaceMono-Regular.ttf'),
    });
    const router = useRouter();

    useEffect(() => {
        if (error) throw error;
    }, [error]);

    useEffect(() => {
        if (loaded) {
            SplashScreen.hideAsync();
        }
    }, [loaded]);

    if (!loaded) {
        return null;
    }

    return (
        <Stack>
            <Stack.Screen
                name="/(index)/(tabs)/home"
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="/(index)/(tabs)/signup"
                options={{
                    title: '',
                    headerTitle: '',
                    headerBackTitle: '',
                    headerShadowVisible: false,
                    headerStyle: { backgroundColor: Colors.light },
                    headerLeft: () => (
                        <TouchableOpacity
                            style={{ paddingHorizontal: 10 }}
                            disabled={!router.canGoBack()}
                            onPress={() => router.back()}
                        >
                            <Ionicons
                                name="arrow-back-outline"
                                size={30}
                                color={
                                    router.canGoBack()
                                        ? Colors.dark
                                        : Colors.secondaryMuted
                                }
                            />
                        </TouchableOpacity>
                    ),
                }}
            />
            <Stack.Screen
                name="/(index)/(tabs)/signin"
                options={{
                    title: '',
                    headerTitle: '',
                    headerBackTitle: '',
                    headerShadowVisible: false,
                    headerStyle: { backgroundColor: Colors.light },
                    headerLeft: () => (
                        <TouchableOpacity
                            style={{ paddingHorizontal: 10 }}
                            disabled={!router.canGoBack()}
                            onPress={() => router.back()}
                        >
                            <Ionicons
                                name="arrow-back-outline"
                                size={30}
                                color={
                                    router.canGoBack()
                                        ? Colors.dark
                                        : Colors.secondaryMuted
                                }
                            />
                        </TouchableOpacity>
                    ),
                    headerRight: () => (
                        <Link href={'/(index)/(modals)/modal'} asChild>
                            <TouchableOpacity style={{ paddingHorizontal: 10 }}>
                                <Ionicons
                                    name="help-circle-outline"
                                    size={30}
                                    color={
                                        router.canGoBack()
                                            ? Colors.dark
                                            : Colors.secondaryMuted
                                    }
                                />
                            </TouchableOpacity>
                        </Link>
                    ),
                }}
            />
            <Stack.Screen
                name="/(index)/(modals)/modal"
                options={{ presentation: 'modal' }}
            />
            <Stack.Screen
                name="auth/[phone]"
                options={{
                    title: '',
                    headerTitle: '',
                    headerBackTitle: '',
                    headerShadowVisible: false,
                    headerStyle: { backgroundColor: Colors.light },
                    headerLeft: () => (
                        <TouchableOpacity
                            style={{ paddingHorizontal: 10 }}
                            disabled={!router.canGoBack()}
                            onPress={() => router.back()}
                        >
                            <Ionicons
                                name="arrow-back-outline"
                                size={30}
                                color={
                                    router.canGoBack()
                                        ? Colors.dark
                                        : Colors.secondaryMuted
                                }
                            />
                        </TouchableOpacity>
                    ),
                }}
            />
        </Stack>
    );
}
