import React from "react";
import { Button } from "react-native";
class CardsListScreen extends React.Component {
  render() {
    console.log("props : ", this.props);
    return (
      <Button
        title="Go to Card Details"
        onPress={() => (console.log("isPressed"), this.props.navigation.navigate("Details"))}
      />
    );
  }
}

export default CardsListScreen;
