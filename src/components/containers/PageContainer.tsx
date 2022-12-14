import { PageHeader, PageHeaderProps } from "@components";
import { Dimensions, View } from "react-native";
import Animated, {
  interpolate,
  useAnimatedScrollHandler,
  useAnimatedStyle,
  useSharedValue,
} from "react-native-reanimated";
import { SafeAreaView } from "react-native-safe-area-context";

export function PageContainer({
  children,
  icon,
  title,
  goBack = false,
  onPress,
  isModal,
}: PageHeaderProps & { children: React.ReactNode; isModal?: boolean }) {
  const scrollY = useSharedValue(0);

  const scrollHandler = useAnimatedScrollHandler((event) => {
    scrollY.value = event.contentOffset.y;
  });

  const borderStyle = useAnimatedStyle(() => {
    const opacity = interpolate(scrollY.value, [0, 5], [0, 1]);
    return { opacity };
  });

  return (
    <SafeAreaView edges={["right", "top", "left"]} className="flex-1 bg-white">
      <PageHeader
        scrollY={scrollY}
        icon={icon}
        title={title}
        goBack={goBack}
        onPress={onPress}
      />
      <Animated.View className="h-[1px] bg-neutral-12" style={borderStyle} />
      <Animated.ScrollView
        className="flex-1"
        onScroll={scrollHandler}
        scrollEventThrottle={1}
      >
        <View className={"flex-1"}>{children}</View>
      </Animated.ScrollView>
    </SafeAreaView>
  );
}
