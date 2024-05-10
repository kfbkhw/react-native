import { Link, Stack } from 'expo-router';
import { View, Text } from 'react-native';
import { defaultStyles } from '@/constants/Styles';

export default function NotFoundScreen() {
    return (
        <>
            <Stack.Screen options={{ title: 'Oops!' }} />
            <View style={defaultStyles.container}>
                <Text style={defaultStyles.title}>
                    This screen doesn't exist.
                </Text>

                <Link href="/" style={defaultStyles.link}>
                    <Text style={defaultStyles.linkText}>
                        Go to home screen!
                    </Text>
                </Link>
            </View>
        </>
    );
}
