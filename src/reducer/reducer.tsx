import { parseDate } from "@internationalized/date";

import { parsedReverDate } from "../utils/parsedReverDate";

import { Action, State } from "./reducer.types";

const initialState: State = {
  userModel: null,
  id: null,
};

const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case "UPDATE_USER":
      return {
        ...state,
        userModel: {
          ...action.payload,
          statusPLD: undefined,
          actions: undefined,
          birthday:
            typeof action.payload.birthday === "string"
              ? parseDate(parsedReverDate(action.payload.birthday))
              : action.payload.birthday,
        },
        id: null,
      };
    case "DELETE_USER":
      return {
        ...state,
        userModel: null,
        id: action.payload.id,
      };
    default:
      return state;
  }
};

export { initialState, reducer };
