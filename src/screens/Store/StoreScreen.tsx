import {
  Button,
  CollectionCard,
  PageContainer,
  Text,
  CreateAccountCard,
  StoreHeader,
  ArticlesList,
} from "@components";
import { StyleSheet, View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { FlashList } from "@shopify/flash-list";
import ScrollableTabView from "react-native-scrollable-tab-view";
import TabBar from "react-native-underline-tabbar";

const DATA = {
  categories: ["Tee shirt", "Album", "Visio", "Image de référence", "NFT"],
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

const ArticlePage = ({ label }) => (
  <View style={{ backgroundColor: "red" }}>
    <View className="pt-6">
      <ArticlesList disabled articles={DATA.articles} />
    </View>
  </View>
);

const MainPage = ({ label }) => (
  <View>
    <View className="pt-6">
      <ArticlesList disabled articles={DATA.articles} />
    </View>
    <View className={"flex-1 p-4"}>
      <CollectionCard
        buttonRole="white"
        backgroundColor="#000000"
        name={DATA.collection?.name}
        description={DATA.collection?.description}
        articles={DATA.collection?.articles}
        influencer={DATA.collection?.influencer}
      />
    </View>

    <View className="p-3 flex-1 pb-10">
      <CreateAccountCard
        title="Create your account today"
        subtitle="Never miss exclusive drops again"
        backgroundColor="#f5f5f5"
      />
    </View>
  </View>
);

export const StoreScreen = ({ route, navigation }) => {
  return (
    <PageContainer goBack title={"Amixem"}>
      <ScrollView className={"flex-1"}>
        <View className="px-4 pb-4 pt-4 -mt-2 h-80 flex-1">
          <StoreHeader />
        </View>

        <ScrollableTabView
          tabBarActiveTextColor="#000000"
          renderTabBar={() => <TabBar underlineColor="#000000" />}
        >
          <MainPage tabLabel={{ label: "All" }} key={"ALL"} />

          {DATA.categories.map((category, index) => (
            <ArticlePage tabLabel={{ label: category }} key={index} />
          ))}
        </ScrollableTabView>
      </ScrollView>
    </PageContainer>
  );
};
