import React, { useState } from 'react';

function CreateFolder({ onFolderCreate }) {
  const [newName, setNewName] = useState('');

  const handleCreateItem = () => {
    if (newName) {
      onFolderCreate(newName);
      setNewName('');
    }
  }

  return (
    <div>
      <h3>Create Folder</h3>
      <input
        type="text"
        placeholder="Folder Name"
        value={newName}
        onChange={(e) => setNewName(e.target.value)}
      />
      <button className="create-button" onClick={handleCreateItem}>
        Create Folder
      </button>
    </div>
  );
}

export default CreateFolder;
