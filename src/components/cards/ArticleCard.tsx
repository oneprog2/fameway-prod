import { CardContainer, Text, Button, CustomIcon } from "@components";
import { View, Image } from "react-native";

export type ArticleCardProps = {
  name?: string;
  description?: string;
  price?: string;
  image?: any;
  onPress?: () => void;
  backgroundColor?: string;
};

export const ArticleCard = ({
  name,
  image,
  description,
  price,
  onPress,
  backgroundColor,
}: ArticleCardProps) => {
  return (
    <View className="">
      <View className="h-48 w-40">
        <CardContainer
          backgroundColor={backgroundColor}
          padding="none"
          role="primary"
          roundness="normal"
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
      </View>

      <View className="pt-1">
        <Text weight="bold" family="DM" position="left">
          {name}
        </Text>
        <Text
          className="pt-1"
          weight="regular"
          family="DM"
          position="left"
          size="xs"
        >
          {description}
        </Text>
        <Text
          className="pt-1 text-grey"
          weight="bold"
          family="DM"
          position="left"
        >
          {price}
        </Text>
      </View>
    </View>
  );
};
