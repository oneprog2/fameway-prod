import {
  ArticleCard,
  Button,
  CustomIcon,
  CollectionCard,
  HorizontalNavbar,
  NoveltyCard,
  PageContainer,
  Text,
  CreateAccountCard,
} from "@components";
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
  articles: [
    {
      id: "1",
      name: "Tee shirt - Lacoste",
      description: "Taille M - Blanc",
      price: "40",
      image: require("@assets/images/article.png"),
    },
    {
      id: "2",
      name: "Album - Oreilles sales",
      price: "40.40",
      description: "Edition limité le 12/12/2020",
      image: require("@assets/images/article1.png"),
    },
    {
      id: "3",
      name: "Visio 10 minutes",
      price: "25",
      description: "Call friendly",
      image: require("@assets/images/article2.png"),
    },
    {
      id: "4",
      name: "Image de référence",
      description: "Et pourquoi pas ??",
      price: "18.29",
      image: require("@assets/images/article3.png"),
    },
  ],
  collection: {
    id: "1",
    name: "SpaceFOX",
    description:
      "This incredible collection is made by one of the most popular girl in the world",
    influencer: {
      id: "1",
      name: "Amixem",
      image: require("@assets/images/influencer3.png"),
    },
    articles: [
      {
        id: "1",
        name: "Tee shirt - Lacoste",
        price: "40",
        image: require("@assets/images/article.png"),
      },
      {
        id: "2",
        name: "Album - Oreilles sales",
        price: "40.40",
        image: require("@assets/images/article1.png"),
      },
      {
        id: "3",
        name: "Visio 10 minutes",
        price: "25",
        image: require("@assets/images/article2.png"),
      },
    ],
  },
  collection2: {
    id: "1",
    name: "Elsa bitch",
    description:
      "This incredible collection is made by one of the most popular girl in the world",
    influencer: {
      id: "1",
      name: "Elsa Bitch",
      image: require("@assets/images/influencer2.png"),
    },
    articles: [
      {
        id: "1",
        name: "Tee shirt - Lacoste",
        price: "40",
        image: require("@assets/images/article2.png"),
      },
      {
        id: "2",
        name: "Album - Oreilles sales",
        price: "40.40",
        image: require("@assets/images/article1.png"),
      },
      {
        id: "3",
        name: "Visio 10 minutes",
        price: "25",
        image: require("@assets/images/article2.png"),
      },
    ],
  },
};

const SectionName = ({ name }: { name: string }) => {
  return (
    <View className="flex-1 my-6 flex-row items-center justify-center">
      <View className="justify-center  items-start h-full">
        <Text size="xxl" weight="bold">
          {name}
        </Text>
      </View>
      <View className="flex-1 items-end">
        <Button
          iconOnly
          role="empty"
          size="full"
          icon={<Text size="sm">Show all</Text>}
          backgroundColor="transparent"
        ></Button>
      </View>
    </View>
  );
};

export const HomeScreen = ({ navigation }) => {
  const [first, setfirst] = useState("test");
  return (
    <PageContainer
      onPress={() => navigation.navigate("Search")}
      icon={<CustomIcon name="search" size={30} color="#717171" />}
      title="Fameway"
    >
      <View className="fixed h-14">
        <HorizontalNavbar />
      </View>
      <ScrollView className={"flex-1"}>
        <View className={"p-3"}>
          <NoveltyCard
            title={DATA.title}
            buttonLabel={DATA.buttonLabel}
            images={DATA.images}
            onPress={() => navigation.navigate("Profil")}
          />
          <SectionName name="New creators" />
        </View>

        <FlashList
          estimatedItemSize={200}
          horizontal
          showsHorizontalScrollIndicator={false}
          showsVerticalScrollIndicator={false}
          ListFooterComponent={() => <View className="pl-4" />}
          data={DATA.influencers}
          renderItem={({ item }) => (
            <View className="pl-4">
              <InfluencersCard
                backgroundColor="#f4f4f4"
                key={item.id}
                name={item.name}
                image={item.image}
              />
            </View>
          )}
        />

        <View className={"p-3 flex-1"}>
          <SectionName name="New items" />
        </View>

        <FlashList
          horizontal
          estimatedItemSize={200}
          showsHorizontalScrollIndicator={false}
          showsVerticalScrollIndicator={false}
          data={DATA.articles}
          ListFooterComponent={() => <View className="pl-4" />}
          renderItem={({ item }) => (
            <View className="pl-4 flex-1">
              <ArticleCard
                backgroundColor="#f4f4f4"
                key={item.id}
                name={item.name}
                description={item.description}
                price={item.price + "€"}
                image={item.image}
              />
            </View>
          )}
        />

        <View className={"flex-1 p-4 pt-10"}>
          {/* <CollectionCard
            backgroundColor="#fb4e7c"
            name={DATA.collection?.name}
            description={DATA.collection?.description}
            articles={DATA.collection?.articles}
            influencer={DATA.collection?.influencer}
          /> */}
        </View>

        <View className={"px-3 flex-1"}>
          <SectionName name="Trendy items" />
        </View>

        <FlashList
          horizontal
          estimatedItemSize={200}
          showsHorizontalScrollIndicator={false}
          showsVerticalScrollIndicator={false}
          data={DATA.articles}
          ListFooterComponent={() => <View className="pl-4" />}
          renderItem={({ item }) => (
            <View className="pl-4 flex-1">
              <ArticleCard
                backgroundColor="#f4f4f4"
                key={item.id}
                name={item.name}
                description={item.description}
                price={item.price + "€"}
                image={item.image}
              />
            </View>
          )}
        />

        <View className={"flex-1 p-4 pt-10"}>
          <CollectionCard
            startingDate="2021-01-01"
            backgroundColor="#b655f0"
            name={DATA.collection2?.name}
            description={DATA.collection2?.description}
            articles={DATA.collection2?.articles}
            influencer={DATA.collection2?.influencer}
          />
          <Text></Text>
        </View>

        <View className="p-3 flex-1 pb-10">
          <CreateAccountCard
            title="Create your account today"
            subtitle="Never miss exclusive drops again"
            backgroundColor="#f5f5f5"
          />
        </View>
      </ScrollView>
    </PageContainer>
  );
};
