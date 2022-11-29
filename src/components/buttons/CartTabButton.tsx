import { createUseStyles, useTheme, ThemeType } from "@styles";
import { View, StyleProp, ViewStyle, PressableProps } from "react-native";
import { Button } from "@components";
import { useNavigation } from "@react-navigation/native";
import { useRoute } from "@react-navigation/native";

interface DataProps {
  children: React.ReactNode;
  onPress?: () => void;
}

interface ContextProps {
  theme?: ThemeType;
}

interface StyleTypes {
  containerStyle: StyleProp<ViewStyle>;
}

export const CartTabButton: React.FC<DataProps & ContextProps> = ({
  children,
  onPress,
}) => {
  const theme = useTheme();
  const styles = useStyles({ theme });

  return (
    <View
      style={[
        styles.containerStyle,
        {
          bottom: 20,
          marginHorizontal: 8,
          shadowColor: "#000000",
          shadowOffset: { width: 0, height: 3 },
          shadowOpacity: 0.5,
          shadowRadius: 5,
          elevation: 3,
        },
      ]}
    >
      <Button
        size={"none"}
        backgroundColor="#FFCE00"
        rounded="full"
        onPress={onPress}
      >
        <View
          style={[
            styles.containerStyle,
            {
              justifyContent: "center",
              alignItems: "center",
              bottom: 10,
            },
          ]}
        >
          {children}
        </View>
      </Button>
    </View>
  );
};

const getStyles = (context: ContextProps): StyleTypes => ({
  containerStyle: {
    height: 61,
    width: 61,
  },
});

const useStyles = createUseStyles(getStyles);
