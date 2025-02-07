import ReusableForm from "./form";

const LoginForm = ({ onSubmit }) => {
    const fields = [
    { name: "username", label: "Username", type: "text", placeholder: "Enter your username", required: true },
    { name: "password", label: "Password", type: "password", placeholder: "Enter your password", required: true },
  ];

  return (
    <ReusableForm fields={fields} onSubmit={onSubmit} />
  );
};

export default LoginForm;