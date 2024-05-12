import { View, Text, Platform, StyleSheet, Alert } from 'react-native';
import React, { Fragment, useEffect, useState } from 'react';
import { useLocalSearchParams } from 'expo-router';
import { useAuth, useSignIn, useSignUp } from '@clerk/clerk-expo';
import {
    CodeField,
    Cursor,
    useBlurOnFulfill,
    useClearByFocusCell,
} from 'react-native-confirmation-code-field';
import { styles } from '@/constants/Styles';
import Message from '@/constants/Message';
import Colors from '@/constants/Colors';

export default function PhoneAuth() {
    const { phone, signin } = useLocalSearchParams<{
        phone: string;
        signin?: string;
    }>();
    const [code, setCode] = useState('');
    const SignIn = useSignIn();
    const SignUp = useSignUp();

    const CELL_COUNT = 6;
    const ref = useBlurOnFulfill({ value: code, cellCount: CELL_COUNT });
    const [props, getCellOnLayoutHandler] = useClearByFocusCell({
        value: code,
        setValue: setCode,
    });

    useEffect(() => {
        if (code.length === 6) {
            if (signin) {
                handleSignIn();
            } else {
                handleSignUp();
            }
        }
    }, [code]);

    const handleSignIn = async () => {
        const { isLoaded, signIn, setActive } = SignIn;

        if (!isLoaded) {
            return;
        }

        try {
            await signIn.attemptFirstFactor({ strategy: 'phone_code', code });
            await setActive({ session: signIn.createdSessionId });
        } catch (error) {
            Alert.alert('There was an error verifying your phone number.');
        }
    };

    const handleSignUp = async () => {
        const { isLoaded, signUp, setActive } = SignUp;

        if (!isLoaded) {
            return;
        }

        try {
            await signUp.attemptPhoneNumberVerification({ code });
            await setActive({ session: signUp.createdSessionId });
        } catch (error) {
            Alert.alert('There was an error verifying your phone number.');
        }
    };

    return (
        <View style={[styles.container, { paddingHorizontal: 30 }]}>
            <Text style={styles.title}>{Message.authTitle}</Text>
            <Text style={styles.description}>
                {Message.authDescription[0] +
                    phone +
                    Message.authDescription[1]}
            </Text>
            <View style={styles.inputContainer}>
                <CodeField
                    ref={ref}
                    {...props}
                    value={code}
                    onChangeText={setCode}
                    cellCount={CELL_COUNT}
                    rootStyle={localStyles.codeFieldRoot}
                    keyboardType="number-pad"
                    textContentType="oneTimeCode"
                    autoComplete={Platform.select({
                        android: 'sms-otp' as 'sms-otp',
                        default: 'one-time-code' as 'one-time-code',
                    })}
                    testID="my-code-input"
                    renderCell={({ index, symbol, isFocused }) => (
                        <Fragment key={index}>
                            <View
                                onLayout={getCellOnLayoutHandler(index)}
                                key={index}
                                style={[
                                    localStyles.cellRoot,
                                    isFocused && localStyles.focusCell,
                                ]}
                            >
                                <Text
                                    key={index}
                                    style={[
                                        localStyles.cell,
                                        isFocused && localStyles.focusCell,
                                    ]}
                                    onLayout={getCellOnLayoutHandler(index)}
                                >
                                    {symbol || (isFocused ? <Cursor /> : null)}
                                </Text>
                            </View>
                            {index === 2 ? (
                                <View
                                    key={`separator-${index}`}
                                    style={localStyles.separator}
                                />
                            ) : null}
                        </Fragment>
                    )}
                />
            </View>
        </View>
    );
}

const localStyles = StyleSheet.create({
    codeFieldRoot: { marginVertical: 20, marginHorizontal: 'auto', gap: 10 },
    cellRoot: {
        width: 45,
        height: 60,
        borderRadius: 8,
        backgroundColor: Colors.secondaryMuted,
        alignItems: 'center',
        justifyContent: 'center',
    },
    focusCell: { paddingBottom: 4 },
    cell: {
        fontSize: 36,
        textAlign: 'center',
    },
    separator: {
        height: 2,
        width: 12,
        backgroundColor: Colors.secondary,
        alignSelf: 'center',
    },
});
