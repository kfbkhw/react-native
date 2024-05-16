import { useState } from 'react';
import {
    View,
    Text,
    SectionList,
    StyleSheet,
    Image,
    TouchableOpacity,
    ScrollView,
} from 'react-native';
import { Stack, useLocalSearchParams } from 'expo-router';
import { useHeaderHeight } from '@react-navigation/elements';
import { useQuery } from '@tanstack/react-query';
import { Ionicons } from '@expo/vector-icons';
import Colors from '@/constants/Colors';
import Message from '@/constants/Message';

export default function Page() {
    const { id } = useLocalSearchParams();
    const headerHeight = useHeaderHeight();
    const [activeIndex, setActiveIndex] = useState(0);
    const categories = ['Overview', 'News', 'Orders', 'Transactions'];

    const { data: crypto } = useQuery({
        queryKey: ['info', id],
        queryFn: async () => {
            const info = await fetch(`/api/info?ids=${id}`).then((res) =>
                res.json()
            );
            return info[+id!];
        },
    });

    return (
        <>
            <Stack.Screen
                options={{
                    title: crypto?.name,
                    headerStyle: {
                        backgroundColor: Colors.light,
                    },
                }}
            />
            <SectionList
                style={{
                    marginTop: headerHeight,
                    backgroundColor: Colors.light,
                }}
                contentInsetAdjustmentBehavior="automatic"
                keyExtractor={(i) => i.title}
                sections={[{ data: [{ title: 'Chart' }] }]}
                renderSectionHeader={() => (
                    <ScrollView
                        horizontal={true}
                        showsHorizontalScrollIndicator={false}
                        contentContainerStyle={{
                            flex: 1,
                            alignItems: 'center',
                            justifyContent: 'space-between',
                            paddingHorizontal: 16,
                            paddingVertical: 8,
                            borderBottomColor: Colors.secondaryMuted,
                            borderBottomWidth: StyleSheet.hairlineWidth,
                            backgroundColor: Colors.light,
                        }}
                    >
                        {categories.map((item, index) => (
                            <TouchableOpacity
                                key={index}
                                onPress={() => setActiveIndex(index)}
                                style={[
                                    {
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        padding: 10,
                                        paddingHorizontal: 14,
                                        borderRadius: 17,
                                    },
                                    activeIndex === index && {
                                        backgroundColor: Colors.white,
                                    },
                                ]}
                            >
                                <Text
                                    style={[
                                        { fontSize: 14 },
                                        activeIndex === index
                                            ? { color: Colors.dark }
                                            : { color: Colors.secondary },
                                    ]}
                                >
                                    {item}
                                </Text>
                            </TouchableOpacity>
                        ))}
                    </ScrollView>
                )}
                ListHeaderComponent={() => (
                    <>
                        <View
                            style={{
                                flexDirection: 'row',
                                alignItems: 'center',
                                justifyContent: 'space-between',
                                marginHorizontal: 16,
                            }}
                        >
                            <Text
                                style={{
                                    marginBottom: 20,
                                    fontSize: 20,
                                    fontWeight: '700',
                                    color: Colors.secondary,
                                }}
                            >
                                {crypto?.symbol}
                            </Text>
                            <Image
                                source={{ uri: crypto?.logo }}
                                style={{ width: 60, height: 60 }}
                            />
                        </View>
                        <View
                            style={{
                                flexDirection: 'row',
                                gap: 10,
                                margin: 12,
                                marginBottom: 24,
                            }}
                        >
                            <TouchableOpacity
                                style={{
                                    flexDirection: 'row',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    gap: 8,
                                    height: 40,
                                    paddingLeft: 16,
                                    paddingRight: 20,
                                    borderRadius: 20,
                                    backgroundColor: Colors.primary,
                                }}
                            >
                                <Ionicons
                                    name="add"
                                    size={24}
                                    color={Colors.light}
                                />
                                <Text
                                    style={{
                                        fontSize: 18,
                                        fontWeight: '500',
                                        color: Colors.light,
                                    }}
                                >
                                    {Message.cryptoDetailAction1}
                                </Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                                style={{
                                    flexDirection: 'row',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    gap: 8,
                                    height: 40,
                                    paddingLeft: 16,
                                    paddingRight: 20,
                                    borderRadius: 20,
                                    backgroundColor: Colors.primaryMuted,
                                }}
                            >
                                <Ionicons
                                    name="checkmark"
                                    size={24}
                                    color={Colors.primary}
                                />
                                <Text
                                    style={{
                                        fontSize: 18,
                                        fontWeight: '500',
                                        color: Colors.primary,
                                    }}
                                >
                                    {Message.cryptoDetailAction2}
                                </Text>
                            </TouchableOpacity>
                        </View>
                    </>
                )}
                renderItem={({ item }) => (
                    <View
                        style={{
                            gap: 16,
                            marginHorizontal: 20,
                            marginTop: 20,
                            padding: 14,
                            borderRadius: 16,
                            backgroundColor: Colors.white,
                        }}
                    >
                        <Text
                            style={{
                                fontSize: 20,
                                fontWeight: '700',
                                color: Colors.dark,
                            }}
                        >
                            {Message.cryptoDetailOverviewTitle}
                        </Text>
                        <Text
                            style={{
                                color: Colors.secondary,
                                lineHeight: 18,
                            }}
                        >
                            {Message.cryptoDetailOverviewDescription}
                        </Text>
                    </View>
                )}
            ></SectionList>
        </>
    );
}
