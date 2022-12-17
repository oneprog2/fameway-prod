import {
  Text,
  AddToCartButton,
  BreadCrumbs,
  Carousel,
  DonationButton,
  SelectType,
  SelectSize,
  PageContainer,
} from "@components";
import { useRoute } from "@react-navigation/native";
import { useState } from "react";
import { View, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export const ArticleDetailScreen = ({ navigation }: any) => {
  let route = useRoute();
  // const { articleID } = route?.params;
  const [selected, setSelected] = useState({
    size: 0,
    type: 0,
  });

  navigation.setOptions({
    headerShown: false,
  });

  return (
    <PageContainer
      edges={["top", "bottom", "left", "right"]}
      title="Sweat Sherpa SAT. VI"
      goBack
      footer={<AddToCartButton />}
    >
      <View className="p-2">
        <BreadCrumbs
          store={{ id: "pokpok", name: "Amixem" }}
          categorie={{ id: "dowowo", name: "Tee-shirt" }}
          article={{ id: "pokpsok", name: "Spacefox 349" }}
        />
      </View>
      <Carousel articlePictures={DATA.articles} />
      <View className="px-5 pb-5 mb-80">
        <Text
          position="left"
          size="sm"
          color="neutral-muted"
          className="pb-[1px]"
        >
          Space Fox
        </Text>
        <Text position="left" size="xxl" weight="bold" className="pb-[1px]">
          Sweat Sherpa SAT. VI
        </Text>
        <Text family="DM" position="left" size="lg">
          $75,99
        </Text>
        <View className="pt-2">
          <DonationButton />
        </View>
        <View className="pb-6 border-b-[1px] border-[#E6E6E6]">
          <View className="pt-5 pb-2 flex-row">
            <Text position="left" size="md" color="dark">
              {"Color :"}
            </Text>
            <Text
              position="left"
              size="md"
              weight="bold"
              color="dark"
              className="pl-1"
            >
              {"Black"}
            </Text>
          </View>
          <SelectType
            selectedType={selected.type}
            setSelectedType={(selectedType: number) =>
              setSelected({
                ...selected,
                type: selectedType,
              })
            }
          />
        </View>
        <View className="pb-4 border-b-[1px] border-[#E6E6E6]">
          <Text className="py-4" position="left" size="md" color="dark">
            {"Size"}
          </Text>
          <SelectSize
            selectedSize={selected.size}
            setSelectedSize={(selectedSize: number) =>
              setSelected({
                ...selected,
                size: selectedSize,
              })
            }
          />
        </View>
      </View>
    </PageContainer>
  );
};

const DATA = {
  categories: [
    "Tee shirt",
    "Album",
    "Visio",
    "Image de référence",
    "NFT",
    "Album2",
    "Visi2o",
    "Ima2ge de référence",
    "NF2T",
    "Al42bum",
    "Vi2sio",
    "Im3age de référence",
    "NF4T",
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
