import {
  createUseStyles,
  useTheme,
  ThemeType,
  ParagraphSizeTypes,
} from "@styles";
import { StyleProp, Text as TextComponent, TextStyle } from "react-native";

interface DataProps {
  children: React.ReactNode;
}

interface ContextProps {
  theme?: ThemeType;
  color?: string;
  size?: keyof ParagraphSizeTypes;
  weight?: "normal" | "bold";
  position?: "left" | "center" | "right";
}

interface StyleTypes {
  textStyle: StyleProp<TextStyle>;
}

export const Text: React.FC<DataProps & ContextProps> = ({
  children,
  color,
  size,
  weight,
  position = "center",
}) => {
  const theme = useTheme();
  const styles = useStyles({ theme, color, size, weight, position });

  return <TextComponent style={styles.textStyle}>{children}</TextComponent>;
};

const getStyles = (context: ContextProps): StyleTypes => ({
  textStyle: {
    color: context.color || "black",
    fontSize: context.theme?.fonts.fontSize.paragraph[context.size || "t3"],
    fontWeight: context?.weight || "bold",
    fontFamily: "Oblivian-Regular",
    textAlign: context?.position,
  },
});

const useStyles = createUseStyles(getStyles);
