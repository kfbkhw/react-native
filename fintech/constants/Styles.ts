import { StyleSheet } from 'react-native';
import Colors from '@/constants/Colors';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
        backgroundColor: Colors.light,
    },
    heading: {
        marginTop: 80,
        padding: 20,
        color: Colors.light,
        fontSize: 36,
        fontWeight: '900',
        textTransform: 'uppercase',
    },
    button: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 10,
        height: 60,
        borderRadius: 30,
    },
    buttonText: { fontSize: 22, fontWeight: '500' },
    buttonContainer: {
        flexDirection: 'row',
        gap: 10,
        marginBottom: 60,
        paddingHorizontal: 10,
    },
    title: {
        fontSize: 40,
        fontWeight: '700',
        color: Colors.dark,
    },
    description: {
        fontSize: 18,
        marginTop: 20,
        color: Colors.secondary,
    },
    inputContainer: { marginVertical: 40, flexDirection: 'row' },
    input: {
        marginRight: 10,
        padding: 20,
        borderRadius: 16,
        backgroundColor: Colors.secondaryMuted,
        color: Colors.dark,
        fontSize: 20,
    },
    linkText: {
        color: Colors.primary,
        fontSize: 18,
        fontWeight: '500',
    },
    enabled: { backgroundColor: Colors.primary },
    disabled: { backgroundColor: Colors.primaryMuted },
    video: {
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
    },
});
