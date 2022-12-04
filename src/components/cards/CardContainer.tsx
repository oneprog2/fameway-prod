import { variants, VariantsProps } from "nativewind";
import React from "react";
import { View } from "react-native";
import { Light } from "@components";

const CardContainerClassName = variants("flex-1 overflow-hidden", {
  variants: {
    // role: {
    //   normal: "bg-neutral-a-3 border border-neutral-a-3",
    //   primary: "bg-fameway",
    //   critical: "bg-critical-9",
    //   empty: "bg-transparent border border-neutral-a-3",
    // },
    padding: {
      none: "",
      normal: "p-2",
      md: "p-4",
      lg: "p-8",
    },
    roundness: {
      none: "",
      normal: "rounded-lg",
      xl: "rounded-3xl",
      full: "rounded-full",
    },
    disabled: {
      true: "",
      false: "",
    },
  },
});

export type CardContainerProps = VariantProps<typeof CardContainerClassName> & {
  children: React.ReactNode;
};

export function CardContainer(props: CardContainerProps) {
  const {
    children,
    padding = "normal",
    roundness = "normal",
    backgroundColor = "#ffce00",
  } = props;

  return (
    <View
      style={{ backgroundColor: backgroundColor }}
      className={CardContainerClassName({
        roundness,
        padding,
      })}
    >
      <View className="absolute">
        <Light color="#FFFFFF" />
      </View>
      {children}
    </View>
  );
}
