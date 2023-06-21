import { Pressable, StyleSheet, Text } from "react-native";
import React from "react";
import { theme } from "@/theme";

type Props = {
  disabled?: boolean;
  label: string;
  onPress: () => void;
};

const Button = ({ disabled, label, onPress }: Props) => {
  const containerStyle = [
    styles.container,
    disabled ? styles.containerDisabled : styles.containerEnabled,
  ];

  return (
    <Pressable style={containerStyle} onPress={onPress}>
      <Text style={styles.text}>{label}</Text>
    </Pressable>
  );
};

export default Button;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: theme.colors.foreground,
    paddingVertical: 12,
    borderRadius: 4,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: "rgba(255,255,255,0.7)",
  },
  containerEnabled: {
    opacity: 1,
  },
  containerDisabled: {
    opacity: 0.3,
  },
  text: {
    color: theme.colors.background,
    textAlign: "center",
    fontWeight: "600",
  },
});
