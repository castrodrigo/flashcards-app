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
      const cardData = Object.keys(cards).map(id => ({
        [cards[id].deckId]: {
          ...cardData[cards[id].deckId],
          [id]: cards[id]
        }
      }));
      return {
        ...state,
        ...cardData
      };
    default:
      return state;
  }
};
