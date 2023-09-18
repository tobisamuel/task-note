import React, { useCallback, useRef } from "react";
import {
  KeyboardAvoidingView,
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import type { NativeStackScreenProps } from "@react-navigation/native-stack";

import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";

import Button from "@/components/Button";
import FormTextInput, { FocusHandle } from "@/components/FormTextInput";
import { RootStackParamList } from "@/navigator";
import { theme } from "@/theme";

type Props = NativeStackScreenProps<RootStackParamList, "Login">;

SplashScreen.preventAutoHideAsync();

export default function Login({ navigation }: Props) {
  const [fontsLoaded] = useFonts({
    "DMSans-Thin": require("../../assets/fonts/DMSans-Thin.ttf"),
    "DMSans-Light": require("../../assets/fonts/DMSans-Light.ttf"),
    "DMSans-Regular": require("../../assets/fonts/DMSans-Regular.ttf"),
    "DMSans-Medium": require("../../assets/fonts/DMSans-Medium.ttf"),
    "DMSans-Bold": require("../../assets/fonts/DMSans-Black.ttf"),
    "DMSans-Black": require("../../assets/fonts/DMSans-Black.ttf"),
  });

  const passwordInputRef = useRef<FocusHandle>(null);

  function handleSubmitPress() {
    if (passwordInputRef.current) {
      1;
      passwordInputRef.current.focus();
    }
  }

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <SafeAreaView
      style={{ flex: 1, backgroundColor: theme.colors.background }}
      onLayout={onLayoutRootView}
    >
      <KeyboardAvoidingView style={styles.container} behavior="padding">
        <Text style={styles.text}>Hey, Welcome Back!</Text>

        <FormTextInput
          autoCorrect={false}
          keyboardType="email-address"
          returnKeyType="next"
          onSubmitEditing={handleSubmitPress}
          placeholder="Email"
          style={{
            fontFamily: "DMSans-Regular",
          }}
        />

        <FormTextInput
          ref={passwordInputRef}
          placeholder="Password"
          secureTextEntry={true}
          returnKeyType="done"
          style={{
            marginBottom: theme.spacing.m,
            fontFamily: "DMSans-Regular",
          }}
        />

        <Button label="Login" onPress={() => {}} />

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
          <Text
            style={{
              color: theme.colors.primary,
              fontFamily: "DMSans-Regular",
            }}
          >
            Don’t have a Tasknote account?
          </Text>

          <Pressable onPress={() => navigation.navigate("Register")}>
            <Text style={{ color: theme.colors.primary }}>Register</Text>
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
    fontFamily: "DMSans-Regular",
  },
  text: {
    fontFamily: "DMSans-Regular",
    color: theme.colors.primary,
    fontSize: 18,
    marginBottom: theme.spacing.xl,
  },
  link: {
    fontFamily: "DMSans-Regular",
    width: "100%",
    flexDirection: "column",
    position: "absolute",
    display: "flex",
    gap: 4,
    alignItems: "center",
    bottom: 32,
  },
});
