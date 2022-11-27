import { useEffect } from "react";
import Animated, {
  Easing,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";

export const Dot: React.FC<{ focused: boolean }> = ({ focused }) => {
  const dotScale = useSharedValue(30);
  const timingConfig = {
    duration: 500,
    easing: Easing.out(Easing.ease),
  };

  useEffect(() => {
    dotScale.value = withTiming(focused ? 50 : 30, timingConfig);
  }, [focused]);

  const dotAnimationStyle = useAnimatedStyle(() => ({
    width: dotScale.value,
  }));

  return (
    <Animated.View
      style={[
        {
          height: 10,
          backgroundColor: focused ? "black" : "gray",
          marginHorizontal: 3,
          borderRadius: 100,
        },
        dotAnimationStyle,
      ]}
    ></Animated.View>
  );
};
