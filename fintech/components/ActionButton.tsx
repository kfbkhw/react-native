import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import Colors from '@/constants/Colors';

interface ActionButtonProps {
    name: typeof Ionicons.defaultProps;
    text: string;
    onPress: () => void;
}

export default function ActionButton({
    name,
    text,
    onPress,
}: ActionButtonProps) {
    return (
        <TouchableOpacity style={styles.container} onPress={onPress}>
            <View style={styles.button}>
                <Ionicons name={name} size={30} color={Colors.dark} />
            </View>
            <Text style={styles.label}>{text}</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        gap: 10,
    },
    button: {
        width: 60,
        height: 60,
        borderRadius: 30,
        backgroundColor: Colors.secondaryMuted,
        alignItems: 'center',
        justifyContent: 'center',
    },
    label: {
        fontSize: 16,
        fontWeight: '500',
        color: Colors.dark,
    },
});
