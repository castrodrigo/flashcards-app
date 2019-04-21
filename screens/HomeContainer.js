import React from "react";
import { connect } from "react-redux";
import { handleGetDecks } from "../actions/decks";
import HomeScreen from "./HomeScreen";
import Header from "../components/Header";

class HomeContainer extends React.Component {
  static navigationOptions = {
    header: <Header>My Decks</Header>
  };
  componentDidMount() {
    this.props.getDecks();
  }
  render() {
    return (
      <HomeScreen
        decksMap={this.props.decksMap}
        decks={this.props.decks}
        navigation={this.props.navigation}
      />
    );
  }
}

const mapStateToProps = ({ decks }) => ({
  decksMap: Object.keys(decks).sort(
    (a, b) => decks[b].timestamp - decks[a].timestamp
  ),
  decks
});

const mapDispatchToProps = dispatch => ({
  getDecks: () => dispatch(handleGetDecks())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomeContainer);
