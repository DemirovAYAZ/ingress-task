import React from 'react';
import { FaFolder, FaFile } from 'react-icons/fa';
import '../Assets/Dashboard.css'

function ItemList({ items, onItemClick, onDeleteClick }) {
  return (
    <ul className="item-list">
      {items.map((item) => (
        <li key={item.id} onDoubleClick={() => onItemClick(item)}>
          {item.type === 'folder' ? (
            <FaFolder /> 
          ) : (
            <FaFile />
          )}
          <span>{item.name}</span>
          <button onClick={() => onDeleteClick(item)} className="delete-button">
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
}

export default ItemList;
