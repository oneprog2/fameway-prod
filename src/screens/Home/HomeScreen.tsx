import { Button, HorizontalNavbar } from "@components";
import { useState } from "react";
import { SafeAreaView, View } from "react-native";
import { FamewayIcon } from "@components";

export const HomeScreen = ({ navigation }) => {
  const [first, setfirst] = useState("test");
  return (
    <SafeAreaView>
      <View style={{ width: 50, height: 50 }}>
        <FamewayIcon />
      </View>
      <View style={{ height: 200 }}>
        <HorizontalNavbar />
      </View>
    </SafeAreaView>
  );
};
