import { View, Text, TouchableOpacity } from 'react-native';
import { useAssets } from 'expo-asset';
import { ResizeMode, Video } from 'expo-av';
import { styles } from '@/constants/Styles';
import { Message } from '@/constants/Message';
import { Link } from 'expo-router';
import Colors from '@/constants/Colors';

export default function IndexScreen() {
    const [assets] = useAssets([require('@/assets/videos/intro.mp4')]);

    return (
        <View style={styles.container}>
            {assets && (
                <Video
                    isMuted
                    isLooping
                    shouldPlay
                    resizeMode={ResizeMode.COVER}
                    source={{ uri: assets[0].uri }}
                    style={styles.video}
                />
            )}
            <View>
                <Text style={styles.heading}>{Message.indexHeading}</Text>
            </View>
            <View style={styles.buttonContainer}>
                <Link
                    href={'/login'}
                    style={[styles.button, { backgroundColor: Colors.primary }]}
                    asChild
                >
                    <TouchableOpacity>
                        <Text
                            style={[styles.buttonText, { color: Colors.light }]}
                        >
                            {Message.indexButton1}
                        </Text>
                    </TouchableOpacity>
                </Link>
                <Link
                    href={'/signup'}
                    style={[styles.button, { backgroundColor: Colors.light }]}
                    asChild
                >
                    <TouchableOpacity>
                        <Text
                            style={[
                                styles.buttonText,
                                { color: Colors.primary },
                            ]}
                        >
                            {Message.indexButton2}
                        </Text>
                    </TouchableOpacity>
                </Link>
            </View>
        </View>
    );
}
