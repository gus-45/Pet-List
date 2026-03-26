import { NavigationContainer } from "@react-navigation/native";
import { Navigator } from './src/navigation/AppNavigator';


export default function App() {
  return (
    <NavigationContainer>
      <Navigator />
    </NavigationContainer>
  )
}