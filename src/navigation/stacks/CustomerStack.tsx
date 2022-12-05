import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
  HomeScreen,
  LoginScreen,
  ProfileScreen,
  SearchScreen,
  WishlistScreen,
} from "@screens";
import { createBottomSheetNavigator } from "@th3rdwave/react-navigation-bottom-sheet";
import { CartTabButton, CustomIcon, TabBarIcon } from "@components";
import { BlurView } from "expo-blur";
import { StyleSheet, View } from "react-native";

const CustomerStack = createBottomTabNavigator();
const BottomSheet = createBottomSheetNavigator();

export const CustomerStackTabs = () => {
  return (
    <CustomerStack.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          height: 90,
          backgroundColor: "white",
        },
      }}
    >
      <CustomerStack.Screen
        options={{
          tabBarIcon: ({ focused }) => (
            <TabBarIcon screenName="Home" focused={focused} iconName={"icon"} />
          ),
        }}
        name="Home"
        component={HomeScreen}
      />
      <CustomerStack.Screen
        options={{
          tabBarIcon: ({ focused }) => (
            <TabBarIcon
              screenName="Search"
              focused={focused}
              iconName={focused ? "search-fill" : "search-line"}
            />
          ),
        }}
        name="Search"
        component={SearchScreen}
      />
      <CustomerStack.Screen
        name="Cart"
        component={HomeScreen}
        listeners={{
          tabPress: (e) => {
            e.preventDefault();
          },
        }}
        options={{
          tabBarIcon: ({ focused }) => (
            <CustomIcon
              name="shopping-bag-converted"
              color="#4f4f4f"
              size="30"
            />
          ),
          tabBarButton: (props) => <CartTabButton {...props} />,
        }}
      />
      <CustomerStack.Screen
        options={{
          tabBarIcon: ({ focused }) => (
            <TabBarIcon
              screenName="Wishlist"
              focused={focused}
              iconName={focused ? "heart-fill" : "heart-line"}
            />
          ),
        }}
        name="Wishlist"
        component={WishlistScreen}
      />
      <CustomerStack.Screen
        options={{
          tabBarIcon: ({ focused }) => (
            <TabBarIcon
              screenName="Profile"
              focused={focused}
              iconName={focused ? "account-circle-fill" : "account-circle-line"}
            />
          ),
        }}
        name="Profile"
        component={ProfileScreen}
      />
    </CustomerStack.Navigator>
  );
};

export const CustomerStackNavigator = () => {
  return (
    <BottomSheet.Navigator>
      <BottomSheet.Screen
        name="CustomerStackTabs"
        component={CustomerStackTabs}
      />

      <BottomSheet.Screen
        name="firstSheet"
        component={LoginScreen}
        options={{
          snapPoints: [200, 400],
          bottomInset: 100,
          detached: true,
        }}
      />
    </BottomSheet.Navigator>
  );
};
