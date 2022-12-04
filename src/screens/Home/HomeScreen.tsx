import { Button, HorizontalNavbar, NoveltyCard, Text } from "@components";
import { useState } from "react";
import { Image, SafeAreaView, View } from "react-native";
import { CardContainer } from "@components";
import { ScrollView } from "react-native-gesture-handler";

const DATA = {
  id: "1",
  title: "Novelty is a card with a title and a button",
  buttonLabel: "Click to see",
  images: [
    require("@assets/images/test1.jpg"),
    require("@assets/images/test2.jpg"),
    require("@assets/images/test3.jpg"),
  ],
};

export const HomeScreen = ({ navigation }) => {
  const [first, setfirst] = useState("test");
  return (
    <SafeAreaView className="flex-1">
      <View className="sticky h-14">
        <HorizontalNavbar />
      </View>
      <ScrollView className={"flex-1 p-3"}>
        <NoveltyCard
          title={DATA.title}
          buttonLabel={DATA.buttonLabel}
          images={DATA.images}
          onPress={() => navigation.navigate("Profil")}
        />

        <View className="flex-1 mt-6 flex-row items-center justify-center">
          <View className="justify-center  items-start h-full ">
            <Text size="xxl" weight="bold">
              New creators
            </Text>
          </View>
          <View className="flex-1 items-end">
            <Button backgroundColor="transparent">
              <Text>Show all</Text>
            </Button>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
