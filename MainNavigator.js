//import CardDetailsScreen from "./CardDetailsScreen";
import CardsListScreen from "./CardsListScreen";
import CardDetailScreen from "./CardDetailScreen";

import { createStackNavigator, createAppContainer } from "react-navigation";

const AppNavigator = createStackNavigator(
  {
    List: CardsListScreen,
    Details: CardDetailScreen
  },
  {
    initialRouteName: "List"
  }
);

export default AppNavigator;
