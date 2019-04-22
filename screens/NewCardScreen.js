import React from "react";
import { Keyboard } from "react-native";
import styled from "styled-components/native";
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

const Description = styled.Text`
  font-size: 14px;
  color: #3c3c3c;
  margin: 10px 0;
  padding: 10px 0;
`;

const Form = styled.View`
  margin-top: 10px;
  padding: 20px;
  border-width: 1px;
  border-color: #ccc;
  border-radius: 12px;
`;

const ErrorMessage = styled.Text`
  font-size: 12px;
  color: #f00;
  padding-top: 10px;
`;

const Input = styled.TextInput`
  border-color: #cccccc;
  border-bottom-width: 1;
  height: 50;
  font-size: 20;
  padding-left: 2px;
  padding-right: 2px;
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
  margin-top: 32px;
  border-radius: 12px;
  border-bottom-width: 3px;
  flex: 1;
  flex-direction: row;
  justify-content: center;
`;

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
