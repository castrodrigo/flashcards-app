import React from "react";
import {
  createStackNavigator,
  createBottomTabNavigator
} from "react-navigation";
import TabBarIcon from "../components/TabBarIcon";
import HomeScreen from "../screens/HomeScreen";
import DeckScreen from "../screens/DeckScreen";
import NewCardScreen from "../screens/NewCardScreen";
import NewDeckContainer from "../screens/NewDeckContainer";
import QuizScreen from "../screens/QuizScreen";
import QuizScoreScreen from "../screens/QuizScoreScreen";

const HomeStack = createStackNavigator({
  Home: HomeScreen,
  Deck: DeckScreen,
  NewCard: NewCardScreen,
  Quiz: QuizScreen,
  QuizScore: QuizScoreScreen
});

HomeStack.navigationOptions = {
  tabBarLabel: "My Decks",
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={"cards-outline"}
      iconFamily="community"
    />
  )
};

const NewDeckStack = createStackNavigator({
  NewDeck: NewDeckContainer
});

NewDeckStack.navigationOptions = {
  tabBarLabel: "New Deck",
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} name={"plus-circle"} iconFamily="awesome" />
  )
};

export default createBottomTabNavigator({
  HomeStack,
  NewDeckStack
});
