import { CardContainer, Text, Button, CustomIcon } from "@components";
import { View, Image } from "react-native";

export type ArticleCardProps = {
  name?: string;
  description?: string;
  price?: string;
  image?: any;
  onPress?: () => void;
  backgroundColor?: string;
  position?: "left" | "center" | "right";
  size?: "sm" | "md" | "flex";
  wishlistButton?: boolean;
};

export const ArticleCard = ({
  name,
  image,
  description,
  price,
  size,
  wishlistButton,
  onPress,
  position = "left",
  backgroundColor,
}: ArticleCardProps) => {
  return (
    <View className="w-full h-full flex-1">
      <View className={size === "flex" ? "flex-1 w-full h-full" : "h-48 w-40"}>
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
          {wishlistButton ? (
            <Button
              size="sm"
              roundness="full"
              role="white"
              shadow
              className="absolute top-2 right-2"
              icon={<CustomIcon name="heart" size={25} color="#323232" />}
            />
          ) : null}
        </CardContainer>
      </View>

      <View className="pt-1">
        {name ? (
          <Text
            weight="bold"
            size={description ? "md" : "sm"}
            family="DM"
            position={position}
          >
            {name}
          </Text>
        ) : null}
        {description ? (
          <Text
            className="pt-1"
            weight="regular"
            family="DM"
            position={position}
            size="xs"
          >
            {description}
          </Text>
        ) : null}
        {price ? (
          <Text
            className="pt-1 text-grey"
            weight={description ? "bold" : "light"}
            size={description ? "md" : "sm"}
            family="DM"
            position={position}
          >
            {price}
          </Text>
        ) : null}
      </View>
    </View>
  );
};
