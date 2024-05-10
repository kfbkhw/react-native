import { StyleSheet } from 'react-native';
import Colors from '@/constants/Colors';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-between',
        padding: 16,
        backgroundColor: Colors.light,
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    link: {
        marginTop: 15,
        paddingVertical: 15,
    },
    linkText: {
        fontSize: 14,
        color: Colors.primary,
    },
    separator: {
        marginVertical: 30,
        height: 1,
        width: '80%',
    },
    video: {
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
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
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        height: 60,
        borderRadius: 30,
    },
    buttonText: { fontSize: 22, fontWeight: '500' },
    buttonContainer: {
        display: 'flex',
        flexDirection: 'row',
        gap: 10,
        marginBottom: 60,
        paddingHorizontal: 10,
    },
});
