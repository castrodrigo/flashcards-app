import React from "react";
import styled from "styled-components/native";
import { FontAwesome, MaterialIcons } from "@expo/vector-icons";
import Header from "../components/Header";
import DeckDisplay from "../components/DeckDisplay";

const Container = styled.ScrollView`
  flex: 1;
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
  margin: 16px;
  border-radius: 12px;
  border-bottom-width: 3px;
  flex: 1;
  flex-direction: row;
  justify-content: center;
`;

const StartQuiz = styled(Button)`
  background: #a560e7;
  border-bottom-color: #b881ec;
`;

const AddNewCard = styled(Button)`
  background: #e53a3b;
  border-bottom-color: #ed6565;
`;

export default class DeckScreen extends React.Component {
  static navigationOptions = ({ navigation }) => ({
    header: <Header navigation={navigation}>Deck</Header>
  });

  render() {
    return (
      <Container>
        <DeckDisplay />
        <StartQuiz>
          <FontAwesome name={"question-circle-o"} size={20} color="#FFF" />
          <ButtonLabel>Start Quiz</ButtonLabel>
        </StartQuiz>
        <AddNewCard onPress={() => this.props.navigation.navigate("NewCard")}>
          <MaterialIcons name={"library-add"} size={20} color="#FFF" />
          <ButtonLabel>Add a New Card</ButtonLabel>
        </AddNewCard>
      </Container>
    );
  }
}
