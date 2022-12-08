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
    <View className="w-full flex-row">
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
        <Text size="sm">Un code promo ?</Text>
      </View>
    </View>
  );
}

function ArticleItem() {
  const [quantity, setQuantity] = useState(0);

  return (
    <View className="flex-row mt-5">
      <View className="w-24 h-32">
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

        <View className="flex-row items-center justify-end">
          <View className="flex-1 items-end pr-2">
            <Button
              roundness="full"
              role="grey"
              icon={<CustomIcon size={18} name="trash" />}
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

export function TotalAmount() {
  return (
    <View className="flex-row w-full absolute bottom-1">
      <View className="flex-1">
        <View className="flex-1">
          <Text family="DM" position="left" weight="bold" color="neutral-muted">
            Total
          </Text>
        </View>

        <View className="flex-1">
          <Text family="DM" size="xl" position="left" weight="bold">
            500.00 €
          </Text>
        </View>
      </View>
      <View className="flex-1">
        <Button
          label="Checkout"
          role="normal"
          size="lg"
          roundness="full"
          onPress={() => {}}
          iconOnly
        ></Button>
      </View>
    </View>
  );
}

export function Subtotal() {
  return (
    <View className="flex-row w-full border-b-[1px] border-[#E6E6E6] p-1">
      <View className="flex-1">
        <Text family="DM" position="left" weight="light" color="neutral-muted">
          Sub-total
        </Text>
      </View>

      <View>
        <Text family="DM" size="lg" position="left" weight="bold">
          90 €
        </Text>
      </View>
    </View>
  );
}

export function CartScreen({ closeCart }: { closeCart?: () => void }) {
  return (
    <View className="flex-1 m-4 mb-5">
      <View className="flex-row">
        <View className="flex-1 pl-6 py-5">
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
        <View className="align-end p-2">
          <Button
            onPress={closeCart}
            roundness="full"
            iconOnly
            role="grey"
            icon={<CustomIcon name="close" size={30} />}
          />
        </View>
      </View>
      <SellerHeader />
      <View className="mb-3">
        <ArticleItem />
        <Subtotal />
      </View>

      <TotalAmount />
    </View>
  );
}
