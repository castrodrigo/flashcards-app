import React from "react";
import { View } from "react-native";
import styled from "styled-components/native";
import { FontAwesome, AntDesign } from "@expo/vector-icons";
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

const Card = styled.ScrollView`
  width: 200px;
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
  padding: 10px;
  border-radius: 12px;
  border-bottom-width: 3px;
  flex: 1;
  flex-direction: row;
  justify-content: center;
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
    disabled && " background: #ccc;border-bottom-color: #c0c0c0;"}
`;

const Wrong = styled(Button)`
  padding: 20px;
  flex: 3;
  background: #e53a3b;
  border-bottom-color: #ed6565;
  ${({ disabled }) =>
    disabled && " background: #ccc;border-bottom-color: #c0c0c0;"}
`;

export default class QuizScreen extends React.Component {
  static navigationOptions = ({ navigation }) => ({
    header: <Header navigation={navigation}>Quiz</Header>
  });

  state = {
    showAnswer: false
  };

  handleShowAnswer = () => {
    this.setState({ showAnswer: true });
  };

  handleSubmit = status => {
    // this.props.submit(status)
  };

  render() {
    return (
      <Container>
        <Title>Deck Lorem Lorem Quiz</Title>
        <TotalCards>
          Card <HighLight>1</HighLight> of <HighLight>12</HighLight>
        </TotalCards>
        <CardContainer>
          <View style={{ flex: 1 }} />
          <Card>
            <CardQuestion>
              What is the color of the white horse of Napoelon?
            </CardQuestion>
            {this.state.showAnswer ? (
              <CardAnswer>White</CardAnswer>
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
            onPress={() => this.handleSubmit(true)}
            disabled={!this.state.showAnswer}
          >
            <AntDesign name={"checkcircleo"} size={20} color="#FFF" />
            <ButtonLabel>Correct!</ButtonLabel>
          </Correct>
          <View style={{ flex: 1 }} />
          <Wrong
            onPress={() => this.handleSubmit(false)}
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
