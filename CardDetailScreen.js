import React from "react";
import { Button } from "react-native";

class CardDetailsScreen extends React.Component {
  render() {
    return (
      <Button title="Go to Cards List" onPress={() => this.props.navigation.navigate("List")} />
    );
  }
}

export default CardDetailsScreen;
