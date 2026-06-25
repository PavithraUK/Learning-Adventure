import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useProgress } from "../../../app/ProgressContext";
import { useRewards } from "../../../app/ReducerContext";

function LessonPage() {
  const { subject } = useParams();
  const { completedLessons, completeLesson } = useProgress();
  const { dispatch } = useRewards();

  const lessons = [
    {
      id: 1,
      title: "Lesson 1",
    },
    {
      id: 2,
      title: "Lesson 2",
    },
    {
      id: 3,
      title: "Lesson 3",
    },
  ];

  const totalLessons = lessons.length;

  // const completedCount = completedLessons.filter((id) =>
  //   lessons.some((lesson) => lesson.id === id),
  // ).length;
  const completedCount = lessons.filter((lesson) =>
    completedLessons.includes(`${subject}-${lesson.id}`),
  ).length;

  const progress = Math.round((completedCount / totalLessons) * 100);
  const handleComplete = (lessonId) => {
    const lessonKey = `${subject}-${lessonId}`;

    completeLesson(lessonKey);

    dispatch({
      type: "ADD_STARS",
      payload: 10,
    });
  };

  useEffect(() => {
    if (completedCount === totalLessons) {
      dispatch({
        type: "ADD_BADGE",
        payload: `${subject.toUpperCase()} MASTER`,
      });
    }
  }, [completedCount, totalLessons, subject, dispatch]);

  return (
    <div
      style={{
        padding: "20px",
      }}
    >
      <h1>{subject?.charAt(0).toUpperCase() + subject?.slice(1)} Lessons</h1>

      <h2>Progress: {progress}%</h2>

      {lessons.map((lesson) => (
        <div
          key={lesson.id}
          style={{
            border: "1px solid #ddd",
            padding: "15px",
            marginBottom: "10px",
            borderRadius: "8px",
          }}
        >
          <h3>{lesson.title}</h3>
          <button onClick={() => handleComplete(lesson.id)}>
            Start Lesson
          </button>
          {completedLessons.includes(`${subject}-${lesson.id}`) ? (
            <p>✅ Completed</p>
          ) : (
            <p>📖 Not Completed</p>
          )}
        </div>
      ))}
    </div>
  );
}

export default LessonPage;
