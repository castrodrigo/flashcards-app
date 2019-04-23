import React from "react";
import PropTypes from "prop-types";
import { View } from "react-native";
import styled from "styled-components/native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import Container from "../components/Layout/Container";
import Highlight from "../components/Layout/Highlight";
import Title from "../components/Layout/Title";
import Button, { ButtonLabel } from "../components/Layout/Button";

const TotalCards = styled.Text`
  font-size: 14px;
  margin-top: 10px;
`;

const CardContainer = styled.View`
  flex-direction: row;
  padding: 60px 10px;
  justify-content: center;
`;

const Card = styled.View`
  flex: 4;
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

const StyledButton = styled(Button)`
  padding: 20px 10px;
  background-color: #0077cc;
  flex: 3;
`;

const SubmitContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

const QuizScoreScreen = ({ deckName, score, onRestart, onFinish }) => (
  <Container>
    <Title>Completed!</Title>
    <TotalCards>
      You have completed <Highlight>{deckName}</Highlight> Quiz!
    </TotalCards>
    <CardContainer>
      <View style={{ flex: 1 }} />
      <Card>
        <Score>{score}%</Score>
      </Card>
      <View style={{ flex: 1 }} />
    </CardContainer>
    <SubmitContainer>
      <StyledButton onPress={onRestart}>
        <MaterialCommunityIcons name={"restart"} size={20} color="#FFF" />
        <ButtonLabel>Run Again!</ButtonLabel>
      </StyledButton>
      <View style={{ flex: 1 }} />
      <StyledButton onPress={onFinish}>
        <MaterialCommunityIcons name={"door"} size={20} color="#FFF" />
        <ButtonLabel>Go to Deck</ButtonLabel>
      </StyledButton>
    </SubmitContainer>
  </Container>
);

QuizScoreScreen.propTypes = {
  deckName: PropTypes.string.isRequired,
  score: PropTypes.number.isRequired,
  onRestart: PropTypes.func.isRequired,
  onFinish: PropTypes.func.isRequired
};

export default QuizScoreScreen;
