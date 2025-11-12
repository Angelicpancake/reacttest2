import * as Settings from "expo-settings";
import { Text, View } from "react-native";

export default function App() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Theme: {Settings.getTheme()}</Text>
    </View>
  );
}
