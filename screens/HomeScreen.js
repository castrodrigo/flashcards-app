import React from "react";
import styled from "styled-components/native";
import DeckListItem from "../components/DeckListItem";

const Container = styled.ScrollView`
  flex: 1;
`;

export default class HomeScreen extends React.Component {
  render() {
    return (
      <Container>
        {this.props.decksMap.map(id => (
          <DeckListItem
            key={id}
            deck={this.props.decks[id]}
            cardsCount={
              this.props.cards[id] && Object.keys(this.props.cards[id]).length
            }
            navigation={this.props.navigation}
          />
        ))}
      </Container>
    );
  }
}
