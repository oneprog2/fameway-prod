import {
  CollectionCard,
  PageContainer,
  CreateAccountCard,
  StoreHeader,
  ArticlesList,
  PageHeader,
} from "@components";
import { StyleSheet, View } from "react-native";
import { Tabs, MaterialTabBar } from "react-native-collapsible-tab-view";
import { useCallback } from "react";
import {
  useAnimatedScrollHandler,
  useSharedValue,
} from "react-native-reanimated";
import { SafeAreaView } from "react-native-safe-area-context";

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
        tag: "New",
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

const MainPage = () => (
  <Tabs.ScrollView>
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
  </Tabs.ScrollView>
);

const ArticlePage = ({ articles }) => (
  <View>
    <View className="pt-6">
      <ArticlesList disabled articles={articles} />
    </View>
  </View>
);

const HEADER_HEIGHT = 250;

// const DATA = [0, 1, 2, 3, 4];
const identity = (v: unknown): string => v + "";

const Header = () => {
  const scrollY = { value: 0 };

  return (
    <SafeAreaView>
      <PageHeader title={"Amixem"} goBack scrollY={scrollY} className="z-30" />
      <View className="px-4 pb-4 pt-4 -mt-2 h-80 flex-1">
        <StoreHeader />
      </View>
    </SafeAreaView>
  );
};

export const StoreScreen = ({ route, navigation }) => {
  const renderItem: ListRenderItem<number> = useCallback(({ index }) => {
    return (
      <View style={[styles.box, index % 2 === 0 ? styles.boxB : styles.boxA]} />
    );
  }, []);

  // const scrollY = useSharedValue(0);

  // const scrollHandler = useAnimatedScrollHandler((event) => {
  //   scrollY.value = event.contentOffset.y;
  // });

  return (
    <>
      {/* <PageHeader className="h-20 w-full bg-white absolute z-30" /> */}
      <Tabs.Container
        allowHeaderOverscroll
        renderTabBar={(props) => <MaterialTabBar {...props} scrollEnabled />}
        renderHeader={() => <Header></Header>}
      >
        <Tabs.Tab name={"All"}>
          <MainPage />
        </Tabs.Tab>
        {DATA.categories.map((item, index) => (
          <Tabs.Tab name={item} key={index}>
            <ArticlePage item={DATA.articles[index]} />
          </Tabs.Tab>
        ))}
      </Tabs.Container>
    </>
  );
};

const styles = StyleSheet.create({
  box: {
    height: 250,
    width: "100%",
  },
  boxA: {
    backgroundColor: "white",
  },
  boxB: {
    backgroundColor: "#D8D8D8",
  },
  header: {
    height: HEADER_HEIGHT,
    width: "100%",
    backgroundColor: "#2196f3",
  },
});
