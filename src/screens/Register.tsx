import React from "react";
import { Pressable, SafeAreaView, StyleSheet, Text } from "react-native";
import type { NativeStackScreenProps } from "@react-navigation/native-stack";

import Button from "@/components/Button";
import FormTextInput from "@/components/FormTextInput";
import { RootStackParamList } from "@/navigator";
import { theme } from "@/theme";

type Props = NativeStackScreenProps<RootStackParamList, "Register">;

export default function Register({ navigation }: Props) {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.text}>Welcome to Tasknote!</Text>

      <FormTextInput placeholder="Full Name" />
      <FormTextInput placeholder="Email Address" />
      <FormTextInput placeholder="Password" />

      <Button label="Login" onPress={() => {}} />

      <Pressable
        style={styles.link}
        onPress={() => navigation.navigate("Login")}
      >
        <Text style={{ color: theme.colors.primary }}>
          Alreaady have an account?
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
