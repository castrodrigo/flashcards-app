import React from "react";
import { Platform, StatusBar, View } from "react-native";
import { Provider } from "react-redux";
import { AppLoading, Asset, Font, Icon } from "expo";
import store from "./store";
import AppNavigator from "./navigation/AppNavigator";
import { setLocalNotification } from "./api/notification";

export default class App extends React.Component {
  state = {
    isLoadingComplete: false
  };

  componentDidMount() {
    setLocalNotification();
  }

  render() {
    if (!this.state.isLoadingComplete && !this.props.skipLoadingScreen) {
      return (
        <AppLoading
          startAsync={this._loadResourcesAsync}
          onError={this._handleLoadingError}
          onFinish={this._handleFinishLoading}
        />
      );
    } else {
      return (
        <Provider store={store}>
          <View style={{ flex: 1 }}>
            {Platform.OS === "ios" && <StatusBar barStyle="default" />}
            <AppNavigator />
          </View>
        </Provider>
      );
    }
  }

  _loadResourcesAsync = async () => {
    return Promise.all([
      Asset.loadAsync([]),
      Font.loadAsync({
        ...Icon.Ionicons.font,
        "space-mono": require("./assets/fonts/SpaceMono-Regular.ttf")
      })
    ]);
  };

  _handleLoadingError = error => {
    console.warn(error);
  };

  _handleFinishLoading = () => {
    this.setState({ isLoadingComplete: true });
  };
}
