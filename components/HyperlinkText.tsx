import * as React from "react";
import {
  Linking,
  StyleProp,
  StyleSheet,
  Text,
  TextStyle,
  TouchableOpacity,
} from "react-native";

export interface IProps {
  href: string;
  children: React.ReactNode;
  style?: StyleProp<TextStyle>;
}

export default function HyperlinkText({ href, style, children }: IProps) {
  const handlePress = React.useCallback(() => {
    Linking.openURL(href);
  }, [href]);

  return (
    <TouchableOpacity onPress={handlePress}>
      <Text style={[styles.link, style]}>{children}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  link: {
    color: "blue",
  },
});
