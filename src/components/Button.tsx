import { Pressable, PressableProps, StyleSheet, Text } from "react-native";
import React from "react";
import { theme } from "@/theme";

type Props = PressableProps & {
  disabled?: boolean;
  label: string;
};

const Button = ({ disabled, label, onPress, ...otherProps }: Props) => {
  const containerStyle = [
    styles.container,
    disabled ? styles.containerDisabled : styles.containerEnabled,
  ];

  return (
    <Pressable style={containerStyle} onPress={onPress} {...otherProps}>
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
    textTransform: "uppercase",
  },
});
