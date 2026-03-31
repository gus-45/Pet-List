import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { ListaScreen } from "../view/screens/ListaScreen";
import { AdicionarScreen } from "../view/screens/AdicionarScreen";

type RootStackParams = {
  Lista: undefined;
  Adicionar: undefined;
};

const Stack = createNativeStackNavigator<RootStackParams>();

export function Navigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Lista"
        component={ListaScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen name="Adicionar" component={AdicionarScreen} />
    </Stack.Navigator>
  );
}
