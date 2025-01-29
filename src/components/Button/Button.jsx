import React from 'react';

const Button = ({ row, column, booking, isSelected, seatName }) => {
  return (
    <button
      onClick={() => booking(row, column,seatName)}
      style={{
        padding: "10px",
        margin: "2px",
        backgroundColor: isSelected ? "#90ee90" : "#f0f0f0", // Green for selected, grey for unselected
        border: "1px solid #ccc",
        cursor: "pointer",
      }}
    >
      {/* {`${row}-${column}`} */}
      {column}
    </button>
  );
};

export default Button;
