import { View, Text } from 'react-native';
import React from 'react';
import { useLocalSearchParams } from 'expo-router';

export default function PhoneAuth() {
    const { phone } = useLocalSearchParams<{ phone: string }>();

    return (
        <View>
            <Text>PhoneAuth</Text>
        </View>
    );
}
