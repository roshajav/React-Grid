import React, { useState } from "react";

function GridComponent({ size }) {
  const [gridData, setGridData] = useState(
    Array.from({ length: size }, () => Array(size).fill(null))
  );

  const handleCellClick = (rowIndex, columnIndex) => {
    const newGridData = [...gridData];
    newGridData[rowIndex][columnIndex] =
      (newGridData[rowIndex][columnIndex] || 0) + 1;
    setGridData(newGridData);
  };

  const renderCell = (rowIndex, columnIndex) => {
    const count = gridData[rowIndex][columnIndex];
    return (
      <td
        key={columnIndex}
        style={{ border: "1px solid black", padding: "50px" }}
        onClick={() => handleCellClick(rowIndex, columnIndex)}
      >
        {count}
      </td>
    );
  };

  const renderRow = (rowIndex) => {
    const row = [];
    for (let j = 0; j < size; j++) {
      row.push(renderCell(rowIndex, j));
    }
    return <tr key={rowIndex}>{row}</tr>;
  };

  return (
    <table style={{ borderCollapse: "collapse" }}>
      <tbody>
        {Array.from({ length: size }, (_, rowIndex) => renderRow(rowIndex))}
      </tbody>
    </table>
  );
}

export default GridComponent;
