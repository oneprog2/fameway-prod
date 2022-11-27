import { Button } from "@components";
import React from "react";
import { View } from "react-native";

export function LoginScreen({ navigation }) {
  return (
    <View>
      <Button title="Sign in with Email" onPress={() => console.warn("ok")} />
      <Button
        title="Sign in with Google"
        onPress={() => console.warn("gogle")}
      />
      <Button title="Sign in with Apple" />
    </View>
  );
}
