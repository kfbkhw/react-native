import { View, Text, ScrollView } from 'react-native';
import { useHeaderHeight } from '@react-navigation/elements';
import { type UseQueryResult, useQuery } from '@tanstack/react-query';
import type { Crypto } from '@/app/api/types/listings';
import Message from '@/constants/Message';
import { styles } from '@/constants/Styles';
import CryptoItem from '@/components/CryptoItem';

export default function CryptoScreen() {
    const headerHeight = useHeaderHeight();

    const cryptos: UseQueryResult<Crypto[]> = useQuery({
        queryKey: ['cryptos'],
        queryFn: () => fetch('/api/listings').then((res) => res.json()),
    });

    const ids = cryptos.data?.map((currency) => currency.id).join(',');

    const { data } = useQuery({
        queryKey: ['crypto-info', ids],
        queryFn: () => fetch(`/api/info?ids=${ids}`).then((res) => res.json()),
        enabled: !!ids,
    });

    return (
        <ScrollView
            style={styles.container}
            contentContainerStyle={{ paddingVertical: headerHeight }}
        >
            <Text style={styles.sectionTitle}>{Message.cryptoTitle}</Text>
            <View style={styles.sectionContent}>
                {cryptos.data?.map((crypto) => (
                    <CryptoItem
                        key={crypto.id}
                        crypto={crypto}
                        logo={data?.[crypto.id].logo}
                    />
                ))}
            </View>
        </ScrollView>
    );
}
