import { CardContainer, Text, Button } from "@components";
import { View, Image } from "react-native";

export type ArticleCardProps = {
  name?: string;
  image?: any;
  onPress?: () => void;
  backgroundColor?: string;
};

export const ArticleCard = ({
  name,
  image,
  onPress,
  backgroundColor,
}: ArticleCardProps) => {
  return (
    <View className="flex-1">
      <CardContainer
        backgroundColor={backgroundColor}
        padding="none"
        role="primary"
        roundness="xl"
        size="lg"
        light="off"
      >
        <Image
          resizeMode="contain"
          resizeMethod="resize"
          source={image}
          className={"h-full w-full"}
        ></Image>
      </CardContainer>
      <View className="pt-1">
        <Text weight="bold" family="DM" position="center">
          {name}
        </Text>
      </View>
    </View>
  );
};
