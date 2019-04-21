import React from "react";
import styled from "styled-components/native";
import Deck from "./Deck";

const Item = styled.View`
  padding: 10px;
  flex-direction: row;
  flex: 1;
`;

const TextWrapper = styled.View`
  padding-top: 4px;
  flex-shrink: 1;
`;

const Title = styled.Text`
  font-size: 24px;
  font-weight: bold;
  color: #1baff6;
`;

const Description = styled.Text`
  font-size: 12px;
  color: #3c3c3c;
  padding-top: 10px;
  padding-bottom: 10px;
`;

const TotalCards = styled.Text`
  font-size: 14px;
`;

const HighLight = styled.Text`
  font-weight: bold;
`;

const DeckDisplay = ({ name, description }) => (
  <Item>
    <Deck />
    <TextWrapper>
      <Title>{name}</Title>
      <Description>{description}</Description>
      <TotalCards>
        Cards: <HighLight>12</HighLight>
      </TotalCards>
    </TextWrapper>
  </Item>
);

export default DeckDisplay;
