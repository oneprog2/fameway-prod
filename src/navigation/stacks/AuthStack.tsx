import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { LoginScreen } from "@screens";

const AuthStack = createNativeStackNavigator();

export const AuthStackNavigator = () => {
  return (
    <AuthStack.Navigator>
      <AuthStack.Screen name="Login" component={LoginScreen} />
    </AuthStack.Navigator>
  );
};
