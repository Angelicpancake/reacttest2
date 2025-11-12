// ExpoSettings.ts
import { EventEmitter, EventSubscription } from "expo-modules-core";
import ExpoSettingsModule from "./ExpoSettingsModule";

export type ThemeChangeEvent = {
  theme: string;
};

// Create an event emitter bound to the native module
const emitter = new EventEmitter(ExpoSettingsModule);

// Add listener for theme changes
export function addThemeListener(
  listener: (event: ThemeChangeEvent) => void
): EventSubscription {
  return emitter.addListener<ThemeChangeEvent>("onChangeTheme", listener);
}

// Get the current theme from native
export function getTheme(): string {
  return ExpoSettingsModule.getTheme();
}

// Set the theme in native
export function setTheme(theme: string): void {
  return ExpoSettingsModule.setTheme(theme);
}

//could be deprecated
