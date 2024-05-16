import { useEffect, useState } from 'react';
import { TouchableOpacity, Text, View } from 'react-native';
import 'react-native-reanimated';
import { ClerkProvider, useAuth } from '@clerk/clerk-expo';
import * as SecureStore from 'expo-secure-store';
import { Link, Stack, useRouter, useSegments } from 'expo-router';
import { useFonts } from 'expo-font';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import * as SplashScreen from 'expo-splash-screen';
import Ionicons from '@expo/vector-icons/Ionicons';
import Colors from '@/constants/Colors';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
const queryClient = new QueryClient();

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
            <QueryClientProvider client={queryClient}>
                <GestureHandlerRootView>
                    <Layout />
                </GestureHandlerRootView>
            </QueryClientProvider>
        </ClerkProvider>
    );
}

function Layout() {
    const [loaded, error] = useFonts({
        SpaceMono: require('@/assets/fonts/SpaceMono-Regular.ttf'),
    });
    const router = useRouter();
    const { isLoaded, isSignedIn } = useAuth();
    const segments = useSegments();
    const [star, setStar] = useState(false);
    const [notify, setNotify] = useState(false);

    useEffect(() => {
        if (error) throw error;
    }, [error]);

    useEffect(() => {
        if (loaded) {
            SplashScreen.hideAsync();
        }
    }, [loaded]);

    useEffect(() => {
        if (!isLoaded) {
            return;
        }

        const isInUser = segments[0] === '(user)';

        if (isSignedIn && !isInUser) {
            router.replace('/(user)/(tabs)/home');
        } else if (!isSignedIn && isInUser) {
            router.replace('/(index)/(tabs)/home');
        }
    }, [isSignedIn]);

    if (!loaded || !isLoaded) {
        return <Text>Loading...</Text>;
    }

    return (
        <Stack>
            <Stack.Screen
                name="(index)/(tabs)/home"
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="(index)/(tabs)/signup"
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
                                name="arrow-back"
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
                name="(index)/(tabs)/signin"
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
                                name="arrow-back"
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
                        <Link href={'(index)/(modals)/help'} asChild>
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
                name="(index)/(modals)/help"
                options={{ presentation: 'modal', title: 'Help' }}
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
                                name="arrow-back"
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
                name="(user)/(tabs)"
                options={{
                    headerShown: false,
                }}
            />
            <Stack.Screen
                name="(user)/(modals)/account"
                options={{ presentation: 'modal', title: 'Account' }}
            />
            <Stack.Screen
                name="(user)/crypto/[id]"
                options={{
                    title: '',
                    headerLeft: () => (
                        <TouchableOpacity
                            disabled={!router.canGoBack()}
                            onPress={() => router.back()}
                        >
                            <Ionicons
                                name="arrow-back"
                                size={26}
                                color={
                                    router.canGoBack()
                                        ? Colors.dark
                                        : Colors.secondaryMuted
                                }
                            />
                        </TouchableOpacity>
                    ),
                    headerLargeTitle: true,
                    headerTransparent: true,
                    headerRight: () => (
                        <View
                            style={{
                                flexDirection: 'row',
                                gap: 20,
                                paddingVertical: 8,
                            }}
                        >
                            <TouchableOpacity onPress={() => setStar(!star)}>
                                <Ionicons
                                    name={star ? 'star' : 'star-outline'}
                                    color={star ? Colors.primary : Colors.dark}
                                    size={26}
                                />
                            </TouchableOpacity>
                            <TouchableOpacity
                                onPress={() => setNotify(!notify)}
                            >
                                <Ionicons
                                    name={
                                        notify
                                            ? 'notifications'
                                            : 'notifications-outline'
                                    }
                                    color={
                                        notify ? Colors.primary : Colors.dark
                                    }
                                    size={26}
                                />
                            </TouchableOpacity>
                        </View>
                    ),
                }}
            />
        </Stack>
    );
}
