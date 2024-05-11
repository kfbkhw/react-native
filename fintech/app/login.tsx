import { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import Ionicons from '@expo/vector-icons/Ionicons';
import { styles } from '@/constants/Styles';
import Message from '@/constants/Message';
import Colors from '@/constants/Colors';

enum LoginType {
    Phone,
    Email,
    Google,
    Apple,
}

export default function LoginScreen() {
    const [countryCode, setCountryCode] = useState('+82');
    const [phoneNumber, setPhoneNumber] = useState('');

    const handleLogin = async (type: LoginType) => {
        if (type === LoginType.Phone) {
        } else if (type === LoginType.Email) {
        } else if (type === LoginType.Google) {
        } else if (type === LoginType.Apple) {
        }
    };

    return (
        <View style={[styles.container, { paddingHorizontal: 30 }]}>
            <Text style={styles.title}>{Message.loginTitle}</Text>
            <Text style={styles.description}>{Message.loginDescription}</Text>
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
                onPress={() => handleLogin(LoginType.Phone)}
            >
                <Text style={[styles.buttonText, { color: Colors.light }]}>
                    {Message.loginButton}
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
                onPress={() => handleLogin(LoginType.Email)}
            >
                <Ionicons name="mail" size={24} />
                <Text style={[styles.buttonText, { color: Colors.dark }]}>
                    {`${Message.loginButton} with email`}
                </Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={[
                    styles.button,
                    { marginTop: 20, backgroundColor: 'white' },
                ]}
                onPress={() => handleLogin(LoginType.Google)}
            >
                <Ionicons name="logo-google" size={24} />
                <Text style={[styles.buttonText, { color: Colors.dark }]}>
                    {`${Message.loginButton} with Google`}
                </Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={[
                    styles.button,
                    { marginTop: 20, backgroundColor: 'white' },
                ]}
                onPress={() => handleLogin(LoginType.Apple)}
            >
                <Ionicons name="logo-apple" size={24} />
                <Text style={[styles.buttonText, { color: Colors.dark }]}>
                    {`${Message.loginButton} with Apple`}
                </Text>
            </TouchableOpacity>
        </View>
    );
}
