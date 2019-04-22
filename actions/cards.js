import * as api from "../api";
const uuidv1 = require("uuid/v1");

export const GET_CARDS = "GET_CARDS";
export const ADD_CARD = "ADD_CARD";

export function getCards(cards) {
  return {
    type: GET_CARDS,
    cards
  };
}

export const handleGetCards = () => dispatch =>
  api.getCards().then(cards => dispatch(getCards(JSON.parse(cards))));

const addCard = card => ({
  type: ADD_CARD,
  card
});

export const handleAddCard = (data, deckId) => dispatch => {
  const id = uuidv1();
  const card = { id, ...data, deckId, timestamp: Date.now() };
  return api
    .addCard({
      card,
      key: id
    })
    .then(() => dispatch(addCard(card)));
};
