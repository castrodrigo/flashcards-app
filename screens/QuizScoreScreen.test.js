import React from "react";
import { shallow } from "enzyme";
import QuizScoreScreen from "./QuizScoreScreen";

const props = {
  deckName: "Deck Test",
  score: 12,
  onRestart: jest.fn(),
  onFinish: jest.fn()
};

describe("Render QuizScoreScreen", () => {
  it("should render successfully", () => {
    const wrapper = shallow(<QuizScoreScreen {...props} />);

    expect(wrapper).toMatchSnapshot();
  });
});
