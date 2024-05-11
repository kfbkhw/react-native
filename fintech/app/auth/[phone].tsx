import { View, Text } from 'react-native';
import React, { useEffect, useState } from 'react';
import { useLocalSearchParams } from 'expo-router';
import { useSignIn, useSignUp } from '@clerk/clerk-expo';

export default function PhoneAuth() {
    const { phone, signin } = useLocalSearchParams<{
        phone: string;
        signin?: string;
    }>();
    const [code, setCode] = useState('');
    const { isLoaded, signIn } = useSignIn();
    const { signUp, setActive } = useSignUp();

    useEffect(() => {
        if (code.length === 6) {
            if (signin) {
                verifySignIn();
            } else {
                verifyCode();
            }
        }
    }, [code]);

    const verifyCode = async () => {};
    const verifySignIn = async () => {};
    // const handleSignUp = async () => {};

    return (
        <View>
            <Text>PhoneAuth</Text>
        </View>
    );
}
