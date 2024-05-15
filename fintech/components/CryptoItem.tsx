import { View, Text, Image, TouchableOpacity } from 'react-native';
import { Link } from 'expo-router';
import Colors from '@/constants/Colors';
import Ionicons from '@expo/vector-icons/Ionicons';
import type { Crypto } from '@/app/api/types/crypto';

interface CryptoItemProps {
    crypto: Crypto;
    logo: string;
}

export default function CryptoItem({ crypto, logo }: CryptoItemProps) {
    return (
        <Link href={`/crypto/${crypto.id}`} key={crypto.id} asChild>
            <TouchableOpacity
                style={{ flexDirection: 'row', gap: 14, alignItems: 'center' }}
            >
                <Image
                    source={{ uri: logo }}
                    style={{ width: 40, height: 40 }}
                />
                <View style={{ flex: 1, gap: 6 }}>
                    <Text style={{ fontWeight: '600', color: Colors.dark }}>
                        {crypto.name}
                    </Text>
                    <Text style={{ color: Colors.secondary }}>
                        {crypto.symbol}
                    </Text>
                </View>
                <View style={{ gap: 6, alignItems: 'flex-end' }}>
                    <Text>{crypto.quote.USD.price.toFixed(2) + ' $'}</Text>
                    <View style={{ flexDirection: 'row', gap: 4 }}>
                        <Ionicons
                            name={
                                crypto.quote.USD.percent_change_1h > 0
                                    ? 'caret-up'
                                    : 'caret-down'
                            }
                            size={16}
                            color={
                                crypto.quote.USD.percent_change_1h > 0
                                    ? 'green'
                                    : 'red'
                            }
                        />
                        <Text
                            style={{
                                color:
                                    crypto.quote.USD.percent_change_1h > 0
                                        ? 'green'
                                        : 'red',
                            }}
                        >
                            {crypto.quote.USD.percent_change_1h.toFixed(2)} %
                        </Text>
                    </View>
                </View>
            </TouchableOpacity>
        </Link>
    );
}
