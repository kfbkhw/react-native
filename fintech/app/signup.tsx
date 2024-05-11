import { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import { Link, useRouter } from 'expo-router';
import { styles } from '@/constants/Styles';
import Message from '@/constants/Message';
import Colors from '@/constants/Colors';

export default function SignUpScreen() {
    const [countryCode, setCountryCode] = useState('+82');
    const [phoneNumber, setPhoneNumber] = useState('');
    const { push } = useRouter();

    const handleSignUp = () => {
        const fullPhoneNumber = countryCode + phoneNumber;
        push({
            pathname: '/auth/[phone]',
            params: { phone: fullPhoneNumber },
        });
    };

    return (
        <View style={[styles.container, { paddingHorizontal: 30 }]}>
            <Text style={styles.title}>{Message.signUpTitle}</Text>
            <Text style={styles.description}>{Message.signUpDescription}</Text>
            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.input}
                    placeholderTextColor={Colors.secondary}
                    placeholder="country code"
                    keyboardType="numeric"
                    value={countryCode}
                    onChangeText={setCountryCode}
                />
                <TextInput
                    style={[styles.input, { flex: 1 }]}
                    placeholderTextColor={Colors.secondary}
                    placeholder="mobile number"
                    keyboardType="numeric"
                    value={phoneNumber}
                    onChangeText={setPhoneNumber}
                />
            </View>
            <Link href={'/login'} replace asChild>
                <TouchableOpacity>
                    <Text style={styles.linkText}>
                        {Message.signUpHaveAccount}
                    </Text>
                </TouchableOpacity>
            </Link>
            <TouchableOpacity
                style={[
                    styles.button,
                    phoneNumber !== '' ? styles.enabled : styles.disabled,
                    { marginTop: 40 },
                ]}
                onPress={handleSignUp}
            >
                <Text style={[styles.buttonText, { color: Colors.light }]}>
                    {Message.indexButton2}
                </Text>
            </TouchableOpacity>
        </View>
    );
}
