import React from "react";
import { ScrollView, Text } from "react-native";
import styled from "styled-components/native";

const Container = styled.View`
  flex: 1;
  padding-top: 30px;
`;

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    header: null
  };

  render() {
    return (
      <Container>
        <ScrollView>
          <Text>Home</Text>
        </ScrollView>
      </Container>
    );
  }
}
