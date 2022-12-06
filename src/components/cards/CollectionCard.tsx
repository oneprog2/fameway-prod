import { CardContainer, ArticleCard, Text, Button } from "@components";
import { Image, View } from "react-native";

export type CollectionCardProps = {
  name?: string;
  description?: string;
  articles?: {
    id: string;
    name: string;
    image: string;
    price: string;
  }[];
  influencer?: {
    id: string;
    name: string;
    image: string;
  };
  onPress?: () => void;
  startingDate?: string;
  backgroundColor?: string;
};

export const CollectionCard = ({
  name,
  articles,
  description,
  influencer,
  onPress,
  startingDate,
  backgroundColor,
}: CollectionCardProps) => {
  return (
    <CardContainer
      backgroundColor={backgroundColor}
      padding="none"
      role="primary"
      roundness="normal"
      size="lg"
      light="left"
    >
      <View className="h-full flex-1">
        <View className="flex-row p-8 items-center">
          <Image
            resizeMode="contain"
            className="h-12 w-12 rounded-full bg-neutral-100"
            source={influencer?.image}
          />
          <Text
            className="pl-3"
            color="white"
            size="xl"
            weight="bold"
            family="DM"
          >
            {influencer?.name}
          </Text>
        </View>
        <View className="flex-1 px-6 pb-6">
          <Text
            className="pb-3"
            position="left"
            weight="bold"
            size="xxl"
            color="white"
          >
            {name}
          </Text>
          <Text position="left" color="white" size="xl">
            {description}
          </Text>
        </View>

        <View className="flex-row h-52 w-full mb-10 items-center px-2">
          {articles?.map((article) => (
            <View className="flex-1 px-1">
              <CardContainer light="off" backgroundColor="white">
                <ArticleCard
                  wishlistButton={false}
                  size={"flex"}
                  position="center"
                  backgroundColor="#f4f4f4"
                  key={article.id}
                  name={article.name}
                  price={article.price + "€"}
                  image={article.image}
                />
              </CardContainer>
            </View>
          ))}
        </View>
        <View className="pb-8 items-center px-6">
          <Button roundness="full" size="lg" label="See collection"></Button>
        </View>
      </View>
    </CardContainer>
  );
};
