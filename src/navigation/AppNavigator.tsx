import {
  NavigationContainer,
  DefaultTheme,
  DarkTheme,
  createNavigationContainerRef,
} from "@react-navigation/native";
import { HomeScreen, PresentationScreen } from "@screens";
import { useColorScheme } from "react-native";
import { useGetOnboardingStatus } from "@hooks";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { AuthStackNavigator, CustomerStackNavigator } from "@navigation";
import { useRef, useState } from "react";
import * as Linking from "expo-linking";

const prefix = Linking.createURL("/");

const Stack = createNativeStackNavigator();
const navigationRef = createNavigationContainerRef();

export const AppNavigator = () => {
  const scheme = useColorScheme();
  const { isFirstLaunch, isLoading: onboardingIsLoading } =
    useGetOnboardingStatus();
  const [logged, setlogged] = useState(true);

  const linking = {
    prefixes: [prefix],
    config: {
      screens: {
        CustomerStack: {
          screens: {
            CustomerStackTabs: {
              screens: {
                Home: "home",
                Profile: "profile",
                Search: "search",
                WishList: "wishlist",
              },
            },
          },
        },
      },
    },
  };
  const [routeName, setRouteName] = useState();

  return (
    <NavigationContainer
      ref={navigationRef}
      onStateChange={async () => {
        const currentRouteName = navigationRef.getCurrentRoute().name;
        setRouteName(currentRouteName);
      }}
      theme={scheme === "dark" ? DarkTheme : DefaultTheme}
      linking={linking}
    >
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
              <Stack.Group>
                <Stack.Screen
                  name="CustomerStack"
                  component={CustomerStackNavigator}
                />
              </Stack.Group>
            );
        })()}
      </Stack.Navigator>
    </NavigationContainer>
  );
};
