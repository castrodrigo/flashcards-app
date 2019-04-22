import { GET_CARDS, ADD_CARD } from "../actions/cards";

export default (state = {}, action) => {
  switch (action.type) {
    case ADD_CARD:
      return {
        ...state,
        [action.card.deckId]: {
          ...state[action.card.deckId],
          [action.card.id]: action.card
        }
      };
    case GET_CARDS:
      const { cards } = action;
      const cardsObject = {};
      const decksObject = {};
      cards !== null &&
        Object.keys(action.cards).map(card => {
          cardsObject[card] = cards[card];
          decksObject[cards[card].deckId] = {
            ...state[cards[card].deckId],
            ...cardsObject
          };
        });
      return {
        ...state,
        ...decksObject
      };
    default:
      return state;
  }
};
