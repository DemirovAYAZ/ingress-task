import React from 'react';
import '../Assets/Dashboard.css'

function ShowButtons({ onShowFolders, onShowFiles, onShowAllItems }) {
  return (
    <div className="show-file-folder">
      <button className="show-button" onClick={onShowFolders}>
        Show Folders
      </button>
      <button className="show-button" onClick={onShowFiles}>
        Show Files
      </button>
      <button className="show-button" onClick={onShowAllItems}>
        Show All Items
      </button>
    </div>
  );
}

export default ShowButtons;
