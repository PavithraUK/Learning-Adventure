export const initialState = {
  stars: 0,
  badges: [],
};

export function rewardReducer(state, action) {
  switch (action.type) {
    case "LOAD_STATE":
      return action.payload;

    case "ADD_STARS":
      return {
        ...state,
        stars: state.stars + action.payload,
      };

    case "ADD_BADGE":
      if (state.badges.includes(action.payload)) {
        return state;
      }

      return {
        ...state,
        badges: [...state.badges, action.payload],
      };

    case "RESET":
      return initialState;

    default:
      return state;
  }
}
