import { createUseStyles } from '@hooks';
import { useTheme } from '@react-navigation/native';
import { ThemeTypes } from '@themes';
import { View, StyleProp, ViewStyle } from 'react-native';

interface DataProps {}

interface ContextProps {
  theme?: ThemeTypes;
  hovered?: boolean;
}

interface StyleTypes {
  containerStyle: StyleProp<ViewStyle>;
}

export const Button: React.FC<DataProps & ContextProps> = (props) => {
  const styles = useStyles({ theme: useTheme(), hovered: props.hovered });

  return <View style={styles.containerStyle} />;
};

const getStyles = (context: ContextProps): StyleTypes => ({
  containerStyle: {
    height: 300,
    width: '100%',
    backgroundColor: context.hovered
      ? context.theme?.colors.border
      : context.theme?.colors.notification,
  },
});

const useStyles = createUseStyles(getStyles);
