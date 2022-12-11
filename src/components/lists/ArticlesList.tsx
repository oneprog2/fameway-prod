import { FlashList } from "@shopify/flash-list";
import { ArticleCard } from "@components";
import { View } from "react-native";

type Article = {
  id: string;
  name: string;
  description: string;
  price: string;
  image: any;
};

export type ArticleListProps = {
  articles: Article[];
  horizontal?: boolean;
};

export const ArticlesList = ({ articles, horizontal }: ArticleListProps) => {
  return (
    <FlashList
      horizontal={horizontal}
      numColumns={horizontal ? 1 : 2}
      estimatedItemSize={200}
      showsHorizontalScrollIndicator={false}
      showsVerticalScrollIndicator={false}
      data={articles}
      ListFooterComponent={() => <View className="pl-4" />}
      renderItem={({ item, index }: { item: Article; index: number }) => (
        <ArticleCard
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
