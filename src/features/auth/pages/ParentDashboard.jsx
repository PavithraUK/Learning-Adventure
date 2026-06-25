import { useAuth } from "../../../app/AuthContext";

import { useRewards } from "../../../app/ReducerContext";

import { useProgress } from "../../../app/ProgressContext";

import ProgressBar from "../../dashboard/components/ProgressBar";

function ParentDashboard() {
  const { user } = useAuth();

  const { state } = useRewards();

  const { completedLessons } = useProgress();
  const mathLessons = 3;

  const completedMath = completedLessons.filter((lesson) =>
    lesson.startsWith("math"),
  ).length;

  const mathProgress = Math.round((completedMath / mathLessons) * 100);
  const englishLessons = 3;

  const completedEnglish = completedLessons.filter((lesson) =>
    lesson.startsWith("english"),
  ).length;

  const englishProgress = Math.round((completedEnglish / englishLessons) * 100);
  const scienceLessons = 3;

  const completedScience = completedLessons.filter((lesson) =>
    lesson.startsWith("science"),
  ).length;

  const scienceProgress = Math.round((completedScience / scienceLessons) * 100);
  return (
    <div
      style={{
        padding: "20px",
      }}
    >
      <h1>Parent Dashboard</h1>

      <h2>
        Student:
        {user?.username}
      </h2>

      <h2>
        ⭐ Stars:
        {state.stars}
      </h2>

      <h2>
        🏆 Badges:
        {state.badges.length}
      </h2>

      <hr />

      <h3>Math Progress</h3>

      <ProgressBar progress={mathProgress} />

      <h3>English Progress</h3>

      <ProgressBar progress={englishProgress} />

      <h3>Science Progress</h3>

      <ProgressBar progress={scienceProgress} />
    </div>
  );
}
export default ParentDashboard;
