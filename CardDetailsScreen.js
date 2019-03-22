import React from 'react';

class CardDetailsScreen extends React.Component {
    render() {
      const {navigate} = this.props.navigation;
      return (
        <Button
          title="Go to Cards List"
          onPress={() => navigate('Cards List', {name: 'CardsListScreen'})}
        />
      );
    }
  }

  export default CardDetailsScreen