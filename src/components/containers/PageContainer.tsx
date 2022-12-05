import { Text } from "@components";
import { Dimensions, SafeAreaView, View } from "react-native";
import Animated, {
  Extrapolation,
  interpolate,
  useAnimatedScrollHandler,
  useAnimatedStyle,
  useSharedValue,
} from "react-native-reanimated";

const WIDTH = Dimensions.get("window").width;

export function PageContainer({ children, pageName }: any) {
  const scrollY = useSharedValue(0);

  const scrollHandler = useAnimatedScrollHandler((event) => {
    scrollY.value = event.contentOffset.y;
  });

  const style = useAnimatedStyle(() => {
    const scale = interpolate(scrollY.value, [-400, 0], [2, 1], {
      extrapolateRight: Extrapolation.CLAMP,
    });

    const translateX = interpolate(scrollY.value, [-400, 0], [WIDTH / 2, 0], {
      extrapolateRight: Extrapolation.CLAMP,
    });

    const translateY = interpolate(
      scrollY.value,
      [-400, 0],
      [400 - 56 / 2, 0],
      {
        extrapolateRight: Extrapolation.CLAMP,
      }
    );

    return { transform: [{ translateY }, { translateX }, { scale }] };
  });

  return (
    <SafeAreaView className="flex-1 bg-light">
      <Animated.View className="flex-row items-center px-3 h-14" style={style}>
        <Text className="text-2xl font-bold">{pageName}</Text>
      </Animated.View>
      <Animated.ScrollView
        className="flex-1"
        onScroll={scrollHandler}
        scrollEventThrottle={1}
      >
        <View className="flex-1 mb-6 px-3">{children}</View>
      </Animated.ScrollView>
    </SafeAreaView>
  );
}
