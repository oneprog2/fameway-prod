import { Button, Text, Title } from "@components";
import { useRef, useState } from "react";
import { View, SafeAreaView, FlatList } from "react-native";
import { FlashList } from "@shopify/flash-list";
import { useScreenSizes } from "@hooks";
import { useTheme } from "@styles";

const DATA = [
  {
    title: "Bienvenue sur Fameway",
    description: "La plateforme qui vous permet de gérer votre famille",
  },
  {
    title: "Retrouvez vos créateurs de contenus préférés",
    description: "La plateforme qui vous permet de gérer votre famille",
  },
  {
    title: "Découvrez des produits physiques et virtuels ",
    description: "La plateforme qui vous permet de gérer votre famille",
  },
  {
    title: "Toute l’équipe vous souhaite un bon shopping !",
  },
];

export const PresentationScreen = ({ navigation }) => {
  const { windowWidth } = useScreenSizes();
  const theme = useTheme();
  const listRef = useRef(null);
  const [listIndex, setlistIndex] = useState(0);

  return (
    <SafeAreaView style={{ flex: 1, width: windowWidth }}>
      <View style={{ flex: 10 }}>
        <FlatList
          ref={listRef}
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          showsVerticalScrollIndicator={false}
          horizontal
          data={DATA}
          onScroll={(e) => {
            setlistIndex(
              Math.round(e.nativeEvent.contentOffset.x / windowWidth)
            );
          }}
          renderItem={({ item, index }) => (
            <View
              style={{
                height: "100%",
                width: windowWidth,
              }}
            >
              <View
                style={{
                  flex: 1,
                  justifyContent: "center",
                  alignItems: "center",
                  paddingHorizontal: 20,
                }}
              >
                <Title position="center">{item.title}</Title>
              </View>
              <View style={{ flex: 2 }}>
                <Text>{item.description}</Text>
              </View>
            </View>
          )}
        />
      </View>

      <View
        style={{
          flex: 1,
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <View style={{ width: windowWidth / 3, marginHorizontal: 34 }}>
          <Button
            rounded={"m"}
            outlined
            title="Passer"
            titleOptions={{ weight: "boldDM" }}
          ></Button>
        </View>
        <View style={{ width: windowWidth / 3, marginHorizontal: 34 }}>
          <Button
            onPress={() => {
              if (listIndex < DATA.length - 1) {
                listRef.current.scrollToIndex({
                  index: listIndex + 1,
                  animated: true,
                });
              } else navigation.navigate("AuthStack");
            }}
            titleOptions={{
              color: theme.colors.basics.black,
              weight: "boldDM",
            }}
            rounded={"m"}
            backgroundColor={theme.colors.basics.yellow}
            title="Suivant"
          ></Button>
        </View>
      </View>
    </SafeAreaView>
  );
};
