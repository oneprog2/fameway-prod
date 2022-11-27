import React from "react";
import {
  View,
  StyleProp,
  ViewStyle,
  TouchableOpacity,
  Text,
  TextStyle,
} from "react-native";
import {
  createUseStyles,
  useTheme,
  ThemeType,
  BorderRadiusTypes,
  ButtonSizeTypes,
  FontFamilyTypes,
} from "@styles";
import Ionicons from "@expo/vector-icons/Ionicons";

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
  size?: "s" | "m" | "l";
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

  return (
    <TouchableOpacity
      disabled={disabled}
      onPress={onPress}
      style={styles.containerStyle}
      {...props}
    >
      {loading ? (
        <></>
      ) : children ? (
        children
      ) : (
        <>
          {leftIcon?.name ? (
            <View style={styles.leftIconStyle}>
              <Ionicons name="md-checkmark-circle" size={32} color="green" />
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
    </TouchableOpacity>
  );
};

const getHeight = (size: "s" | "m" | "l" | undefined) => {
  switch (size) {
    case "s":
      return 20;
    case "m":
      return 40;
    case "l":
      return 50;
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
    minHeight: getHeight(context.size),
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
      (context.outlined
        ? context.theme?.colors.basics.black
        : context.theme?.colors.basics.white),
    fontSize:
      context.theme?.fonts.fontSize.button[context.titleOptions?.size || "t1"],
    textAlign: context.titleOptions?.position || "center",
    fontFamily:
      context.theme?.fonts.fontFamily[context.titleOptions?.weight || "bold"],
  },
});

const useStyles = createUseStyles(getStyles);
