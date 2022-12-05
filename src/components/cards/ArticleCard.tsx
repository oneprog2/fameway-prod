import { CardContainer, Text, Button, CustomIcon } from "@components";
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
        <Text weight="bold" family="DM" position="center">
          {name}
        </Text>
      </View>
      <View className="px-6 pt-3">
        <Button
          onPress={onPress}
          size="sm"
          label="Follow"
          role="grey"
          icon={<CustomIcon size={20} name="plus2" />}
          roundness="full"
        />
      </View>
    </View>
  );
};
