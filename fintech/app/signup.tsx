import { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { Link } from 'expo-router';
import { styles } from '@/constants/Styles';
import Message from '@/constants/Message';
import Colors from '@/constants/Colors';

export default function SignupScreen() {
    const [countryCode, setCountryCode] = useState('+82');
    const [phoneNumber, setPhoneNumber] = useState('');

    const handleSignup = async () => {};

    return (
        <View style={[styles.container, { paddingHorizontal: 30 }]}>
            <Text style={styles.title}>{Message.signupTitle}</Text>
            <Text style={styles.description}>{Message.signupDescription}</Text>
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
                        {Message.signupHaveAccount}
                    </Text>
                </TouchableOpacity>
            </Link>
            <TouchableOpacity
                style={[
                    styles.button,
                    phoneNumber !== '' ? styles.enabled : styles.disabled,
                    { marginTop: 40 },
                ]}
                onPress={handleSignup}
            >
                <Text style={[styles.buttonText, { color: Colors.light }]}>
                    {Message.indexButton2}
                </Text>
            </TouchableOpacity>
        </View>
    );
}
