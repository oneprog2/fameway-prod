import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { HomeScreen } from "@screens";

const CustomerStack = createBottomTabNavigator();

export const CustomerStackNavigator = () => {
  return (
    <CustomerStack.Navigator>
      <CustomerStack.Screen name="LoginS" component={HomeScreen} />
    </CustomerStack.Navigator>
  );
};
