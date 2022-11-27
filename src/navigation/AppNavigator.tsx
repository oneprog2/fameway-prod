import {
  NavigationContainer,
  DefaultTheme,
  DarkTheme,
} from "@react-navigation/native";
import { HomeScreen, PresentationScreen } from "@screens";
import { useColorScheme } from "react-native";
import { useGetOnboardingStatus } from "@hooks";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { AuthStackNavigator, CustomerStackNavigator } from "@navigation";
import { useState } from "react";

const Stack = createNativeStackNavigator();
const LoginStack = createNativeStackNavigator();
const MainStack = createNativeStackNavigator();

export const AppNavigator = () => {
  const scheme = useColorScheme();
  const { isFirstLaunch, isLoading: onboardingIsLoading } =
    useGetOnboardingStatus();
  const [logged, setlogged] = useState(false);
  return (
    <NavigationContainer theme={scheme === "dark" ? DarkTheme : DefaultTheme}>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
        initialRouteName={"Presentation"}
      >
        {(() => {
          if (isFirstLaunch && !logged)
            return (
              <>
                <Stack.Screen
                  name="Presentation"
                  component={PresentationScreen}
                />
                <Stack.Screen name="AuthStack" component={AuthStackNavigator} />
              </>
            );
          else if (!isFirstLaunch && !logged)
            return (
              <>
                <Stack.Screen
                  name="Login"
                  component={HomeScreen}
                  options={{ headerShown: false }}
                />
              </>
            );
          else
            return (
              <>
                <MainStack.Screen
                  name="CustomerStack"
                  component={CustomerStackNavigator}
                />
              </>
            );
        })()}
      </Stack.Navigator>
    </NavigationContainer>
  );
};
