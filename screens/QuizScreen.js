import React from "react";
import PropTypes from "prop-types";
import { View } from "react-native";
import styled from "styled-components/native";
import { FontAwesome, AntDesign } from "@expo/vector-icons";
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

const Card = styled.ScrollView`
  flex: 4;
  height: 300px;
  background-color: #ffc802;
  border-radius: 16px;
  padding: 20px;
`;

const CardQuestion = styled.Text`
  margin-bottom: 30px;
  font-size: 16px;
  text-align: center;
  font-weight: bold;
  letter-spacing: 1px;
`;

const CardAnswer = styled.Text`
  padding: 20px 10px;
  background: #fff;
  font-size: 18px;
  text-align: center;
  font-weight: bold;
  letter-spacing: 1px;
  color: #1baff6;
`;

const ShowAnswer = styled(Button)`
  background: #a560e7;
  border-bottom-color: #b881ec;
`;

const SubmitContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

const Correct = styled(Button)`
  padding: 20px;
  flex: 3;
  background: #7ac70c;
  border-bottom-color: #95d353;
  ${({ disabled }) =>
    disabled && "background: #ccc; border-bottom-color: #c0c0c0;"}
`;

const Wrong = styled(Button)`
  padding: 20px;
  flex: 3;
  background: #e53a3b;
  border-bottom-color: #ed6565;
  ${({ disabled }) =>
    disabled && "background: #ccc; border-bottom-color: #c0c0c0;"}
`;

export default class QuizScreen extends React.Component {
  state = {
    showAnswer: false
  };

  handleShowAnswer = () => {
    this.setState({ showAnswer: true });
  };

  handleSubmit = status => {
    this.setState({ showAnswer: false });
    this.props.submit(status);
  };

  render() {
    const {
      deckName,
      current,
      total,
      card: { question, answer }
    } = this.props;

    return (
      <Container>
        <Title>Quiz of "{deckName}"</Title>
        <TotalCards>
          Card <Highlight>{current}</Highlight> of{" "}
          <Highlight>{total}</Highlight>
        </TotalCards>
        <CardContainer>
          <View style={{ flex: 1 }} />
          <Card>
            <CardQuestion>{question}</CardQuestion>
            {this.state.showAnswer ? (
              <CardAnswer>{answer}</CardAnswer>
            ) : (
              <ShowAnswer onPress={this.handleShowAnswer}>
                <FontAwesome name={"sticky-note-o"} size={20} color="#FFF" />
                <ButtonLabel>Show Answer</ButtonLabel>
              </ShowAnswer>
            )}
          </Card>
          <View style={{ flex: 1 }} />
        </CardContainer>
        <SubmitContainer>
          <Correct
            onPress={() => this.handleSubmit("correct")}
            disabled={!this.state.showAnswer}
          >
            <AntDesign name={"checkcircleo"} size={20} color="#FFF" />
            <ButtonLabel>Correct!</ButtonLabel>
          </Correct>
          <View style={{ flex: 1 }} />
          <Wrong
            onPress={() => this.handleSubmit("wrong")}
            disabled={!this.state.showAnswer}
          >
            <AntDesign name={"closecircleo"} size={20} color="#FFF" />
            <ButtonLabel>Wrong!</ButtonLabel>
          </Wrong>
        </SubmitContainer>
      </Container>
    );
  }
}

QuizScreen.propTypes = {
  deckName: PropTypes.string.isRequired,
  current: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  card: PropTypes.shape({
    question: PropTypes.string.isRequired,
    answer: PropTypes.string.isRequired
  })
};
