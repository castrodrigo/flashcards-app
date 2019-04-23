import React from "react";
import { Keyboard } from "react-native";
import styled from "styled-components/native";
import Header from "../components/Header";
import Container from "../components/Layout/Container";
import Title from "../components/Layout/Title";
import Description from "../components/Layout/Description";
import Button, { ButtonLabel } from "../components/Layout/Button";
import Form from "../components/Form/Form";
import Input from "../components/Form/Input";
import ErrorMessage from "../components/Form/ErrorMessage";

const SaveButton = styled(Button)`
  background: #a560e7;
  border-bottom-color: #b881ec;
`;

export default class NewCardScreen extends React.Component {
  static navigationOptions = ({ navigation }) => ({
    header: <Header navigation={navigation}>New Card</Header>
  });

  state = {
    question: "",
    answer: "",
    error: false
  };

  handleSubmit = () => {
    const { question, answer } = this.state;
    if (question !== "" && answer !== "") {
      return this.props.onSubmit({ question, answer });
    }
    return this.setState({ error: true });
  };

  handleChange = (data, field) =>
    this.setState({ [field]: data, error: false });

  render() {
    return (
      <Container>
        <Title>Creating a new card for "{this.props.deck.name}"</Title>
        <Description>
          You can create as many Cards you want in this Deck. Each Card behaves
          as a single question in the Quiz.
        </Description>
        <Form>
          <Input
            placeholder="Question"
            maxLength={60}
            onBlur={Keyboard.dismiss}
            onChangeText={e => this.handleChange(e, "question")}
          />
          <Input
            placeholder="Answer"
            maxLength={60}
            onBlur={Keyboard.dismiss}
            onChangeText={e => this.handleChange(e, "answer")}
          />
          {this.state.error && (
            <ErrorMessage>
              Do not forget to add a Question and an Answer for your new Card
            </ErrorMessage>
          )}
          <SaveButton onPress={this.handleSubmit}>
            <ButtonLabel>Create New Card</ButtonLabel>
          </SaveButton>
        </Form>
      </Container>
    );
  }
}
