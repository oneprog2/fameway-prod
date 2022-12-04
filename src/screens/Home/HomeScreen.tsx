import { Button, HorizontalNavbar } from "@components";
import { useState } from "react";
import { SafeAreaView, View } from "react-native";
import { FamewayIcon, CardContainer } from "@components";
import { ScrollView } from "react-native-gesture-handler";

export const HomeScreen = ({ navigation }) => {
  const [first, setfirst] = useState("test");
  return (
    <SafeAreaView className="flex-1">
      <View className="sticky h-14">
        <HorizontalNavbar />
      </View>
      <ScrollView className={"flex-1 p-3"}>
        <CardContainer role="primary" roundness="xl">
          <View className="h-80"></View>
        </CardContainer>
      </ScrollView>
    </SafeAreaView>
  );
};
