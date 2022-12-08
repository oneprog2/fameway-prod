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
    <View className="flex-row bg-[#f0f0f0]">
      <View className="flex-1">
        <Button
          roundness="full"
          role="empty"
          className="p-1"
          icon={
            <View className="w-full h-full bg-white rounded-full justify-center items-center">
              <CustomIcon size={14} name="minus" />
            </View>
          }
          onPress={onDecrement}
        ></Button>
      </View>

      <View className="flex-1 justify-center bg-red-200">
        <Text size="md" weight="bold" position="center">
          {quantity}
        </Text>
      </View>

      <View className="flex-1 bg-red-400">
        <Button
          roundness="full"
          role="white"
          className="p-1"
          icon={
            <View className="w-full h-full rounded-full justify-center items-center">
              <CustomIcon size={14} name="plus2" />
            </View>
          }
          onPress={onIncrement}
        ></Button>
      </View>
    </View>
  );
};
