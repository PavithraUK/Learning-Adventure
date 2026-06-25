import { useAuth } from "../../../app/AuthContext";
import { useRewards } from "../../../app/ReducerContext";

import LessonCard from "../../dashboard/LessonCard";
import StatsCard from "../../dashboard/StatsCard";

function StudentDashboard() {
  const { user } = useAuth();
  const { state } = useRewards();

  const lessons = [
    {
      id: 1,
      subject: "Math",
      title: "Math Adventure",
      emoji: "🧮",
      description: "Learn numbers and calculations",
    },
    {
      id: 2,
      subject: "English",
      title: "English Quest",
      emoji: "📚",
      description: "Improve vocabulary and grammar",
    },
    {
      id: 3,
      subject: "Science",
      title: "Science Lab",
      emoji: "🔬",
      description: "Explore exciting experiments",
    },
  ];

  return (
    <div
      style={{
        padding: "20px",
      }}
    >
      <h1>Welcome {user?.username}</h1>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(2, 1fr)",
          gap: "20px",
          marginTop: "20px",
        }}
      >
        <StatsCard title="Stars Earned" value={`${state.stars} ⭐`} />

        <StatsCard title="Badges" value={`${state.badges.length} 🏆`} />
        <h2>Achievements</h2>
        {state.badges.length === 0 ? (
          <p>Complete lessons to unlock badges</p>
        ) : (
          <ul>
            {state.badges.map((badge) => (
              <li key={badge}>🏆 {badge}</li>
            ))}
          </ul>
        )}
      </div>

      <h2
        style={{
          marginTop: "40px",
        }}
      >
        Learning Adventures
      </h2>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(250px,1fr))",
          gap: "20px",
        }}
      ></div>

      {lessons.map((item) => (
        <LessonCard
          title={item.title}
          emoji={item.emoji}
          description={item.description}
          subject={item.subject.toLowerCase()}
        />
      ))}
    </div>
  );
}

export default StudentDashboard;
