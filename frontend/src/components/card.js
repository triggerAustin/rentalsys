import React from "react";

const Card = ({ title, image, fields, actions }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-4xl">
      {/* Image (Optional) */}
      {image && (
        <div className="flex justify-center mb-4">
          <img
            src={image}
            alt="Card"
            className="w-32 h-32 rounded-full border-4 border-gray-300"
          />
        </div>
      )}

      {/* Title */}
      {title && <h2 className="text-2xl font-bold text-center mb-4">{title}</h2>}

      {/* Dynamic Fields */}
      <div className="grid grid-cols-2 gap-4">
        {fields.map(({ label, value, isBadge }, index) => (
          <p key={index} className="text-gray-700 text-lg">
            <strong>{label}:</strong>{" "}
            {isBadge ? (
              <span
                className={`ml-2 px-3 py-1 text-white rounded-md ${
                  value === "Active" ? "bg-green-500" : "bg-red-500"
                }`}
              >
                {value}
              </span>
            ) : (
              value
            )}
          </p>
        ))}
      </div>

      {/* Actions */}
      {actions && actions.length > 0 && (
        <div className="mt-6 flex gap-4">
          {actions.map(({ label, onClick, className }, index) => (
            <button
              key={index}
              onClick={onClick}
              className={`flex-1 px-6 py-3 text-white text-lg rounded-lg ${className}`}
            >
              {label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default Card;
