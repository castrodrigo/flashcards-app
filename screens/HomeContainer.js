import React from "react";
import { connect } from "react-redux";
import { handleInitialData } from "../actions/shared";
import HomeScreen from "./HomeScreen";
import Header from "../components/Header";

class HomeContainer extends React.Component {
  static navigationOptions = {
    header: <Header>My Decks</Header>
  };
  componentDidMount() {
    this.props.getInitialData();
  }
  render() {
    return (
      <HomeScreen
        decksMap={this.props.decksMap}
        decks={this.props.decks}
        cards={this.props.cards}
        navigation={this.props.navigation}
      />
    );
  }
}

const mapStateToProps = ({ decks, cards }) => ({
  decksMap: Object.keys(decks).sort(
    (a, b) => decks[b].timestamp - decks[a].timestamp
  ),
  cards,
  decks
});

const mapDispatchToProps = dispatch => ({
  getInitialData: () => dispatch(handleInitialData())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomeContainer);
