import { Button, CustomIcon, Text, FamewayIcon } from "@components";
import { useNavigation } from "@react-navigation/native";
import { Dimensions, SafeAreaView, View } from "react-native";
import Animated, {
  Extrapolation,
  interpolate,
  useAnimatedScrollHandler,
  useAnimatedStyle,
  useSharedValue,
} from "react-native-reanimated";

const WIDTH = Dimensions.get("window").width;

export function PageContainer({
  children,
  icon,
  title,
  goBack = false,
  onPress,
  isModal,
}: any) {
  const scrollY = useSharedValue(0);

  const scrollHandler = useAnimatedScrollHandler((event) => {
    scrollY.value = event.contentOffset.y;
  });

  const navigation = useNavigation();

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
    <SafeAreaView className="flex-1 bg-white">
      <View className="flex-row items-center">
        <Animated.View
          className="flex-1 flex-row items-center justify-between px-3 h-14"
          style={style}
        >
          <View className="flex-row items-center">
            {goBack ? (
              <Button
                role="empty"
                onPress={() => navigation.goBack()}
                iconOnly
                startSlot={
                  <CustomIcon name="chevron-left" color="black" size={40} />
                }
              />
            ) : null}
            {title === "Fameway" ? (
              <View className={"h-10 w-10"}>
                <FamewayIcon />
              </View>
            ) : null}
            <Text weight="bold" className="text-2xl">
              {title}
            </Text>
          </View>
          {icon ? (
            <Button role={"empty"} onPress={onPress} startSlot={icon} />
          ) : null}
        </Animated.View>
      </View>
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
