import React from 'react';

const NameList = ({ names }) => {
  return (
    <div>
      <h2>Liste de noms</h2>
      <ul>
        {names.map((name, index) => (
          <li key={index}>{name}</li>
        ))}
      </ul>
    </div>
  );
};

export default NameList;