import {
    View,
    Text,
    ScrollView,
    StyleSheet,
    TouchableOpacity,
} from 'react-native';
import { useHeaderHeight } from '@react-navigation/elements';
import { Transaction, useTransactionStore } from '@/store/transactionStore';
import { styles } from '@/constants/Styles';
import Message from '@/constants/Message';
import Colors from '@/constants/Colors';
import ActionButton from '@/components/ActionButton';
import TransactionItem from '@/components/TransactionItem';
import WidgetContainer from '@/components/homeWidgets/WidgetContainer';
import Widget from '@/components/homeWidgets/Widget';

const widgets = ['spent', 'cashback', 'cards', 'recent'] as const;
export type Widgets = (typeof widgets)[number];

export default function HomeScreen() {
    const CURRENCY = '$';
    const headerHeight = useHeaderHeight();
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

    const handleExchange = () => {
        clear();
    };
    const handleDetails = () => {};
    const handleMore = () => {};

    return (
        <ScrollView
            style={styles.container}
            contentContainerStyle={{ paddingVertical: headerHeight }}
        >
            <View style={localStyles.balance}>
                <Text style={localStyles.balanceText}>{getBalance()}</Text>
                <Text style={localStyles.balanceCurrency}>{CURRENCY}</Text>
            </View>
            <View style={localStyles.actions}>
                <ActionButton
                    name="add"
                    text={Message.homeAction1}
                    onPress={handleAddMoney}
                />
                <ActionButton
                    name="repeat"
                    text={Message.homeAction2}
                    onPress={handleExchange}
                />
                <ActionButton
                    name="list"
                    text={Message.homeAction3}
                    onPress={handleDetails}
                />
                <ActionButton
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
                                    key={transaction.id}
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
                                        key={transaction.id}
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
            <View style={styles.sectionContainer}>
                <Text style={styles.sectionTitle}>{Message.homeSection2}</Text>
                <View style={{ marginVertical: 16 }}>
                    <WidgetContainer editing={true}>
                        {widgets.map((widget) => (
                            <Widget
                                onLongPress={() => true}
                                key={widget}
                                id={widget}
                            />
                        ))}
                    </WidgetContainer>
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
        marginBottom: 30,
    },
});
