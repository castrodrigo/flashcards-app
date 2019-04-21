import { GET_DECKS, ADD_DECK } from "../actions/decks";

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
    default:
      return state;
  }
};
