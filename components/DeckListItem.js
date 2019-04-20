import React from "react";
import styled from "styled-components/native";
import DeckDisplay from "./DeckDisplay";

const Item = styled.TouchableOpacity`
  border-bottom-width: 1px;
  border-bottom-color: #ccc;
`;

const DeckListItem = props => (
  <Item onPress={() => props.navigation.navigate("Deck")}>
    <DeckDisplay />
  </Item>
);

export default DeckListItem;
