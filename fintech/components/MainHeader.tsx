import { View, Text, StyleSheet } from 'react-native';
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Link } from 'expo-router';
import { BlurView } from 'expo-blur';
import { Ionicons } from '@expo/vector-icons';
import Colors from '@/constants/Colors';

export default function MainHeader() {
    const { top } = useSafeAreaInsets();

    return (
        <BlurView
            intensity={50}
            tint={'extraLight'}
            style={{ paddingTop: top }}
        >
            <View
                style={[
                    styles.flexCenter,
                    {
                        flexDirection: 'row',
                        gap: 10,
                        height: 60,
                        paddingHorizontal: 20,
                        backgroundColor: 'transparent',
                    },
                ]}
            >
                <Link
                    href={'/(user)/(modals)/account'}
                    style={[
                        styles.flexCenter,
                        {
                            width: 40,
                            height: 40,
                            borderRadius: 20,
                            backgroundColor: Colors.secondary,
                        },
                    ]}
                    asChild
                >
                    <TouchableOpacity>
                        <Text
                            style={{
                                fontSize: 16,
                                fontWeight: '500',
                                color: 'white',
                            }}
                        >
                            HK
                        </Text>
                    </TouchableOpacity>
                </Link>
                <View
                    style={[
                        styles.flexCenter,
                        {
                            flex: 1,
                            flexDirection: 'row',
                            borderRadius: 30,
                            backgroundColor: Colors.secondaryMuted,
                        },
                    ]}
                >
                    <Ionicons
                        name="search"
                        size={20}
                        color={Colors.dark}
                        style={{ padding: 10 }}
                    />
                    <TextInput
                        placeholder="Search"
                        placeholderTextColor={Colors.secondary}
                        style={{
                            flex: 1,
                            padding: 10,
                            paddingLeft: 0,
                            borderRadius: 30,
                            color: Colors.dark,
                            backgroundColor: Colors.secondaryMuted,
                        }}
                    />
                </View>
                <View style={styles.icon}>
                    <Ionicons
                        name={'stats-chart'}
                        size={20}
                        color={Colors.dark}
                    />
                </View>
                <View style={styles.icon}>
                    <Ionicons name={'card'} size={20} color={Colors.dark} />
                </View>
            </View>
        </BlurView>
    );
}

const styles = StyleSheet.create({
    flexCenter: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    icon: {
        alignItems: 'center',
        justifyContent: 'center',
        width: 40,
        height: 40,
        borderRadius: 30,
        backgroundColor: Colors.secondaryMuted,
    },
});
