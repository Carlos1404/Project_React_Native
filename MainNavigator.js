import {createStackNavigator, createAppContainer} from 'react-navigation';
import CardDetailsScreen  from "./CardDetailsScreen";
import CardsListScreen  from "./CardsListScreen";

const MainNavigator = createStackNavigator({
  CardsList: {screen: CardsListScreen},
  CardDetails: {screen: CardDetailsScreen},
});

const Navigator = createAppContainer(MainNavigator);

export default Navigator;