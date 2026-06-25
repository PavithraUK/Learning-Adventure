import { useNavigate } from "react-router-dom";

function LessonCard({ title, emoji, description, subject }) {
  const navigate = useNavigate();
  const handleLesson = () => {
    navigate(`/lesson/${subject}`);
  };

  return (
    <>
      <div
        style={{
          border: "1px solid #ddd",
          borderRadius: "12px",
          padding: "20px",
          cursor: "pointer",
          transition: "0.3s",
        }}
        onClick={() => handleLesson()}
      >
        <h1>
          {title} {emoji}
        </h1>
        <p>{description}</p>
      </div>
    </>
  );
}
export default LessonCard;
