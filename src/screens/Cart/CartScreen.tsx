import { useState } from "react";
import { View } from "react-native";
import { PanGestureHandler } from "react-native-gesture-handler";
import Animated, { useSharedValue } from "react-native-reanimated";

export function CartScreen({ navigation }) {
  const [touchY, setTouchY] = useState(0);

  return (
    <View
      className="h-full w-full px-5 justify-end content-end"
      onTouchEnd={(e) => {
        navigation.goBack();
      }}
    >
      <View
        onTouchStart={(e) => setTouchY(e.nativeEvent.pageY)}
        onTouchEnd={(e) => {
          if (e.nativeEvent.pageY - touchY > 20) navigation.goBack();
        }}
        style={{ padding: 50 }}
        className="rounded-xl  h-20 w-full mb-32 bg-white shadow-lg"
      />
    </View>
  );
}
