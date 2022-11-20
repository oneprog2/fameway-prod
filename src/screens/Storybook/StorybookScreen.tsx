import { StyleProp, View, ViewStyle } from 'react-native';

import { createUseStyles, useTheme, ThemeType } from '@styles';

import StorybookUIRoot from '../../../.storybook/Storybook';

interface DataProps {}

interface ContextProps {
  theme?: ThemeType;
}

interface StyleTypes {
  containerStyle: StyleProp<ViewStyle>;
}

export const StorybookScreen: React.FC<DataProps & ContextProps> = props => {
  const theme = useTheme();
  const styles = useStyles({ theme });

  return <View style={styles.containerStyle}><StorybookUIRoot/></View>;
};

const getStyles = (context: ContextProps): StyleTypes => ({
  containerStyle: {
    flex: 1,
    backgroundColor: context.theme?.colors.basics.white,
  },
});

const useStyles = createUseStyles(getStyles);
