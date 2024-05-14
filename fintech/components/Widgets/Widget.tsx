import { StyleSheet, View, Text } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import { SIZE } from './config';
import { useTransactionStore } from '@/store/transactionStore';
import type { Widgets } from '@/app/(user)/(tabs)/home';
import Colors from '@/constants/Colors';

interface WidgetProps {
    id: Widgets;
    onLongPress: () => void;
}

export default function Widget({ id }: WidgetProps) {
    if (id === 'spent') {
        return <SpentWidget />;
    } else if (id === 'cashback') {
        return <CashbackWidget />;
    } else if (id === 'recent') {
        return <RecentWidget />;
    } else if (id === 'cards') {
        return <CardWidget />;
    }
}

const SpentWidget = () => {
    return (
        <View style={styles.container} pointerEvents="none">
            <Text
                style={{
                    color: Colors.secondary,
                    fontWeight: '500',
                    fontSize: 16,
                }}
            >
                Spent this month
            </Text>
            <Text
                style={{
                    color: Colors.dark,
                    fontWeight: 'bold',
                    fontSize: 26,
                    paddingTop: 10,
                }}
            >
                1465$
            </Text>
        </View>
    );
};

const CashbackWidget = () => {
    return (
        <View style={styles.container} pointerEvents="none">
            <View
                style={{
                    height: 70,
                    width: 70,
                    borderRadius: 35,
                    marginBottom: 6,
                    backgroundColor: Colors.primary,
                    alignItems: 'center',
                    justifyContent: 'center',
                }}
            >
                <Text
                    style={{ color: '#fff', fontWeight: '700', fontSize: 24 }}
                >
                    5%
                </Text>
            </View>
            <Text
                style={{
                    color: Colors.dark,
                    fontWeight: '700',
                    fontSize: 18,
                }}
            >
                Cashback
            </Text>
        </View>
    );
};

const CardWidget = () => {
    return (
        <View style={styles.container} pointerEvents="none">
            <Text
                style={{
                    color: Colors.dark,
                    fontWeight: '700',
                    fontSize: 20,
                }}
            >
                Cards
            </Text>
            <Ionicons name="card" size={60} color={Colors.primary} />
        </View>
    );
};

const RecentWidget = () => {
    const { transactions } = useTransactionStore();

    return (
        <View style={styles.container} pointerEvents="none">
            {transactions.length === 0 ? (
                <Text
                    style={{
                        color: Colors.dark,
                        fontWeight: '500',
                        fontSize: 22,
                    }}
                >
                    No transactions
                </Text>
            ) : (
                <>
                    <Text
                        style={{
                            color: Colors.secondary,
                            fontWeight: '400',
                            fontSize: 14,
                        }}
                    >
                        Recent transaction
                    </Text>
                    <Text
                        style={{
                            color: Colors.dark,
                            fontWeight: '700',
                            fontSize: 26,
                            paddingVertical: 6,
                        }}
                    >
                        {transactions[transactions.length - 1].amount}$
                    </Text>
                    <Text
                        style={{
                            color: Colors.secondary,
                            fontWeight: '500',
                            fontSize: 16,
                        }}
                    >
                        {transactions[transactions.length - 1].name}
                    </Text>
                </>
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        width: SIZE - 20,
        height: 150,
        backgroundColor: 'white',
        borderRadius: 20,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.25,
        shadowRadius: 2,
        elevation: 5,
        padding: 14,
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 6,
    },
});
