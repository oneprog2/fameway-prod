import { Text, CustomIcon, Button, BreadCrumbs, Carousel } from "@components";
import { useRoute } from "@react-navigation/native";
import { FlashList } from "@shopify/flash-list";
import clsx from "clsx";
import { useState } from "react";
import { View, ScrollView, Image, Flatlist, FlatList } from "react-native";

export const Donations = () => {
  return (
    <View className="bg-[#f5f5f5] rounded-full flex-row items-center">
      <View className="flex-1 h-full w-full flex-row align-start items-center p-2">
        <Image
          className="h-7 w-7 rounded-full bg-white"
          resizeMode="contain"
          source={require("@assets/images/wwf.jpeg")}
        ></Image>
        <Text position="left" size="md" weight="bold" className="pl-2">
          12€
        </Text>
        <Text position="left" size="md" className="pl-1">
          de dons à WWF
        </Text>
      </View>
      <View className="h-7 flex-1">
        <Button
          role="empty"
          size="full"
          startSlot={
            <View className="justify-end">
              <Text position="right" size="md" weight="bold" className="pl-5">
                En savoir plus
              </Text>
            </View>
          }
        />
      </View>
    </View>
  );
};

type SelectTypeProps = {
  selectedType: number;
  setSelectedType: (value: number) => void;
};

export const SelectType = ({
  selectedType,
  setSelectedType,
}: SelectTypeProps) => {
  const DATA = [
    {
      id: "20",
      name: require("@assets/images/article1.png"),
    },
    {
      id: "39",
      name: require("@assets/images/article2.png"),
    },
  ];

  return (
    <View className="flex-1 w-full h-full">
      <FlashList
        horizontal
        data={DATA}
        keyExtractor={(item) => item.id}
        renderItem={({ item, index }) => {
          return (
            <View className="rounded-full h-full w-full pr-2">
              {index === selectedType ? (
                <View className="justify-center absolute items-center h-4 w-4 rounded-full bg-dark z-10">
                  <CustomIcon name="checkmark" color="white" size={17} />
                </View>
              ) : null}
              <Button
                onPress={() => setSelectedType(index)}
                size="lg"
                className="bg-[#f5f5f5] rounded-full"
                role="empty"
                startSlot={
                  <Image
                    resizeMode="contain"
                    className={clsx(
                      index === selectedType ? "border-2" : "opacity-70",
                      "flex-1  h-full w-full rounded-full"
                    )}
                    source={item.name}
                  ></Image>
                }
                roundness="full"
              ></Button>
            </View>
          );
        }}
      />
    </View>
  );
};

type SelectSizeProps = {
  selectedSize: number;
  setSelectedSize: (value: number) => void;
};

export const SelectSize = ({
  selectedSize,
  setSelectedSize,
}: SelectSizeProps) => {
  const DATA = [
    {
      id: "1",
      name: "S",
    },
    {
      id: "2",
      name: "M",
    },
    {
      id: "3",
      name: "L",
    },
    {
      id: "4",
      name: "XL",
    },
  ];

  return (
    <View className="w-full h-full">
      <FlatList
        keyExtractor={(item) => item.id}
        horizontal
        data={DATA}
        renderItem={({ item, index }) => {
          return (
            <View
              className={clsx(
                selectedSize === index ? "bg-dark" : "border opacity-70",
                "items-center  justify-center rounded-full h-14 w-14 mr-2"
              )}
            >
              <Button
                onPress={() => setSelectedSize(index)}
                size="md"
                iconOnly
                startSlot={
                  <View
                    className={clsx(
                      selectedSize === index ? "text-white" : "text-dark",
                      "h-full w-full items-center justify-center"
                    )}
                  >
                    <Text
                      color={selectedSize === index ? "white" : "dark"}
                      position="center"
                      size="full"
                      weight="bold"
                    >
                      {item.name}
                    </Text>
                  </View>
                }
                role="empty"
                roundness="full"
              ></Button>
            </View>
          );
        }}
      />
    </View>
  );
};

export const ArticleDetailScreen = ({ navigation }: any) => {
  let route = useRoute();
  // const { articleID } = route?.params;
  const [selected, setSelected] = useState({
    size: 0,
    type: 0,
  });

  navigation.setOptions({
    headerShown: true,
    headerShadowVisible: false,
    headerStyle: {
      backgroundColor: "white",
      elevation: 0,
      shadowOpacity: 0,
      borderBottomWidth: 0,
    },
    headerTitle: () => (
      <Text size="xxl" weight="bold">
        Store
      </Text>
    ),
    headerLeft: () => (
      <Button
        role="empty"
        onPress={() => navigation.goBack()}
        iconOnly
        startSlot={<CustomIcon name="chevron-left" color="black" size={40} />}
      />
    ),
  });

  return (
    <ScrollView className="flex-1 bg-white">
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
          <Donations />
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
    </ScrollView>
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
