import {
  View,
  StyleProp,
  ViewStyle,
  TextInput,
  TextStyle,
  Text,
  FlexAlignType,
  TouchableOpacity,
} from "react-native";

import {
  createUseStyles,
  useTheme,
  ThemeType,
  ParagraphSizeTypes,
  BorderRadiusTypes,
} from "@styles";
import { CustomIcon } from "@components";

interface titleOptionsType {
  color?: string;
  position: FlexAlignType;
  size?: keyof ParagraphSizeTypes;
}

interface iconOptionsType {
  name?: string;
  size?: number;
  color?: string;
  onPress?: () => void;
}

interface DataProps {
  disabled?: boolean;
  label?: string;
  value: string;
  setValue: (value: string) => void;
  placeHolder?: string;
}

interface ContextProps {
  theme?: ThemeType;
  multiline?: boolean;
  backgroundColor?: string;
  border?: {
    width: number;
    color: string;
  };
  labelOptions?: titleOptionsType;
  placeHolderOptions?: titleOptionsType;
  rounded?: keyof BorderRadiusTypes;
  hidden?: boolean;
  leftIcon?: iconOptionsType;
  rightIcon?: iconOptionsType;
}

interface StyleTypes {
  containerStyle: StyleProp<ViewStyle>;
  inputStyle: StyleProp<TextStyle>;
  labelContainer: StyleProp<ViewStyle>;
  labelStyle: StyleProp<TextStyle>;
  inputContainerStyle: StyleProp<ViewStyle>;
  leftIconStyle: StyleProp<ViewStyle>;
  rightIconStyle: StyleProp<ViewStyle>;
}

export const CustomInput: React.FC<DataProps & ContextProps> = ({
  label,
  placeHolder,
  multiline,
  value,
  setValue,
  backgroundColor,
  disabled = false,
  labelOptions,
  placeHolderOptions,
  rounded,
  hidden,
  leftIcon,
  rightIcon,
}) => {
  const theme = useTheme();
  const styles = useStyles({
    theme,
    labelOptions,
    backgroundColor,
    multiline,
    placeHolderOptions,
    rounded,
    hidden,
    leftIcon,
    rightIcon,
  });

  return (
    <View style={styles.containerStyle}>
      <View>
        <View style={styles.labelContainer}>
          <Text style={styles.labelStyle}>{label}</Text>
        </View>
        <View style={styles.inputContainerStyle}>
          {leftIcon?.name ? (
            <TouchableOpacity
              disabled={!leftIcon.onPress}
              onPress={leftIcon.onPress}
              style={styles.leftIconStyle}
            >
              <CustomIcon
                name={leftIcon?.name}
                size={leftIcon?.size || 20}
                color={leftIcon?.color}
              />
            </TouchableOpacity>
          ) : null}
          <TextInput
            editable={!disabled}
            multiline={multiline}
            onChangeText={setValue}
            placeholder={placeHolder}
            secureTextEntry={hidden}
            style={styles.inputStyle}
            value={value}
          />
          {rightIcon?.name ? (
            <TouchableOpacity
              disabled={!rightIcon.onPress}
              onPress={rightIcon.onPress}
              style={styles.rightIconStyle}
            >
              <CustomIcon
                name={rightIcon?.name}
                size={rightIcon?.size || 20}
                color={rightIcon?.color}
              />
            </TouchableOpacity>
          ) : null}
        </View>
      </View>
    </View>
  );
};

const getStyles = (context: ContextProps): StyleTypes => ({
  containerStyle: {},
  labelContainer: {
    marginBottom: 10,
    alignItems: context.labelOptions?.position || "flex-start",
  },
  leftIconStyle: {
    marginVertical: 10,
    marginLeft: 10,
    position: context.multiline ? "absolute" : "relative",
    bottom: 0,
    left: 0,
  },
  rightIconStyle: {
    marginVertical: 10,
    marginRight: 10,
    position: context.multiline ? "absolute" : "relative",
    bottom: 0,
    right: 0,
  },
  labelStyle: {
    color: context.labelOptions?.color || "#595959",
    fontSize:
      context.theme?.fonts.fontSize.paragraph[
        context.labelOptions?.size || "t3"
      ],
    fontWeight: "500",
  },
  inputContainerStyle: {
    flexDirection: "row",
    alignItems: "center",
    borderRadius: context.theme?.metrics.borderRadius[context.rounded || "s"],
    borderColor: context.border?.color || context.theme?.colors.basics.black,
    borderWidth: context.border?.width || 0.5,
    padding: context?.multiline ? 5 : 0,
    backgroundColor:
      context.backgroundColor || context.theme?.colors.basics.white,
  },
  inputStyle: {
    flex: 1,
    paddingBottom:
      context.multiline && (context.leftIcon || context.rightIcon) ? 25 : 0,
    marginLeft: context.leftIcon || context.multiline ? 7 : 12,
    marginRight: context.leftIcon || context.multiline ? 7 : 12,
    height: context.multiline ? 160 : 40,
  },
});

const useStyles = createUseStyles(getStyles);
