import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components/native";
import DeckListItem from "../components/DeckListItem";

const Container = styled.ScrollView`
  flex: 1;
`;

const HomeScreen = ({ decksMap, decks, cards, navigation }) => (
  <Container>
    {decksMap.map(id => (
      <DeckListItem
        key={id}
        deck={decks[id]}
        cardsCount={cards[id] && Object.keys(cards[id]).length}
        navigation={navigation}
      />
    ))}
  </Container>
);

HomeScreen.propTypes = {
  decksMap: PropTypes.array.isRequired,
  decks: PropTypes.object.isRequired,
  cards: PropTypes.object.isRequired,
  navigation: PropTypes.object.isRequired
};

export default HomeScreen;
