import {
  Button,
  CollectionCard,
  PageContainer,
  Text,
  CreateAccountCard,
  StoreHeader,
  ArticlesList,
  TopTabBar,
} from "@components";
import { FlatList, View } from "react-native";
import { FlashList } from "@shopify/flash-list";
import { useRef, useState } from "react";
import { ScrollView } from "react-native-gesture-handler";

const DATA = {
  categories: [
    "Tee shirt",
    "Album",
    "Visio",
    "Image de référence",
    "NFT",
    "Tee shirtz",
    "Albumd",
    "Visios",
    "Image de réfqérence",
    "NFdsT",
    "Tedse shirt",
    "Albdsum",
    "Visdsqio",
    "Imagqe de référence",
    "NFfT",
  ],
  test: [
    {
      name: ["Tee shirt - Lacoste"],
    },
    {
      name: ["Tee shirt - Lacoste", "pokopk"],
    },
    {
      name: [
        "Tee shirt - Lacoste",
        "pokopk",
        "Tee shirt - Lacoste",
        "pokopk",
        "Tee shirt - Lacoste",
        "pokopk",
      ],
    },
    {
      name: [
        "Tee shirt - Lacoste",
        "pokopk",
        "Tee shirt - Lacoste",
        "pokopk",
        "Tee shirt - Lacoste",
        "pokopk",
        "Tee shirt - Lacoste",
        "pokopk",
        "Tee shirt - Lacoste",
        "pokopk",
        "Tee shirt - Lacoste",
        "pokopk",
      ],
    },
    {
      name: ["Tee shirt - Lacoste", "pokopk"],
    },
    {
      name: ["Tee shirt - Lacoste", "pokopk"],
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

const MainPage = ({ label }) => (
  <View className="flex-1 bg-darkh-full w-full">
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

const ArticlePage = ({ articles }) => (
  <View>
    <View className="pt-6">
      <ArticlesList disabled articles={articles} />
    </View>
  </View>
);

export const StoreScreen = ({ route, navigation }) => {
  const [current, setcurrent] = useState(0);
  const [scroll, setscroll] = useState(0);
  const [interval, setinterval] = useState([]);
  const headerRef = useRef(null);
  const listRef = useRef(null);

  const scrollToIndex = (index, headerOnly, length) => {
    if (index === 0) {
      headerRef.current?.scrollToIndex({
        index: 0,
        animated: false,
        centered: true,
      });
      if (!headerOnly)
        listRef.current?.scrollToIndex({
          index: 0,
          animated: true,
          centered: true,
        });
    } else if (index > 0 && index < length) {
      headerRef.current?.scrollToIndex({
        index: index - 1,
        animated: true,
        centered: true,
      });
      if (!headerOnly)
        listRef.current?.scrollToIndex({
          index: index,
          animated: true,
          centered: true,
        });
    }
  };

  const onViewRef = useRef((info) => {
    let index = info.viewableItems.length > 0 && info.viewableItems[0].index;
    scrollToIndex(index, true, DATA.categories.length);
    setcurrent(index);
  });

  const viewConfigRef = useRef({ viewAreaCoveragePercentThreshold: 100 });

  return (
    <PageContainer title="Amixem" goBack>
      <View className="flex-1 h-80 p-4">
        <StoreHeader />
      </View>
      <View>
        <FlashList
          ref={headerRef}
          scrollEventThrottle={16}
          horizontal
          extraData={current}
          snapToAlignment="center"
          decelerationRate="fast"
          onScroll={(event) => {
            setscroll(event.nativeEvent.contentOffset.x);
          }}
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}
          data={DATA.categories}
          renderItem={({ item, index }) => (
            <View className="p-4 bg-red-300 top-2 sticky">
              <Button
                role={current === index ? "white" : "primary"}
                onPress={() => {
                  scrollToIndex(index, false, DATA.categories.length);
                  setcurrent(index);
                }}
                label={item}
              ></Button>
            </View>
          )}
        />
      </View>

      {/* <View
        style={{
          height: 3,
          width: 100,
          backgroundColor: "red",
          marginLeft: scroll + 20,
        }}
      ></View> */}

      <View style={{ flexGrow: 1 }}>
        <FlatList
          ref={listRef}
          data={DATA.test}
          pagingEnabled
          style={{ flexGrow: 1 }}
          horizontal
          viewabilityConfig={{ viewAreaCoveragePercentThreshold: 50 }}
          onViewableItemsChanged={onViewRef.current}
          viewabilityConfig={viewConfigRef.current}
          renderItem={({ item, index }) => (
            <View
              style={{
                flexGrow: 1,
                minHeight: 800,
              }}
              className={`w-screen border-2`}
            >
              <ArticlesList disabled articles={DATA.articles}></ArticlesList>
              {/* <Text>{index.toString()}</Text> */}
            </View>
          )}
        />
      </View>
    </PageContainer>
  );
};
