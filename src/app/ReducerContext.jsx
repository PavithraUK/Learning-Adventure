import { createContext, useContext, useReducer, useEffect } from "react";

import { rewardReducer, initialState } from "./rewardsReducer";

import { useAuth } from "./AuthContext";

const RewardsContext = createContext();

export function RewardsProvider({ children }) {
  const { user } = useAuth();

  const [state, dispatch] = useReducer(rewardReducer, initialState);

  // Load rewards when user changes
  useEffect(() => {
    if (!user) return;

    const saved = localStorage.getItem(`rewards-${user.username}`);

    if (saved) {
      dispatch({
        type: "LOAD_STATE",
        payload: JSON.parse(saved),
      });
    } else {
      dispatch({
        type: "LOAD_STATE",
        payload: initialState,
      });
    }
  }, [user]);

  // Save rewards
  useEffect(() => {
    if (!user) return;

    localStorage.setItem(`rewards-${user.username}`, JSON.stringify(state));
  }, [state, user]);

  return (
    <RewardsContext.Provider
      value={{
        state,
        dispatch,
      }}
    >
      {children}
    </RewardsContext.Provider>
  );
}

export function useRewards() {
  return useContext(RewardsContext);
}
