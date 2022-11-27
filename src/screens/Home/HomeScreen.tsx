import { Button, CustomInput } from "@components";
import { useState } from "react";
import { View, Text } from "react-native";

export const HomeScreen = ({ navigation }) => {
  const [first, setfirst] = useState("test");
  return (
    <View>
      <Button
        leftIcon={{ name: "home", color: "white" }}
        // title="Go to Profile"
        // onPress={() => navigation.navigate("Profile")}
      />
      {/* <CustomInput value={first} setValue={setfirst}></CustomInput> */}
    </View>
  );
};
