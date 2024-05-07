import { useState } from "react";

export const BackgroundColor = () => {
  const colors = [
    { id: "a", hex: "E9C46A" },
    { id: "b", hex: "F4A261" },
    { id: "c", hex: "E76F51" },
    { id: "d", hex: "2A9D8F" },
    { id: "e", hex: "264653" },
    { id: "f", hex: "A5A299" },
    { id: "g", hex: "8D818C" },
    { id: "h", hex: "B4B8C5" },
    { id: "i", hex: "E9EBF8" },
    { id: "j", hex: "262730" },
    { id: "l", hex: "77BA99" },
    { id: "m", hex: "D33F49" },
    { id: "n", hex: "696D7D" },
    { id: "o", hex: "7D80DA" },
    { id: "p", hex: "B0A3D4" },
    { id: "q", hex: "F0F66E" },
    { id: "r", hex: "E4572E" },
    { id: "s", hex: "0CCA4A" },
    { id: "t", hex: "B9314F" },
  ];

  const [color, setColor] = useState("");

  const handleColorChange = () => {
    const randomIndex = Math.floor(Math.random() * colors.length);
    const randomColor = colors[randomIndex].hex;
    setColor(randomColor);
  };

  return (
    <div style={{ backgroundColor: `#${color}` }} className="container">
      <button
        onClick={handleColorChange}
        style={{ backgroundColor: `#${color}` }}
      >
        Change Color
      </button>
      <h1>Hex-Code: #{color}</h1>
    </div>
  );
};
