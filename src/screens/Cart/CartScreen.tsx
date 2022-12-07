import {
  ArticleCard,
  Avatar,
  Button,
  CustomIcon,
  Text,
  QuantitySelector,
} from "@components";
import { useState } from "react";
import { View } from "react-native";

function SellerHeader() {
  return (
    <View className="w-full p-3 flex-row">
      <View className="flex-1">
        <Avatar
          size={34}
          influencer={{
            image: require("@assets/images/influencer.png"),
            name: "Gotaga",
          }}
        />
      </View>
      <View className="justify-center">
        <Text>Un code promo ?</Text>
      </View>
    </View>
  );
}

function ArticleItem() {
  const [quantity, setQuantity] = useState(0);

  return (
    <View className="flex-row p-3">
      <View className="w-24 h-28">
        <ArticleCard
          size={"flex"}
          image={require("@assets/images/article1.png")}
        />
      </View>
      <View className="flex-1 pl-5 pb-2">
        <View className="flex-1 pr-1">
          <Text position="left" color="neutral-muted" family="DM">
            Baskets for running
          </Text>
          <View className="flex-row pt-2">
            <View className="flex-1">
              <Text position="left">42</Text>
            </View>

            <View>
              <Text weight="bold" position="left">
                34 €
              </Text>
            </View>
          </View>
        </View>
        <View className="flex-row justify-end pl-10">
          <View className="pr-4">
            <Button
              roundness="full"
              role="empty"
              icon={
                <View className="w-14 h-10 rounded-full bg-[#f0f0f0] justify-center items-center">
                  <CustomIcon size={24} name="trash" />
                </View>
              }
            ></Button>
          </View>
          <View className="flex-1">
            <QuantitySelector
              quantity={quantity}
              onDecrement={() => quantity > 0 && setQuantity(quantity - 1)}
              onIncrement={() => quantity < 20 && setQuantity(quantity + 1)}
            />
          </View>
        </View>
      </View>
    </View>
  );
}

export function CartScreen({ navigation }) {
  const [touchY, setTouchY] = useState(0);

  return (
    <View
      className="h-full w-full px-3 justify-end content-end"
      // onTouchEnd={(e) => {
      //   navigation.goBack();
      // }}
    >
      <View
        // onTouchStart={(e) => setTouchY(e.nativeEvent.pageY)}
        // onTouchEnd={(e) => {
        //   if (e.nativeEvent.pageY - touchY > 20) navigation.goBack();
        // }}
        className="rounded-xl w-full mb-32 bg-white shadow-lg p-2"
      >
        <View className="flex-row">
          <View className="flex-1 pl-5 p-6">
            <Text
              position="left"
              weight="bold"
              family="DM"
              size="xxl"
              color="black"
            >
              Cart
            </Text>
          </View>
          <View className="align-end p-3">
            <Button
              roundness="full"
              iconOnly
              role="grey"
              icon={<CustomIcon name="close" size={30} />}
            />
          </View>
        </View>

        <SellerHeader />
        <ArticleItem />
      </View>
    </View>
  );
}
