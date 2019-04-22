import { connect } from "react-redux";
import DeckScreen from "./DeckScreen";

const mapStateToProps = ({ decks, cards }, { navigation: { getParam } }) => ({
  deck: decks[getParam("id")] || null,
  cardsMap: (cards[getParam("id")] && Object.keys(cards[getParam("id")])) || []
});

export default connect(mapStateToProps)(DeckScreen);
