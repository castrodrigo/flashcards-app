import React from "react";
import { View } from "react-native";
import styled from "styled-components/native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import Header from "../components/Header";

const Container = styled.ScrollView`
  flex: 1;
  padding: 16px;
`;

const Title = styled.Text`
  font-size: 24px;
  font-weight: bold;
  color: #1baff6;
`;

const TotalCards = styled.Text`
  font-size: 14px;
  margin-top: 10px;
`;

const HighLight = styled.Text`
  font-weight: bold;
`;

const CardContainer = styled.View`
  flex: 1;
  flex-direction: row;
  padding: 60px 10px;
  justify-content: center;
`;

const Card = styled.View`
  width: 200px;
  height: 300px;
  border-color: #ffc802;
  border-width: 2px;
  border-radius: 16px;
  padding: 20px;
  display: flex;
  justify-content: center;
`;

const Score = styled.Text`
  background: #fff;
  font-size: 56px;
  text-align: center;
  font-weight: bold;
  letter-spacing: 1px;
  color: #1baff6;
`;

const ButtonLabel = styled.Text`
  font-size: 16px;
  font-weight: bold;
  text-align: center;
  text-transform: uppercase;
  color: #fff;
  padding: 0 10px;
  align-self: center;
`;

const Button = styled.TouchableOpacity`
  padding: 20px 10px;
  background-color: #0077cc;
  border-radius: 12px;
  border-bottom-width: 3px;
  flex-direction: row;
  justify-content: center;
  flex: 3;
`;

const SubmitContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export default class QuizScoreScreen extends React.Component {
  render() {
    return (
      <Container>
        <Title>Completed!</Title>
        <TotalCards>
          You have completed <HighLight>{this.props.deckName}</HighLight> Quiz!
        </TotalCards>
        <CardContainer>
          <Card>
            <Score>{this.props.score}%</Score>
          </Card>
        </CardContainer>
        <SubmitContainer>
          <Button onPress={this.props.onRestart}>
            <MaterialCommunityIcons name={"restart"} size={20} color="#FFF" />
            <ButtonLabel>Run Again!</ButtonLabel>
          </Button>
          <View style={{ flex: 1 }} />
          <Button onPress={this.props.onFinish}>
            <MaterialCommunityIcons name={"door"} size={20} color="#FFF" />
            <ButtonLabel>Go to Deck</ButtonLabel>
          </Button>
        </SubmitContainer>
      </Container>
    );
  }
}
