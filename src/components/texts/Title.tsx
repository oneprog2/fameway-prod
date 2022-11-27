import { createUseStyles, useTheme, ThemeType, TitleSizeTypes } from "@styles";
import { StyleProp, Text, TextStyle } from "react-native";

interface DataProps {
  children: React.ReactNode;
}

interface ContextProps {
  theme?: ThemeType;
  color?: string;
  size?: keyof TitleSizeTypes;
  weight?: "normal" | "bold";
  position?: "left" | "center" | "right";
}

interface StyleTypes {
  textStyle: StyleProp<TextStyle>;
}

export const Title: React.FC<DataProps & ContextProps> = ({
  children,
  color,
  size,
  weight,
  position = "left",
}) => {
  const theme = useTheme();
  const styles = useStyles({ theme, color, size, weight, position });

  return <Text style={styles.textStyle}>{children}</Text>;
};

const getStyles = (context: ContextProps): StyleTypes => ({
  textStyle: {
    color: context.color || "black",
    fontSize: context.theme?.fonts.fontSize.title[context.size || "t3"],
    fontWeight: context?.weight || "bold",
    fontFamily: "Oblivian-Regular",
    textAlign: context?.position,
  },
});

const useStyles = createUseStyles(getStyles);
