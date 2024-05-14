import {
    View,
    Text,
    ScrollView,
    StyleSheet,
    TouchableOpacity,
} from 'react-native';
import { Transaction, useTransactionStore } from '@/store/transactionStore';
import { styles } from '@/constants/Styles';
import Message from '@/constants/Message';
import IconButton from '@/components/IconButton';
import TransactionItem from '@/components/TransactionItem';
import Colors from '@/constants/Colors';

export default function HomeScreen() {
    const CURRENCY = '$';
    const { transactions, getBalance, add, clear } = useTransactionStore();

    const handleAddMoney = () => {
        const amount =
            Math.floor(Math.random() * 1000) * (Math.random() > 0.5 ? 1 : -1);
        const transaction: Transaction = {
            id: Math.random().toString(),
            name: amount > 0 ? 'Deposit' : 'Withdrawal',
            amount,
            date: new Date(),
        };

        add(transaction);
    };

    const handleExchange = () => {};
    const handleDetails = () => {};
    const handleMore = () => {
        clear();
    };

    return (
        <ScrollView style={styles.container}>
            <View style={localStyles.balance}>
                <Text style={localStyles.balanceText}>{getBalance()}</Text>
                <Text style={localStyles.balanceCurrency}>{CURRENCY}</Text>
            </View>
            <View style={localStyles.actions}>
                <IconButton
                    name="add"
                    text={Message.homeAction1}
                    onPress={handleAddMoney}
                />
                <IconButton
                    name="repeat"
                    text={Message.homeAction2}
                    onPress={handleExchange}
                />
                <IconButton
                    name="list"
                    text={Message.homeAction3}
                    onPress={handleDetails}
                />
                <IconButton
                    name="ellipsis-horizontal"
                    text={Message.homeAction4}
                    onPress={handleMore}
                />
            </View>
            <View style={styles.sectionContainer}>
                <Text style={styles.sectionTitle}>{Message.homeSection1}</Text>
                <View style={styles.sectionContent}>
                    {transactions.length === 0 ? (
                        <Text style={{ marginVertical: 10, fontSize: 18 }}>
                            {Message.homeNoTransaction}
                        </Text>
                    ) : transactions.length < 5 ? (
                        transactions
                            .toReversed()
                            .map((transaction) => (
                                <TransactionItem
                                    transaction={transaction}
                                    currency={CURRENCY}
                                />
                            ))
                    ) : (
                        <>
                            {transactions
                                .toReversed()
                                .slice(0, 4)
                                .map((transaction) => (
                                    <TransactionItem
                                        transaction={transaction}
                                        currency={CURRENCY}
                                    />
                                ))}
                            <TouchableOpacity style={{ width: '100%' }}>
                                <View
                                    style={{
                                        paddingTop: 10,
                                        borderTopWidth: 0.5,
                                        borderColor: Colors.secondaryMuted,
                                    }}
                                >
                                    <Text style={{ textAlign: 'center' }}>
                                        {Message.viewMore}
                                    </Text>
                                </View>
                            </TouchableOpacity>
                        </>
                    )}
                </View>
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
