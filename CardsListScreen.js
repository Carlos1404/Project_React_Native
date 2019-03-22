import React from 'react';

class CardsListScreen extends React.Component {
    render() {
      const {navigate} = this.props.navigation;
      return (
        <Button
          title="Go to Card Details"
          onPress={() => navigate('Card Details', {name: 'CardDetailsScreen'})}
        />
      );
    }
  }

  export default CardsListScreen