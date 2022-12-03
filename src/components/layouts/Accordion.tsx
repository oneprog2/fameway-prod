import { CustomIcon } from "@components";
import React from "react";
import { Pressable, Text, View } from "react-native";
import Animated, {
  Easing,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";

const BODY_HEIGHT = 55;

type AccordionProps = {
  title: string;
  children: React.ReactNode;
  open: boolean;
  setOpen: (open: boolean) => void;
};

export const Accordion = ({
  title,
  children,
  open,
  setOpen,
}: AccordionProps) => {
  const bodyScale = useSharedValue(0);
  const rotation = useSharedValue(0);

  const timingConfig = {
    duration: 140,
    easing: Easing.out(Easing.ease),
  };

  const bodyAnimationStyle = useAnimatedStyle(() => ({
    height: bodyScale.value * BODY_HEIGHT,
  }));

  const arrowAnimationStyle = useAnimatedStyle(() => ({
    transform: [{ rotateZ: `${rotation.value}deg` }],
  }));

  return (
    <>
      <Pressable
        onPress={() => {
          bodyScale.value = withTiming(open ? 0 : 1, timingConfig);
          rotation.value = withTiming(open ? 0 : 180, timingConfig);
          setOpen(!open);
        }}
      >
        <View
          //TODO : Change colors -> theme
          style={{ borderColor: "hsla(0, 0%, 100%, 0.056)" }}
          className="flex flex-row space-between items-center p-1 pl-1.5 border-t-[1px]"
        >
          <Text className="flex-1 p-3 text-m font-bold text-neutral-100">
            {title}
          </Text>
          <Animated.View style={arrowAnimationStyle}>
            <CustomIcon name="chevron-down" size="md" color="white" />
          </Animated.View>
        </View>
      </Pressable>
      <Animated.View
        className="overflow-hidden border-b-[1px]"
        style={[
          bodyAnimationStyle,
          //TODO : Change colors -> theme
          {
            borderColor: "hsla(0, 0%, 100%, 0.056)",
          },
        ]}
      >
        <View className="p-1 pl-[1.5px] absolute bottom-[1px]">{children}</View>
      </Animated.View>
    </>
  );
};
