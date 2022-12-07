import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
  HomeScreen,
  ProfileScreen,
  SearchScreen,
  WishlistScreen,
  CartScreen,
} from "@screens";
import { CartTabButton, CustomIcon, TabBarIcon } from "@components";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const CustomerStack = createBottomTabNavigator();

export const CustomerStackTabs = ({ navigation }) => {
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
          tabBarButton: (props) => (
            <CartTabButton
              {...props}
              onPress={() => {
                navigation.navigate("Cart");
              }}
            />
          ),
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

const Stack = createNativeStackNavigator();

export const CustomerStackNavigator = (props) => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="CustomerStack" component={CustomerStackTabs} />
      <Stack.Group
        screenOptions={{
          presentation: "transparentModal",
          headerShown: false,
        }}
      >
        <Stack.Screen key="Cart" name="Cart" component={CartScreen} />
      </Stack.Group>
    </Stack.Navigator>
  );
};
