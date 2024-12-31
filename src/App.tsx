import { useState } from 'react';

interface Color {
  name: string;
  hex: string;
}

const defaultColors: Color[] = [
  { name: 'Primary', hex: '#3498db' },
  { name: 'Secondary', hex: '#f1c40f' },
  { name: 'Success', hex: '#2ecc71' },
  { name: 'Danger', hex: '#e74c3c' },
];

const ComponentBasedStyling = () => {
  const [colors, setColors] = useState(defaultColors);
  const [newColorName, setNewColorName] = useState('');
  const [newColorHex, setNewColorHex] = useState('');

  const handleAddColor = () => {
    setColors([...colors, { name: newColorName, hex: newColorHex }]);
    setNewColorName('');
    setNewColorHex('');
  };

  const handleRemoveColor = (index: number) => {
    setColors(colors.filter((color, i) => i !== index));
  };

  return (
    <div className="max-w-4xl mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Component-Based Styling</h1>
      <div className="flex flex-wrap gap-4 mb-4">
        {colors.map((color, index) => (
          <div key={index} className="bg-gray-200 p-4 rounded-lg w-48">
            <h2 className="text-lg font-bold mb-2">{color.name}</h2>
            <div className="h-12 bg-gray-400 rounded-lg" style={{ backgroundColor: color.hex }} />
            <button
              className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-lg mt-2"
              onClick={() => handleRemoveColor(index)}
            >
              Remove
            </button>
          </div>
        ))}
      </div>
      <form className="flex flex-col gap-4">
        <input
          type="text"
          value={newColorName}
          onChange={(e) => setNewColorName(e.target.value)}
          placeholder="Color Name"
          className="p-2 rounded-lg border border-gray-400"
        />
        <input
          type="text"
          value={newColorHex}
          onChange={(e) => setNewColorHex(e.target.value)}
          placeholder="Color Hex"
          className="p-2 rounded-lg border border-gray-400"
        />
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg"
          onClick={handleAddColor}
        >
          Add Color
        </button>
      </form>
    </div>
  );
};

export default ComponentBasedStyling;