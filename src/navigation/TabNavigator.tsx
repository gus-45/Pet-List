import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { ListaScreen } from "../view/screens/ListaScreen";
import { AdicionarScreen } from "../view/screens/AdicionarScreen";
import { Tabs } from "react-native-screens";
import { EuScreen } from "../view/screens/EuScreen";
import { Navigator } from "./AppNavigator";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

type RootStackParams = {
  Lista: undefined;
  Eu: undefined;
};

const Tab = createBottomTabNavigator<RootStackParams>();

export function TabNavigator() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Lista" component={Navigator} options={ { headerShown: false}} />
      <Tab.Screen name="Eu" component={EuScreen} />
    </Tab.Navigator>
  );
}
