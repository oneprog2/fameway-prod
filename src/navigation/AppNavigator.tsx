import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import { HomeScreen, ProfileScreen } from '@screens';
import { useColorScheme } from 'react-native';

const Tab = createBottomTabNavigator();

export const AppNavigator = () => {
  const scheme = useColorScheme();

  return (
    <NavigationContainer theme={scheme === 'dark' ? DarkTheme : DefaultTheme}>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={HomeScreen} options={{ title: 'Play chess' }} />
        <Tab.Screen name="Profile" component={ProfileScreen} />
        {/* <Tab.Screen name="Storybook" component={StorybookScreen} /> */}
      </Tab.Navigator>
    </NavigationContainer>
  );
};
