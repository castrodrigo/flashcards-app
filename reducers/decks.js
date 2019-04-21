import { GET_DECKS, GET_DECK, ADD_DECK } from "../actions/decks";

export default (state = {}, action) => {
  const { deck } = action;
  switch (action.type) {
    case ADD_DECK:
      return {
        ...state,
        [deck.id]: deck
      };
    case GET_DECKS:
    case GET_DECK:
    default:
      return state;
  }
};
