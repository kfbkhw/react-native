import { useState } from 'react';
import { View, Text, TouchableOpacity, Alert } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import { useRouter } from 'expo-router';
import { useSignIn } from '@clerk/clerk-expo';
import Ionicons from '@expo/vector-icons/Ionicons';
import { styles } from '@/constants/Styles';
import Message from '@/constants/Message';
import Colors from '@/constants/Colors';

enum SignInType {
    Phone,
    Email,
    Google,
    Apple,
}

export default function SignInScreen() {
    const [countryCode, setCountryCode] = useState('+82');
    const [phoneNumber, setPhoneNumber] = useState('');
    const { isLoaded, signIn } = useSignIn();
    const { push } = useRouter();

    const handleSignIn = (type: SignInType) => {
        if (type === SignInType.Phone) {
            handlePhoneSignIn();
        } else if (type === SignInType.Email) {
            handleEmailSignIn();
        } else if (type === SignInType.Google) {
            handleGoogleSignIn();
        } else if (type === SignInType.Apple) {
            handleAppleSignIn();
        }
    };

    const handlePhoneSignIn = async () => {
        if (!isLoaded) {
            return;
        }

        let number = phoneNumber;
        if (countryCode === '+82' && phoneNumber.startsWith('0')) {
            number = phoneNumber.slice(1);
        }
        const fullPhoneNumber = `${countryCode}${number}`;

        try {
            const { supportedFirstFactors } = await signIn.create({
                identifier: fullPhoneNumber,
            });

            const phoneFactor: any = supportedFirstFactors.find(
                (factor) => factor.strategy === 'phone_code'
            );
            const { phoneNumberId } = phoneFactor!;

            await signIn.prepareFirstFactor({
                strategy: 'phone_code',
                phoneNumberId,
            });

            push({
                pathname: '/auth/[phone]',
                params: { phone: fullPhoneNumber, signin: 'true' },
            });
        } catch (error) {
            Alert.alert('There was an error signing in.');
        }
    };

    const handleEmailSignIn = async () => {};
    const handleGoogleSignIn = async () => {};
    const handleAppleSignIn = async () => {};

    return (
        <View style={[styles.container, { paddingHorizontal: 30 }]}>
            <Text style={styles.title}>{Message.signInTitle}</Text>
            <Text style={styles.description}>{Message.signInDescription}</Text>
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
            <TouchableOpacity
                style={[
                    styles.button,
                    phoneNumber !== '' ? styles.enabled : styles.disabled,
                ]}
                onPress={() => handleSignIn(SignInType.Phone)}
            >
                <Text style={[styles.buttonText, { color: Colors.light }]}>
                    {Message.signInButton}
                </Text>
            </TouchableOpacity>
            <View
                style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    gap: 16,
                    paddingVertical: 25,
                }}
            >
                <View
                    style={{
                        flex: 1,
                        height: 0.5,
                        backgroundColor: Colors.secondary,
                    }}
                />
                <Text
                    style={{
                        color: Colors.secondary,
                        fontSize: 20,
                    }}
                >
                    or
                </Text>
                <View
                    style={{
                        flex: 1,
                        height: 0.5,
                        backgroundColor: Colors.secondary,
                    }}
                />
            </View>
            <TouchableOpacity
                style={[styles.button, { backgroundColor: 'white' }]}
                onPress={() => handleSignIn(SignInType.Email)}
            >
                <Ionicons name="mail" size={24} />
                <Text style={[styles.buttonText, { color: Colors.dark }]}>
                    {`${Message.signInButton} with email`}
                </Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={[
                    styles.button,
                    { marginTop: 20, backgroundColor: 'white' },
                ]}
                onPress={() => handleSignIn(SignInType.Google)}
            >
                <Ionicons name="logo-google" size={24} />
                <Text style={[styles.buttonText, { color: Colors.dark }]}>
                    {`${Message.signInButton} with Google`}
                </Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={[
                    styles.button,
                    { marginTop: 20, backgroundColor: 'white' },
                ]}
                onPress={() => handleSignIn(SignInType.Apple)}
            >
                <Ionicons name="logo-apple" size={24} />
                <Text style={[styles.buttonText, { color: Colors.dark }]}>
                    {`${Message.signInButton} with Apple`}
                </Text>
            </TouchableOpacity>
        </View>
    );
}
