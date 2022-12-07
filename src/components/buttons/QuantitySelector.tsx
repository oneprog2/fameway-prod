import { View } from "react-native";
import { CustomIcon, Text, Button } from "@components";

type QuantitySelectorProps = {
  quantity: number;
  onIncrement: () => void;
  onDecrement: () => void;
};

export const QuantitySelector = ({
  quantity,
  onIncrement,
  onDecrement,
}: QuantitySelectorProps) => {
  return (
    <View className="flex-row w-32 rounded-full bg-[#f0f0f0]">
      <View className="pr-2">
        <Button
          roundness="full"
          role="empty"
          className="p-1"
          icon={
            <View className="w-14 h-10 rounded-full justify-center items-center">
              <CustomIcon size={24} name="minus" />
            </View>
          }
          onPress={onDecrement}
        ></Button>
      </View>

      <View className="flex-1 justify-center">
        <Text size="md" weight="bold" position="center">
          {quantity}
        </Text>
      </View>

      <View className="pl-2">
        <Button
          roundness="full"
          role="white"
          className="p-1"
          icon={
            <View className="w-14 h-10 rounded-full justify-center items-center">
              <CustomIcon size={24} name="plus2" />
            </View>
          }
          onPress={onIncrement}
        ></Button>
      </View>
    </View>
  );
};
