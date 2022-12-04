import React from "react";
import {
  View,
  StyleProp,
  ViewStyle,
  Text,
  TextStyle,
  Pressable,
} from "react-native";

import Animated, {
  Easing,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";

import {
  createUseStyles,
  useTheme,
  ThemeType,
  BorderRadiusTypes,
  ButtonSizeTypes,
  FontFamilyTypes,
} from "@styles";
import { CustomIcon } from "@components";

const PRESSED_SCALE = 0.95;

interface iconOptionsType {
  name?: string;
  size?: number;
  color?: string;
}

interface titleOptionsType {
  size?: keyof ButtonSizeTypes;
  position?: "center" | "left" | "right";
  color?: string;
  weight?: keyof FontFamilyTypes;
  flex?: number;
}

interface DataProps {
  children?: React.ReactNode;
  onPress?: () => void;
  smallWithIcon?: boolean;
}

interface ContextProps {
  theme?: ThemeType;
  disabled?: boolean;
  size?: "s" | "m" | "l" | "none";
  backgroundColor?: string;
  title?: string;
  titleOptions?: titleOptionsType;
  outlined?: boolean;
  rounded?: keyof BorderRadiusTypes;
  leftIcon?: iconOptionsType;
  rightIcon?: iconOptionsType;
  loading?: boolean;
  elevation?: number;
}

interface StyleTypes {
  containerStyle: StyleProp<ViewStyle>;
  leftIconStyle: StyleProp<ViewStyle>;
  rightIconStyle: StyleProp<ViewStyle>;
  contentStyle: StyleProp<ViewStyle>;
  titleStyle: StyleProp<TextStyle>;
}

export const Button: React.FC<DataProps & ContextProps> = ({
  onPress,
  children,
  disabled = false,
  size,
  title = "Button",
  titleOptions,
  backgroundColor,
  rounded,
  leftIcon,
  rightIcon,
  loading,
  outlined,
  elevation,
  smallWithIcon,
  ...props
}) => {
  const theme = useTheme();
  const styles = useStyles({
    theme,
    disabled,
    size,
    title,
    titleOptions,
    backgroundColor,
    rounded,
    rightIcon,
    leftIcon,
    loading,
    outlined,
    elevation,
  });

  const scale = useSharedValue(1);

  const buttonStyle = useAnimatedStyle(() => ({
    transform: [{ scale: scale.value }],
  }));

  const timingConfig = {
    duration: 140,
    easing: Easing.out(Easing.ease),
  };

  return (
    <Pressable
      disabled={disabled}
      onPress={onPress}
      onTouchStart={() => {
        if (!disabled) {
          scale.value = withTiming(PRESSED_SCALE, timingConfig);
        }
      }}
      onTouchEnd={() => {
        scale.value = withTiming(1, timingConfig);
      }}
      {...props}
    >
      <Animated.View style={[styles.containerStyle, buttonStyle]}>
        {loading ? (
          <></>
        ) : children ? (
          children
        ) : (
          <>
            {leftIcon?.name ? (
              <View style={styles.leftIconStyle}>
                <CustomIcon name="home" size={32} color="green" />
              </View>
            ) : rightIcon && !smallWithIcon ? (
              <View style={styles.leftIconStyle} />
            ) : null}

            <View style={styles.contentStyle}>
              <Text style={styles.titleStyle}>{title}</Text>
            </View>

            {rightIcon?.name ? (
              <View style={styles.rightIconStyle}></View>
            ) : leftIcon && !smallWithIcon ? (
              <View style={styles.rightIconStyle} />
            ) : null}
          </>
        )}
      </Animated.View>
    </Pressable>
  );
};

const getHeight = (size: "s" | "m" | "l" | "none" | undefined) => {
  switch (size) {
    case "s":
      return 20;
    case "m":
      return 40;
    case "l":
      return 50;
    case "none":
      return 0;
    default:
      return 50;
  }
};

const getStyles = (context: ContextProps): StyleTypes => ({
  containerStyle: {
    opacity: context.disabled ? 0.6 : 1,
    backgroundColor:
      context.backgroundColor ||
      (context.outlined ? "transparent" : context.theme?.colors.basics.black),
    height: context?.size === "none" ? "100%" : getHeight(context.size),
    width: "100%",
    flexDirection: "row",
    borderRadius: context.theme?.metrics.borderRadius[context.rounded || "s"],
    padding: context.size === "s" ? 5 : 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: context.elevation || 0 },
    shadowOpacity: context.elevation ? 0.5 : 0,
    shadowRadius: 2,
    elevation: context.elevation || 0,
    alignContent: "center",
    justifyContent: "center",
  },
  leftIconStyle: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  contentStyle: {
    flex: context.titleOptions?.flex || 3,
    justifyContent: "center",
  },
  rightIconStyle: { flex: 1, justifyContent: "center", alignItems: "center" },
  titleStyle: {
    color:
      context.titleOptions?.color ||
      (context.outlined ? "#222222" : context.theme?.colors.basics.white),
    fontSize:
      context.theme?.fonts.fontSize.button[context.titleOptions?.size || "t1"],
    textAlign: context.titleOptions?.position || "center",
    fontFamily:
      context.theme?.fonts.fontFamily[context.titleOptions?.weight || "boldDM"],
  },
});

const useStyles = createUseStyles(getStyles);
