import { View, Text, ScrollView, StyleSheet } from 'react-native';
import IconButton from '@/components/IconButton';
import { styles } from '@/constants/Styles';

export default function HomeScreen() {
    const BALANCE = 2530;
    const CURRENCY = '$';

    const handleAddMoney = () => {};
    const handleExchange = () => {};
    const handleDetails = () => {};
    const handleMore = () => {};

    return (
        <ScrollView style={styles.container}>
            <View style={localStyles.balance}>
                <Text style={localStyles.balanceText}>{BALANCE}</Text>
                <Text style={localStyles.balanceCurrency}>{CURRENCY}</Text>
            </View>
            <View style={localStyles.actions}>
                <IconButton
                    name="add"
                    text="Add money"
                    onPress={handleAddMoney}
                />
                <IconButton
                    name="repeat"
                    text="Exchange"
                    onPress={handleExchange}
                />
                <IconButton
                    name="list"
                    text="Details"
                    onPress={handleDetails}
                />
                <IconButton
                    name="ellipsis-horizontal"
                    text="More"
                    onPress={handleMore}
                />
            </View>
        </ScrollView>
    );
}

const localStyles = StyleSheet.create({
    balance: {
        paddingTop: 60,
        paddingBottom: 80,
        flexDirection: 'row',
        alignItems: 'flex-end',
        justifyContent: 'center',
        gap: 12,
    },
    balanceText: { fontSize: 50, fontWeight: '700' },
    balanceCurrency: { paddingBottom: 10, fontSize: 24, fontWeight: '500' },
    actions: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: 10,
    },
});
