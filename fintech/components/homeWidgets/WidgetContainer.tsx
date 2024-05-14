import { ReactElement } from 'react';
import Animated, {
    useAnimatedRef,
    useAnimatedScrollHandler,
    useSharedValue,
} from 'react-native-reanimated';
import AnimatedWidget from './AnimatedWidget';
import { COL, Positions, SIZE } from './config';

interface WidgetContainerProps {
    children: ReactElement<{ id: string }>[];
    editing: boolean;
}

export default function WidgetContainer({
    children,
    editing,
}: WidgetContainerProps) {
    const scrollY = useSharedValue(0);
    const scrollView = useAnimatedRef<Animated.ScrollView>();
    const positions = useSharedValue<Positions>(
        Object.assign(
            {},
            ...children.map((child, index) => ({ [child.props.id]: index }))
        )
    );
    const onScroll = useAnimatedScrollHandler({
        onScroll: ({ contentOffset: { y } }) => {
            scrollY.value = y;
        },
    });

    return (
        <Animated.ScrollView
            onScroll={onScroll}
            ref={scrollView}
            contentContainerStyle={{
                height: Math.ceil(children.length / COL) * SIZE,
            }}
            showsVerticalScrollIndicator={false}
            bounces={false}
            scrollEventThrottle={16}
        >
            {children.map((child) => {
                return (
                    <AnimatedWidget
                        key={child.props.id}
                        positions={positions}
                        id={child.props.id}
                        editing={editing}
                        scrollView={scrollView}
                        scrollY={scrollY}
                    >
                        {child}
                    </AnimatedWidget>
                );
            })}
        </Animated.ScrollView>
    );
}
