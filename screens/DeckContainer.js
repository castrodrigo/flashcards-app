import { connect } from "react-redux";
import DeckScreen from "./DeckScreen";

const mapStateToProps = ({ decks, cards }, { navigation }) => ({
  deck: decks[navigation.getParam("id")] || null,
  cards: []
});

export default connect(mapStateToProps)(DeckScreen);
