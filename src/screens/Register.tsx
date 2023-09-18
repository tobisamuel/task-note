import React from "react";
import {
  KeyboardAvoidingView,
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import type { NativeStackScreenProps } from "@react-navigation/native-stack";

import Button from "@/components/Button";
import FormTextInput from "@/components/FormTextInput";
import { RootStackParamList } from "@/navigator";
import { theme } from "@/theme";
import constants from "@/constants";

type Props = NativeStackScreenProps<RootStackParamList, "Register">;

export default function Register({ navigation }: Props) {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: theme.colors.background }}>
      <KeyboardAvoidingView
        style={styles.container}
        behavior={constants.IS_IOS ? "padding" : undefined}
      >
        <Text style={styles.text}>Welcome to Tasknote!</Text>

        <FormTextInput placeholder="Full Name" />
        <FormTextInput placeholder="Email Address" />
        <FormTextInput placeholder="Password" style={{ marginBottom: 16 }} />

        <Button label="Sign Up" onPress={() => {}} />

        <View
          style={{
            width: "100%",
            flexDirection: "row",
            justifyContent: "center",
            position: "absolute",
            display: "flex",
            gap: 4,
            alignItems: "center",
            bottom: 32,
          }}
        >
          <Text style={{ color: theme.colors.primary }}>
            Alreaady have an account?
          </Text>

          <Pressable onPress={() => navigation.navigate("Login")}>
            <Text style={{ color: theme.colors.primary }}>Login</Text>
          </Pressable>
        </View>
      </KeyboardAvoidingView>
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
    marginBottom: theme.spacing.xl,
  },
  link: {
    position: "absolute",
    bottom: 32,
  },
});
