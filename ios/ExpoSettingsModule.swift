import ExpoModulesCore

public class ExpoSettingsModule: Module {
    public func definition() -> ModuleDefinition {
        Name("ExpoSettings")
        
        Events("onChangeTheme")
          
        Function("setTheme") { (theme: String) -> Void in
            UserDefaults.standard.set(theme, forKey: "theme")
            sendEvent("onChangeTheme", ["theme" : theme])
            print("Theme set to \(theme)") 
        }

        Function("getTheme") { () -> String in
            UserDefaults.standard.string(forKey: "theme") ??
            "system"
        }
    }
}
