import { useState } from "react";
import ReusableForm from "./form";

const LoginForm = ({ onClose, setIsLoggedIn }) => {

  const [error, setError] = useState(null);

  const handleSubmit = async (data) => {
    setError(null);

    try {
      const response = await fetch("http://localhost:3001/users/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();
      if (!response.ok) throw new Error(result.message || "login failed");

      localStorage.setItem("token", result.accessToken);
      setIsLoggedIn(true);
      alert('login Successful');
      onClose();
    } catch (error) {
      setError(error.message)
    }
  }
    const fields = [
    { name: "username", label: "Username", type: "text", placeholder: "Enter your username", required: true },
    { name: "password", label: "Password", type: "password", placeholder: "Enter your password", required: true },
  ];

  return (
    <div>
      {error && <p className="text-red-500">{error}</p>}
    <ReusableForm fields={fields} onSubmit={handleSubmit} />
    </div>
  );
};

export default LoginForm;