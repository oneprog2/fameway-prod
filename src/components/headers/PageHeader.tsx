import React from "react";
import { Dimensions, View } from "react-native";
import { Button, CustomIcon, Text, FamewayIcon } from "@components";
import { useNavigation } from "@react-navigation/native";

const WIDTH = Dimensions.get("window").width;

export type PageHeaderProps = {
  scrollY: {
    value: number;
  };
  goBack?: boolean;
  title: string;
  icon?: string;
  onPress?: () => void;
};

export const PageHeader = ({
  scrollY,
  goBack,
  title,
  icon,
  onPress,
}: PageHeaderProps) => {
  const navigation = useNavigation();

  return (
    <View className="flex-row items-center">
      <View className="flex-1 flex-row items-center justify-between px-3 h-14">
        <View className="flex-row items-center">
          {goBack ? (
            <Button
              role="empty"
              onPress={() => navigation.goBack()}
              iconOnly
              startSlot={
                <CustomIcon name="chevron-left" color="black" size={40} />
              }
            />
          ) : null}
          {title === "Fameway" ? (
            <View className={"h-10 w-10"}>
              <FamewayIcon />
            </View>
          ) : null}
          <View className="flex-1 absolute w-screen -left-3">
            <Text weight="bold" className="text-2xl">
              {title}
            </Text>
          </View>
        </View>
        {icon ? (
          <Button role={"empty"} onPress={onPress} startSlot={icon} />
        ) : null}
      </View>
    </View>
  );
};
