# Flashcards App

## Intro

Compatible with `Android` and `iOS`.

Flashcards delivers a tool, where you can save a set of question/answers as cards and gorup them in a Deck. You can even set different topics in each deck.
When you have one or more cards in your deck, you can run trough a Quiz, where you can confirm if you answered right or wrong. In the end you have a final score based on your inputs.

## Timeline

Considering that this project is still on the embryonic phase, all the decks are saved persistently only on the device where it runs.
For future interactions, a service layer and sharing functionalities are projected.

## Setup Reference

For the bootstrap and setup [Create React-Native / Expo](https://docs.expo.io/versions/latest/introduction/installation/) was used.

## The Project

The project consists in a stateful native app, fully compatible with `Android` and `iOS`.

Some of the main functions are:

```
- List all decks
- Create a Deck
- Add cards to a Deck
- Run a Quiz on a Deck
```

Since there is no service layer yet, there is no authentication, but the notification layer is integrated with the OS already.

```
- Notification are dispatched every day around 20h
- If the user did a Quiz in that day, there is no notification
- If the user did not do a Quiz in that day, a notification will be dispatched. One per day.
```

The main focus here is to have an application built with `React` and `React Native`, with central state using `Redux`, and dispatching actions though `Thunk`.
The application uses the `Expo Client`, since `Create React-Native App` was merged to it.

## Technical

> All the commands shown on this section comprise both package managers: **yarn** and **npm** as well some **expo** specific commands.

### To Run

In order to run the project.

1. Clone the repository

```bash
git clone git@github.com:castrodrigo/flashcards-app
```

2. Inside the cloned folder

- 2.1 Enter in the folder

- 2.1.a Install the packages with: **[yarn](https://yarnpkg.com/lang/en/)** or **[npm](https://www.npmjs.com/)**

```bash
yarn
```

```bash
npm install
```

- 2.1.b After installing the packages, to run the app:

```bash
yarn start
```

```bash
npm start
```

```bash
expo start
```

- 2.1.c The application server run will start spinning and it will prompt many options. You can select your preferred emulator, as `Android` or `iOS`, run in your own device, using [Expo App](https://play.google.com/store/apps/details?id=host.exp.exponent&hl=en) and see a nice terminal browser by typing `d` in the terminal that runs `Expo`

- 2.2 In another terminal window, enable the react-native-debugger if necessary: (Installation instructions [here](https://github.com/jhen0409/react-native-debugger))

```bash
open "rndebugger://set-debugger-loc?host=localhost&port=19001"
```

### Tests

The appllications run tests using `Jest` and `Enzyme`

1. Run tests

```bash
yarn test
```

```bash
npm run test
```

2. Run test coverage

```bash
yarn test --coverage
```

```bash
npm run test --coverage
```

### Project Screens

- Home Screen - Lists all decks
- Deck Screen - Info about the deck; Start a quiz button; Create new card button
- Create New Card Screen - Add new card to specific deck
- Quiz Screen - Run trought all the cards in a deck, select correct or wrong
- Create New Deck Screen - Add new deck to app

### Improvements

- Increase DRY where is possible
- Increase test coverage
- Avoid passing full objects down
- Break some big and complex components into smaller ones
