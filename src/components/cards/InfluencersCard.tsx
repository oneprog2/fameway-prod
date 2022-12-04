import { CardContainer, Text, Button } from "@components";
import { View, Image } from "react-native";

export type InfluencersCardProps = {
  name?: string;
  image?: any;
  onPress?: () => void;
  backgroundColor?: string;
};

export const InfluencersCard = ({
  name,
  image,
  onPress,
  backgroundColor,
}: InfluencersCardProps) => {
  return (
    <CardContainer
      backgroundColor={backgroundColor}
      padding="none"
      role="primary"
      roundness="xl"
      size="lg"
    >
      <Image
        resizeMode="contain"
        resizeMethod="resize"
        source={image}
        className={"h-full w-full"}
      ></Image>
    </CardContainer>
  );
};
