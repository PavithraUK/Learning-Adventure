import { createContext, useContext, useEffect, useState } from "react";

import { useAuth } from "./AuthContext";

const ProgressContext = createContext();

export function ProgressProvider({ children }) {
  const { user } = useAuth();

  const [completedLessons, setCompletedLessons] = useState([]);

  // Load progress whenever user changes
  useEffect(() => {
    if (!user) {
      setCompletedLessons([]);
      return;
    }

    const saved = localStorage.getItem(`progress-${user.username}`);

    setCompletedLessons(saved ? JSON.parse(saved) : []);
  }, [user]);

  // Save progress for current user
  useEffect(() => {
    if (!user) return;

    localStorage.setItem(
      `progress-${user.username}`,
      JSON.stringify(completedLessons),
    );
  }, [completedLessons, user]);

  const completeLesson = (lessonKey) => {
    setCompletedLessons((prev) => {
      if (prev.includes(lessonKey)) {
        return prev;
      }

      return [...prev, lessonKey];
    });
  };

  return (
    <ProgressContext.Provider
      value={{
        completedLessons,
        completeLesson,
      }}
    >
      {children}
    </ProgressContext.Provider>
  );
}

export function useProgress() {
  return useContext(ProgressContext);
}
