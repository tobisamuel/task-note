import React from "react";
import { Pressable, SafeAreaView, StyleSheet, Text } from "react-native";
import type { NativeStackScreenProps } from "@react-navigation/native-stack";

import Button from "@/components/Button";
import FormTextInput from "@/components/FormTextInput";
import { RootStackParamList } from "@/navigator";
import { theme } from "@/theme";

type Props = NativeStackScreenProps<RootStackParamList, "Login">;

export default function Login({ navigation }: Props) {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.text}>Hey, Welcome Back!</Text>

      <FormTextInput placeholder="Email Address" />

      <FormTextInput placeholder="Password" />

      <Button label="Login" onPress={() => {}} />

      <Pressable
        style={styles.link}
        onPress={() => navigation.navigate("Register")}
      >
        <Text style={{ color: theme.colors.primary }}>
          Don’t have a Tasknote account?
        </Text>
      </Pressable>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.background,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: theme.spacing.l,
  },
  text: {
    color: theme.colors.primary,
    fontSize: 18,
    marginBottom: 56,
  },
  link: {
    position: "absolute",
    bottom: 32,
  },
});
