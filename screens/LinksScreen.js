import React from "react";
import styled from "styled-components/native";
import { ExpoLinksView } from "@expo/samples";

const Container = styled.ScrollView`
  flex: 1;
  padding-top: 15;
`;

export default class LinksScreen extends React.Component {
  static navigationOptions = {
    title: "Links"
  };

  render() {
    return (
      <Container>
        <ExpoLinksView />
      </Container>
    );
  }
}
