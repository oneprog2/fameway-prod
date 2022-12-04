import { Button, HorizontalNavbar, NoveltyCard, Text } from "@components";
import { useState } from "react";
import { Image, SafeAreaView, View } from "react-native";
import { CardContainer, InfluencersCard } from "@components";
import { ScrollView } from "react-native-gesture-handler";
import { FlashList } from "@shopify/flash-list";

const DATA = {
  id: "1",
  title: "Novelty is a card with a title and a button",
  buttonLabel: "Click to see",
  images: [
    require("@assets/images/test1.jpg"),
    require("@assets/images/test2.jpg"),
    require("@assets/images/test3.jpg"),
  ],
  influencers: [
    {
      id: "1",
      name: "Amixem",
      image: require("@assets/images/influencer.png"),
    },
    {
      id: "2",
      name: "Pokimane",
      image: require("@assets/images/influencer1.png"),
    },
    {
      id: "3",
      name: "Squeezie Gaming",
      image: require("@assets/images/influencer2.png"),
    },
    {
      id: "4",
      name: "Illiasse RIFKI",
      image: require("@assets/images/influencer3.png"),
    },
  ],
};

export const HomeScreen = ({ navigation }) => {
  const [first, setfirst] = useState("test");
  return (
    <SafeAreaView className="flex-1 bg-light">
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

        <View className="flex-1 my-4 flex-row items-center justify-center">
          <View className="justify-center  items-start h-full">
            <Text size="xxl" weight="bold">
              New creators
            </Text>
          </View>
          <View className="flex-1 items-end">
            <Button
              iconOnly
              role="empty"
              size="full"
              icon={<Text>Show all</Text>}
              backgroundColor="transparent"
            ></Button>
          </View>
        </View>

        <FlashList
          horizontal
          showsHorizontalScrollIndicator={false}
          showsVerticalScrollIndicator={false}
          data={DATA.influencers}
          renderItem={({ item }) => (
            <View className="h-40 w-40 pr-4">
              <InfluencersCard
                backgroundColor="#f4f4f4"
                key={item.id}
                name={item.name}
                image={item.image}
              />
            </View>
          )}
        />
      </ScrollView>
    </SafeAreaView>
  );
};
