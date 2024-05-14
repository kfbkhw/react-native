import { View, Text, StyleSheet } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import Colors from '@/constants/Colors';
import type { Transaction } from '@/store/transactionStore';

interface TransactionItemProps {
    transaction: Transaction;
    currency: string;
}

export default function TransactionItem({
    transaction,
    currency,
}: TransactionItemProps) {
    return (
        <View key={transaction.id} style={styles.transaction}>
            <View style={styles.icon}>
                <Ionicons
                    name={transaction.amount > 0 ? 'add' : 'remove'}
                    size={24}
                    color={Colors.dark}
                />
            </View>
            <View style={{ flex: 1, gap: 4 }}>
                <Text
                    style={{
                        fontSize: 16,
                        fontWeight: '500',
                    }}
                >
                    {transaction.name}
                </Text>
                <Text style={{ fontSize: 12 }}>
                    {transaction.date.toLocaleString()}
                </Text>
            </View>
            <Text style={{ fontSize: 16, fontWeight: '500' }}>
                {transaction.amount + ' ' + currency}
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    transaction: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 20,
        width: '100%',
    },
    icon: {
        backgroundColor: Colors.secondaryMuted,
        width: 40,
        height: 40,
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center',
    },
});
