import React from "react";
import { TouchableOpacity, Platform, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import styled from "styled-components/native";

const HeaderWrapper = styled.View`
  padding: 30px 16px 0;
  align-items: center;
  background-color: #0077cc;
  border-bottom-width: 1px;
  border-bottom-color: #fcfcfc;
  flex-direction: row;
`;
const TextWrapper = styled.Text`
  text-transform: uppercase;
  color: #fff;
  font-weight: bold;
  padding: 20px;
  align-self: center;
`;

const Header = ({ children, navigation }) => (
  <HeaderWrapper>
    <View style={{ flex: 1 }}>
      {navigation && (
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons
            name={Platform.OS === "ios" ? "ios-arrow-back" : "md-arrow-back"}
            size={20}
            color="#FFF"
          />
        </TouchableOpacity>
      )}
    </View>
    <TextWrapper>{children}</TextWrapper>
    <View style={{ flex: 1 }} />
  </HeaderWrapper>
);

export default Header;
