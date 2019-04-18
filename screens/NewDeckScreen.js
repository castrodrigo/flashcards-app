import React from "react";
import styled from "styled-components/native";
import Header from "../components/Header";

const Container = styled.ScrollView`
  flex: 1;
`;

export default class NewDeckScreen extends React.Component {
  static navigationOptions = {
    header: <Header>New Deck</Header>
  };

  render() {
    return <Container />;
  }
}
