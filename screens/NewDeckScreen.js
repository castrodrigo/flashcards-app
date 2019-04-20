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

export default class NewDeckScreen extends React.Component {
  static navigationOptions = {
    header: <Header>New Deck</Header>
  };

  state = {
    name: "",
    description: "",
    error: false
  };

  handleSubmit = () => {
    if (this.state.name !== "") {
      const { name, description } = this.state;
      // return this.props.onSubmit({ name, description });
      return;
    }
    return this.setState({ error: true });
  };
  handleChange = (data, field) =>
    this.setState({ [field]: data, error: false });

  render() {
    return (
      <Container>
        <Title>Creating a new Deck</Title>
        <Description>
          You can create a Deck to group a collection of topics that you would
          like to revisit. It is possible to trigger a Quiz through all the
          inserted questions.
        </Description>
        <Form>
          <Input
            placeholder="Name"
            maxLength={30}
            onBlur={Keyboard.dismiss}
            onChangeText={e => this.handleChange(e, "name")}
          />
          <Input
            placeholder="Description"
            maxLength={60}
            onBlur={Keyboard.dismiss}
            onChangeText={e => this.handleChange(e, "description")}
          />
          {this.state.error && (
            <ErrorMessage>
              Do not forget to define a name of the Deck
            </ErrorMessage>
          )}
          <SaveButton onPress={this.handleSubmit}>
            <ButtonLabel>Save</ButtonLabel>
          </SaveButton>
        </Form>
      </Container>
    );
  }
}
