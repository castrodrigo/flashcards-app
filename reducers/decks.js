import { GET_DECKS, GET_DECK, ADD_DECK } from "../actions/decks";

export default (state = {}, action) => {
  switch (action.type) {
    case ADD_DECK:
      return {
        ...state,
        [action.deck.id]: action.deck
      };
    case GET_DECKS:
      return {
        ...state,
        ...action.decks
      };
    case GET_DECK:
    default:
      return state;
  }
};
