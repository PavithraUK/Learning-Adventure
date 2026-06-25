function ProgressBar({ progress }) {
  return (
    <div
      style={{
        marginBottom: "20px",
      }}
    >
      <div
        style={{
          width: "100%",
          height: "20px",
          backgroundColor: "#ddd",
          borderRadius: "10px",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            width: `${progress}%`,
            height: "100%",
            backgroundColor: "green",
          }}
        />
      </div>

      <p>{progress}%</p>
    </div>
  );
}

export default ProgressBar;
