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
        fontSize: 36,
        fontWeight: '900',
        color: Colors.light,
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
        marginTop: 20,
        fontSize: 18,
        color: Colors.secondary,
    },
    inputContainer: { flexDirection: 'row', marginVertical: 40 },
    input: {
        marginRight: 10,
        padding: 20,
        borderRadius: 16,
        fontSize: 20,
        color: Colors.dark,
        backgroundColor: Colors.secondaryMuted,
    },
    linkText: {
        fontSize: 18,
        fontWeight: '500',
        color: Colors.primary,
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
    sectionContainer: { marginTop: 40 },
    sectionTitle: { fontSize: 28, fontWeight: '700', color: Colors.dark },
    sectionContent: {
        alignItems: 'center',
        justifyContent: 'center',
        gap: 18,
        marginVertical: 10,
        paddingVertical: 18,
        paddingHorizontal: 18,
        borderRadius: 12,
        backgroundColor: 'white',
    },
});
