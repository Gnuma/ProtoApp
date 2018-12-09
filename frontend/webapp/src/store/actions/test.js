import * as actionTypes from "./actionTypes";

export const testOne = value => {
  return {
    type: actionTypes.TEST_ONE,
    payload: value
  };
};
