import { correctGuess, actionTypes } from "./index";

describe("correctGuess", () => {
  test("returns an action object with type `CORRECT_GUESS`", () => {
    const action = correctGuess();
    expect(action).toEqual({ type: actionTypes.CORRECT_GUESS });
  });
});
