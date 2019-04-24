import { connect } from "react-redux";
import { handleAddDeck } from "../actions/decks";
import NewDeckScreen from "./NewDeckScreen";

const mapDispatchToProps = dispatch => ({
  submitDeck: deck => dispatch(handleAddDeck(deck))
});

const mapProps = (state, { submitDeck }, { navigation }) => ({
  onSubmit: deck =>
    submitDeck(deck).then(({ id }) => navigation.navigate("Deck", { id }))
});

export default connect(
  null,
  mapDispatchToProps,
  mapProps
)(NewDeckScreen);
