import { FlashList } from "@shopify/flash-list";
import { ArticleCard } from "@components";
import { View } from "react-native";

type Article = {
  id: string;
  name: string;
  description: string;
  price: string;
  image: any;
  tag: string;
};

export type ArticleListProps = {
  articles: Article[];
  horizontal?: boolean;
  disabled?: boolean;
};

export const ArticlesList = ({
  articles,
  horizontal,
  disabled,
}: ArticleListProps) => {
  return (
    <FlashList
      scrollEnabled={!disabled}
      horizontal={horizontal}
      numColumns={horizontal ? 1 : 2}
      estimatedItemSize={200}
      showsHorizontalScrollIndicator={false}
      showsVerticalScrollIndicator={false}
      data={articles}
      ListFooterComponent={() => <View className={horizontal ? "pl-4" : ""} />}
      renderItem={({ item, index }: { item: Article; index: number }) => (
        <ArticleCard
          tag={item.tag}
          wishlistButton
          horizontal={horizontal}
          backgroundColor="#f4f4f4"
          key={item.id}
          name={item.name}
          description={item.description}
          price={item.price + "€"}
          image={item.image}
        />
      )}
    />
  );
};
