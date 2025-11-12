import * as Settings from "expo-settings";
import React, { useEffect, useState } from "react";
import { Button, Text, View } from "react-native";

export default function App() {
  const [theme, setTheme] = useState<string>(Settings.getTheme());
  const nextTheme = theme === "light" ? "dark" : "light";

  useEffect(() => {
    const subscription = Settings.addThemeListener(({ theme: newTheme }) => {
      setTheme(newTheme);
    });
    return () => subscription.remove();
  }, [setTheme]);

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: theme === "dark" ? "#000" : "#fff",
      }}
    >
      <Text style={{ color: theme === "dark" ? "#fff" : "#000" }}>
        Theme: {theme}
      </Text>
      <Button
        title="change theme"
        onPress={() => Settings.setTheme(nextTheme)}
      />
    </View>
  );
}
