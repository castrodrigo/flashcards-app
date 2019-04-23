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
    const { name, description } = this.state;
    if (name !== "") {
      return this.props.onSubmit({ name, description });
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
              Do not forget to define the name of the Deck
            </ErrorMessage>
          )}
          <SaveButton onPress={this.handleSubmit}>
            <ButtonLabel>Create New Deck</ButtonLabel>
          </SaveButton>
        </Form>
      </Container>
    );
  }
}
