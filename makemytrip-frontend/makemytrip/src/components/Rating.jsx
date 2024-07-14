import React from "react";

// StarRating Component
const Rating = ({ value }) => {
  const totalStars = 5;

  // Create an array of stars
  const stars = Array.from({ length: totalStars }, (_, index) => {
    return index < value ? "★" : "☆";
  });

  return (
    <div>
      {stars.map((star, index) => (
        <span
          key={index}
          style={{
            color: star === "★" ? "#FFD700" : "#DDDDDD",
            fontSize: "24px",
          }}
        >
          {star}
        </span>
      ))}
    </div>
  );
};

export default Rating;
