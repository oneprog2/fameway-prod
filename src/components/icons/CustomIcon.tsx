import { createIconSetFromIcoMoon } from "@expo/vector-icons";
import * as React from "react";
import { TextProps as TextPropsBase } from "react-native";

const Icon = createIconSetFromIcoMoon(
  require("@assets/fonts/selection.json"),
  "IcoMoon",
  "icomoon.ttf"
);

export type IconProps = TextPropsBase & {
  name: string;
  size: number;
  color: string;
};

export function CustomIcon(props: IconProps) {
  return <Icon {...props} />;
}
