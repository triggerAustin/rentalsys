import ReusableForm from "./form";

// Registration Form Component
const RegistrationForm = ({ onSubmit }) => {
    const fields = [
      { name: "fullName", label: "Full Name", type: "text", placeholder: "Enter your full name", required: true },
      { name: "email", label: "Email", type: "email", placeholder: "Enter your email", required: true },
      { name: "password", label: "Password", type: "password", placeholder: "Enter your password", required: true },
      { name: "confirmPassword", label: "Confirm Password", type: "password", placeholder: "Confirm your password", required: true },
    ];
  
    return (
      <ReusableForm fields={fields} onSubmit={onSubmit} />
    );
  };

  export default RegistrationForm;