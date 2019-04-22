import React from "react";
import { connect } from "react-redux";
import { handleAddDeck } from "../actions/decks";
import QuizScreen from "./QuizScreen";
import QuizScoreScreen from "./QuizScoreScreen";
import Header from "../components/Header";

class QuizContainer extends React.Component {
  state = {
    correct: [],
    wrong: [],
    index: 0,
    total: 0
  };

  static navigationOptions = ({ navigation }) => ({
    header: <Header navigation={navigation}>Quiz</Header>
  });

  componentDidMount() {
    this.setState({ total: this.props.cardsMap.length });
  }

  handleSubmitResponse = (cardId, status) => {
    this.setState(prevState => ({
      [status]: [...prevState[status], cardId],
      index: prevState.index + 1
    }));
  };

  calculateScore = () => {
    const { total, wrong } = this.state;
    const each = Math.round(100 / total);
    return 100 - each * wrong.length;
  };

  render() {
    const { deck, cards, cardsMap } = this.props;
    const { total, index } = this.state;
    const current = index + 1;

    if (current > total) {
      return (
        <QuizScoreScreen
          deckName={deck.name}
          score={this.calculateScore()}
          onRestart={this.props.restart}
          onFinish={this.props.finish}
        />
      );
    }
    return (
      <QuizScreen
        deckName={deck.name}
        total={total}
        current={current}
        submit={status => this.handleSubmitResponse(cardsMap[index], status)}
        card={cards[cardsMap[index]]}
      />
    );
  }
}

const mapStateToProps = (
  { decks, cards },
  { navigation: { getParam, navigate } }
) => {
  const deckId = getParam("deckId");
  return {
    deck: decks[deckId],
    deckId,
    cardsMap: Object.keys(cards[deckId]),
    cards: cards[deckId],
    restart: () => navigate("Quiz", { id: deckId }),
    finish: () => navigate("Deck", { id: deckId })
  };
};

export default connect(mapStateToProps)(QuizContainer);
