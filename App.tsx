import { SafeAreaView } from "react-native-safe-area-context";
import WebView from "react-native-webview";

export const App: React.FC = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <WebView
        source={{ uri: "http://projetos.supremaux.com/aliancasgold/" }}
      />
    </SafeAreaView>
  );
};

export default App;
