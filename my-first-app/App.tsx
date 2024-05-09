import { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default function App() {
    const [number, setNumber] = useState<number>(0);

    const handleDecrement = () => {
        const newNumber = number - 1;
        setNumber(newNumber);
    };

    const handleIncrement = () => {
        const newNumber = number + 1;
        setNumber(newNumber);
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Counter</Text>
            <View style={styles.buttonContainer}>
                <TouchableOpacity
                    onPress={handleDecrement}
                    style={styles.button}
                >
                    <Text style={styles.buttonText}>-</Text>
                </TouchableOpacity>
                <Text style={styles.content}>{number}</Text>
                <TouchableOpacity
                    onPress={handleIncrement}
                    style={styles.button}
                >
                    <Text style={styles.buttonText}>+</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 60,
        backgroundColor: '#fff',
    },
    title: {
        fontSize: 30,
        fontWeight: 'bold',
    },
    buttonContainer: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 40,
    },
    content: { fontSize: 50 },
    button: {
        alignItems: 'center',
        backgroundColor: '#75A47F',
        padding: 6,
        paddingHorizontal: 20,
        borderRadius: 6,
    },
    buttonText: { fontSize: 30, color: '#fff' },
});
