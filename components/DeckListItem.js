import React from "react";
import styled from "styled-components/native";
import DeckDisplay from "./DeckDisplay";

const Item = styled.TouchableOpacity`
  border-bottom-width: 1px;
  border-bottom-color: #ccc;
  min-height: 130px;
`;

const DeckListItem = ({ navigation, deck }) => (
  <Item onPress={() => navigation.navigate("Deck")}>
    <DeckDisplay {...deck} />
  </Item>
);

export default DeckListItem;
