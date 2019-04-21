import * as api from "../api";
const uuidv1 = require("uuid/v1");

export const GET_DECKS = "GET_DECKS";
export const ADD_DECK = "ADD_DECK";

export function getDecks(decks) {
  return {
    type: GET_DECKS,
    decks
  };
}

export const handleGetDecks = () => dispatch =>
  api.getDecks().then(decks => dispatch(getDecks(JSON.parse(decks))));

const addDeck = deck => ({
  type: ADD_DECK,
  deck
});

export const handleAddDeck = data => dispatch => {
  const id = uuidv1();
  const deck = { id, ...data, timestamp: Date.now() };
  return api
    .addDeck({
      deck,
      key: id
    })
    .then(() => dispatch(addDeck(deck)));
};
