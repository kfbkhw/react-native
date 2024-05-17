import {
    View,
    Text,
    SectionList,
    StyleSheet,
    Image,
    TouchableOpacity,
    ScrollView,
} from 'react-native';
import { CartesianChart, Line } from 'victory-native';
import Colors from '@/constants/Colors';
import { useFont } from '@shopify/react-native-skia';

export default function CryptoChart({ tickers }: { tickers: any[] }) {
    const font = useFont(require('@/assets/fonts/Inter-Regular.ttf'), 10);

    return (
        <View
            style={{
                height: 400,
                marginHorizontal: 20,
                marginTop: 20,
                padding: 14,
                paddingLeft: 8,
                paddingBottom: 16,
                borderRadius: 16,
                backgroundColor: Colors.white,
            }}
        >
            <CartesianChart
                axisOptions={{
                    font,
                    tickCount: 5,
                    labelOffset: { x: -2, y: 0 },
                    labelPosition: { x: 'outset', y: 'outset' },
                    labelColor: Colors.secondary,
                    formatYLabel: (v) => `${v}$   `,
                    formatXLabel: (ms) => {
                        const date = new Date(ms);
                        const year = date.getFullYear().toString().slice(2);
                        const month = (date.getMonth() + 1)
                            .toString()
                            .padStart(2, '0');
                        return `${month}/${year}`;
                    },
                }}
                domainPadding={{ top: 20, bottom: 20 }}
                data={tickers!}
                xKey="timestamp"
                yKeys={['price']}
                children={({ points }) => (
                    <Line
                        points={points.price}
                        color={Colors.primary}
                        strokeWidth={3}
                    />
                )}
            />
        </View>
    );
}
