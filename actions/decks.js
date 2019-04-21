import * as api from "../api";
import * as uuidv1 from "uuid/v1";

export const GET_DECKS = "GET_DECKS";
export const GET_DECK = "GET_DECK";
export const ADD_DECK = "ADD_DECK";

export function getDecks(decks) {
  return {
    type: GET_DECKS,
    decks
  };
}

export const getDeck = deck => ({
  type: GET_DECK,
  deck
});

const addDeck = deck => ({
  type: ADD_DECK,
  deck
});

export const handleAddDeck = data => dispatch =>
  api
    .addDeck({
      id: uuidv1(),
      ...data,
      timestamp: Date.now()
    })
    .then(deck => dispatch(addDeck(deck)));
