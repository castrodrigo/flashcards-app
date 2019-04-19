import React from "react";
import { ScrollView, Text } from "react-native";
import styled from "styled-components/native";
import Header from "../components/Header";
import DeckListItem from "../components/DeckListItem";

const Container = styled.View`
  flex: 1;
`;

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    header: <Header>My Decks</Header>
  };

  render() {
    return (
      <Container>
        <ScrollView>
          <DeckListItem />
        </ScrollView>
      </Container>
    );
  }
}
