import { connect } from "react-redux";
import { handleAddCard } from "../actions/cards";
import NewCardScreen from "./NewCardScreen";

const mapStateToProps = ({ decks }, { navigation: { getParam } }) => {
  const deckId = getParam("deckId");
  return {
    deck: decks[getParam("deckId")],
    deckId
  };
};

const mapDispatchToProps = dispatch => ({
  submitCard: (card, deckId) => dispatch(handleAddCard(card, deckId))
});

const mapProps = ({ deck, deckId }, { submitCard }, { navigation }) => {
  return {
    deck,
    onSubmit: card =>
      submitCard(card, deckId).then(() =>
        navigation.navigate("Deck", { deckId })
      )
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
  mapProps
)(NewCardScreen);
