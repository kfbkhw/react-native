import { useEffect } from 'react';
import { TouchableOpacity } from 'react-native';
import 'react-native-reanimated';
import { Link, Stack, useRouter } from 'expo-router';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import Ionicons from '@expo/vector-icons/Ionicons';
import Colors from '@/constants/Colors';

export { ErrorBoundary } from 'expo-router';

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
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
            <Stack.Screen name="index" options={{ headerShown: false }} />
            <Stack.Screen
                name="signup"
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
                name="login"
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
                        <Link href={'/modal'} asChild>
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
            <Stack.Screen name="modal" options={{ presentation: 'modal' }} />
        </Stack>
    );
}
