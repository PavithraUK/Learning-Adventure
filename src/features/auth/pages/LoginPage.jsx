import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../../app/AuthContext";

function LoginPage() {
  const [userName, setUserName] = useState("");
  const navigate = useNavigate();
  const { login } = useAuth();

  const handleLogin = (role) => {
    if (!userName.trim()) {
      alert("please enter username");
      return;
    }
    login(userName, role.toLowerCase());

    if (role === "student") {
      navigate("/student/dashboard");
    } else {
      navigate("/parent/dashboard");
    }
  };
  return (
    <>
      <h1>Learning Adventure </h1>
      <input
        type="text"
        alt="username"
        value={userName}
        onChange={(e) => setUserName(e.target.value)}
      />
      <button onClick={() => handleLogin("student")}>Login as Student </button>
      <button onClick={() => handleLogin("parent")}>Login as Parent </button>
    </>
  );
}
export default LoginPage;

//heading
//user input
//btn (paren/kid)

//st for
