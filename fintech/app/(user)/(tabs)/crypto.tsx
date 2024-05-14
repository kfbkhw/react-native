import { View, Text } from 'react-native';
import { useQuery } from '@tanstack/react-query';
import type { Currency } from '@/app/api/types/crypto';

export default function CryptoScreen() {
    const currencies = useQuery({
        queryKey: ['currencies'],
        queryFn: () => fetch('/api/listings').then((res) => res.json()),
    });

    return (
        <View>
            {currencies.data?.map((currency: Currency) => (
                <Text key={currency.id}>{currency.name}</Text>
            ))}
        </View>
    );
}
