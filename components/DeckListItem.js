import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components/native";
import DeckDisplay from "./DeckDisplay";

const Item = styled.TouchableOpacity`
  border-bottom-width: 1px;
  border-bottom-color: #ccc;
  min-height: 130px;
`;

const DeckListItem = ({ navigation, deck, cardsCount }) => (
  <Item onPress={() => navigation.navigate("Deck", { id: deck.id })}>
    <DeckDisplay {...deck} cardsCount={cardsCount} />
  </Item>
);

DeckListItem.propTypes = {
  navigation: PropTypes.object.isRequired,
  deck: PropTypes.object.isRequired,
  cardsCount: PropTypes.number
};

export default DeckListItem;
