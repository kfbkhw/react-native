import { View, Text, TextInput } from 'react-native';
import { CartesianChart, Line, useChartPressState } from 'victory-native';
import { Circle, useFont } from '@shopify/react-native-skia';
import Animated, { useAnimatedProps } from 'react-native-reanimated';
import type { SharedValue } from 'react-native-reanimated';
import Colors from '@/constants/Colors';

Animated.addWhitelistedNativeProps({ text: true });
const AnimatedTextInput = Animated.createAnimatedComponent(TextInput);

function ToolTip({ x, y }: { x: SharedValue<number>; y: SharedValue<number> }) {
    return (
        <Circle
            cx={x}
            cy={y}
            r={8}
            color={Colors.primary}
            blendMode={'difference'}
        />
    );
}

export default function CryptoChart({ tickers }: { tickers: any[] }) {
    const font = useFont(require('@/assets/fonts/Inter-Regular.ttf'), 10);
    const { state, isActive } = useChartPressState({ x: 0, y: { price: 0 } });

    const animatedText = useAnimatedProps(() => {
        return {
            text: `${state.y.price.value.value.toFixed(2)} $`,
            defaultValue: '',
        };
    });

    const animatedDateText = useAnimatedProps(() => {
        const date = new Date(state.x.value.value);
        return {
            text: `${date.toLocaleDateString()}`,
            defaultValue: '',
        };
    });

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
            <View style={{ marginBottom: 20, marginLeft: 10 }}>
                {isActive ? (
                    <>
                        <AnimatedTextInput
                            editable={false}
                            underlineColorAndroid={'transparent'}
                            style={{
                                fontSize: 30,
                                fontWeight: 'bold',
                                color: Colors.dark,
                            }}
                            animatedProps={animatedText}
                        />
                        <AnimatedTextInput
                            editable={false}
                            underlineColorAndroid={'transparent'}
                            style={{ fontSize: 18, color: Colors.secondary }}
                            animatedProps={animatedDateText}
                        />
                    </>
                ) : (
                    <>
                        <Text
                            style={{
                                fontSize: 30,
                                fontWeight: '700',
                                color: Colors.dark,
                            }}
                        >
                            {`${tickers[tickers.length - 1].price.toFixed(
                                2
                            )} $`}
                        </Text>
                        <Text style={{ fontSize: 18, color: Colors.secondary }}>
                            {'Today'}
                        </Text>
                    </>
                )}
            </View>
            <CartesianChart
                chartPressState={state}
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
                    <>
                        <Line
                            points={points.price}
                            color={Colors.primary}
                            strokeWidth={3}
                        />
                        {isActive && (
                            <ToolTip
                                x={state.x.position}
                                y={state.y.price.position}
                            />
                        )}
                    </>
                )}
            />
        </View>
    );
}
