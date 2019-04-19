import React from "react";
import styled from "styled-components/native";

const Wrapper = styled.View`
  position: relative;
  width: 86px;
  height: 108px;
`;

const Card = styled.View`
  width: 60px;
  height: 90px;
  background-color: #ffc802;
  position: absolute;
  margin-top: 4px;
  margin-left: 4px;
  ${({ position }) =>
    position &&
    `
    margin-top: ${position * 4}px;
    margin-left: ${position * 4}px;
    opacity: ${(100 - position * 25) / 100};
  `}
`;

const Deck = () => (
  <Wrapper>
    <Card />
    <Card position={2} />
    <Card position={3} />
  </Wrapper>
);

export default Deck;
