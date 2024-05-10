import { View, Text } from 'react-native';
import { defaultStyles } from '@/constants/Styles';

export default function TabOneScreen() {
    return (
        <View style={defaultStyles.container}>
            <Text style={defaultStyles.title}>Tab One</Text>
            <View style={defaultStyles.separator} />
        </View>
    );
}
