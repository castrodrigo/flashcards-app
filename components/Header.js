import React from "react";
import { View, Text } from "react-native";
import styled from "styled-components/native";

const HeaderWrapper = styled.View`
  padding-top: 30px;
  align-items: center;
  background-color: #0077cc;
  border-bottom-width: 1px;
  border-bottom-color: #fcfcfc;
`;

const TextWrapper = styled.Text`
  text-transform: uppercase;
  color: #fff;
  font-weight: bold;
  padding: 20px;
`;

const Header = ({ children }) => (
  <HeaderWrapper>
    <TextWrapper>{children}</TextWrapper>
  </HeaderWrapper>
);

export default Header;
