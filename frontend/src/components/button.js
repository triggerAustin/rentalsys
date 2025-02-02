import React from "react";

const ReusableButton = ({
  text,
  onClick,
  type = "button",
  variant = "primary", // primary, secondary, danger
  className = "", // Allows dynamic styling
  disabled = false,
  loading = false,
}) => {
  // Define base styles (ensure button is consistent by default)
  const baseStyles = "rounded-lg font-semibold transition duration-300 focus:outline-none px-4 py-2 text-base mr-1";

  // Define variant styles (for different button types like primary, secondary, danger)
  const variantStyles = {
    primary: "bg-blue-500 hover:bg-blue-600 text-white",
    secondary: "bg-gray-500 hover:bg-gray-600 text-white",
    danger: "bg-red-500 hover:bg-red-600 text-white",
  };

  // Default styles when disabled
  const disabledStyles = "opacity-50 cursor-not-allowed";

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled || loading}
      className={`${baseStyles} ${variantStyles[variant]} ${className} ${
        disabled ? disabledStyles : ""
      }`}
    >
      {loading ? "Loading..." : text}
    </button>
  );
};

export default ReusableButton;
