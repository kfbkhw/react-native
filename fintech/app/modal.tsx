import { View, Text } from 'react-native';
import { defaultStyles } from '@/constants/Styles';

export default function ModalScreen() {
    return (
        <View style={defaultStyles.container}>
            <Text style={defaultStyles.title}>Modal</Text>
            <View style={defaultStyles.separator} />
        </View>
    );
}
