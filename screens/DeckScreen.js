import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components/native";
import { FontAwesome, MaterialIcons } from "@expo/vector-icons";
import Header from "../components/Header";
import DeckDisplay from "../components/DeckDisplay";
import Container from "../components/Layout/Container";
import Button, { ButtonLabel } from "../components/Layout/Button";

const StartQuiz = styled(Button)`
  background: #a560e7;
  border-bottom-color: #b881ec;
  ${({ disabled }) =>
    disabled && "background: #ccc; border-bottom-color: #c0c0c0;"}
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
    const count = this.props.cardsMap.length;
    return (
      <Container>
        <DeckDisplay {...this.props.deck} cardsCount={count} />
        <StartQuiz
          onPress={() =>
            this.props.navigation.navigate("Quiz", {
              deckId: this.props.deck.id
            })
          }
          disabled={count === 0}
        >
          <FontAwesome name={"question-circle-o"} size={20} color="#FFF" />
          <ButtonLabel>Start Quiz</ButtonLabel>
        </StartQuiz>
        <AddNewCard
          onPress={() =>
            this.props.navigation.navigate("NewCard", {
              deckId: this.props.deck.id
            })
          }
        >
          <MaterialIcons name={"library-add"} size={20} color="#FFF" />
          <ButtonLabel>Add a New Card</ButtonLabel>
        </AddNewCard>
      </Container>
    );
  }
}

DeckScreen.propTypes = {
  cardsMap: PropTypes.array.isRequired,
  deck: PropTypes.shape({
    id: PropTypes.string.isRequired
  }).isRequired,
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired
  }).isRequired
};
