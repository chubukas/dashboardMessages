import { SIDEBAROPEN } from "./types";

export const Reducers = (state, action) => {
  switch (action.type) {
    case SIDEBAROPEN:
      return {
        ...state,
        sideBarOpen: action.payload,
      };

    default:
      throw new Error(`Unknown action type: ${action.type}`);
  }
};
