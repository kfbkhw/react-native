import { View, Text } from 'react-native';
import { defaultStyles } from '@/constants/Styles';

export default function TabTwoScreen() {
    return (
        <View style={defaultStyles.container}>
            <Text style={defaultStyles.title}>Tab Two</Text>
            <View style={defaultStyles.separator} />
        </View>
    );
}
