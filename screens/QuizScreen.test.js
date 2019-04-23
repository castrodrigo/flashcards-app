import React from "react";
import { shallow } from "enzyme";
import QuizScreen from "./QuizScreen";

const props = {
  deckName: "Deck Test",
  current: 10,
  total: 20,
  card: {
    question: "Question?",
    answer: "Answer!"
  },
  onSubmit: jest.fn()
};

describe("Render QuizScreen", () => {
  it("should render successfully", () => {
    const wrapper = shallow(<QuizScreen {...props} />);

    expect(wrapper).toMatchSnapshot();
  });
});
