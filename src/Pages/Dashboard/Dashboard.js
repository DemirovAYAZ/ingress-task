import React, { useState, useEffect } from 'react';
import FileModal from '../../Components/FileModal';
import CreateFolder from '../../Components/CreateFolder';
import FileUpload from '../../Components/FileUpload';
import ItemList from '../../Components/ItemList';
import SearchBar from '../../Components/SearchBar';
import ShowButtons from '../../Components/ShowButtons';
import '../../Assets/Dashboard.css'

function Dashboard() {
  const [items, setItems] = useState([]);
  const [selectedItem, setSelectedItem] = useState(null);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [showFolders, setShowFolders] = useState(true);
  const [showFiles, setShowFiles] = useState(true);
  const [showAllItems, setShowAllItems] = useState(false);
  const [contentItems, setContentItems] = useState([]);

  useEffect(() => {
    let filteredItems = items
      .filter((item) => item.name.toLowerCase().includes(searchQuery.toLowerCase()));

    if (!showAllItems) {
      filteredItems = filteredItems.filter((item) => (showFolders && item.type === 'folder') || (showFiles && item.type === 'file'));
    }

    setContentItems(filteredItems);
  }, [items, searchQuery, showFolders, showFiles, showAllItems]);

  const onDrop = (acceptedFiles) => {
    const newItems = acceptedFiles.map((file) => ({
      name: file.name,
      type: 'file',
      id: Date.now(),
      path: URL.createObjectURL(file),
    }));
    setItems([...items, ...newItems]);
  };

  const handleCreateItem = (name) => {
    if (name) {
      setItems([
        ...items,
        { name, type: 'folder', id: Date.now() },
      ]);
    }
  };

  const handleItemClick = (item) => {
    setSelectedItem(item);
    if (item.type === 'file') {
      setModalIsOpen(true);
    }
  };

  const handleDeleteItem = (item) => {
    const updatedItems = items.filter((i) => i.id !== item.id);
    setItems(updatedItems);
  };

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleShowFolders = () => {
    setShowFolders(true);
    setShowFiles(false);
    setShowAllItems(false);
  };

  const handleShowFiles = () => {
    setShowFiles(true);
    setShowFolders(false);
    setShowAllItems(false);
  };

  const handleShowAllItems = () => {
    setShowFolders(true);
    setShowFiles(true);
    setShowAllItems(true);
  };

  return (
    <div className="dashboard-container">
      <div className="dashboard-sidebar">
        <CreateFolder onFolderCreate={handleCreateItem} />
        <FileUpload onFileUpload={onDrop} />
        <div>
          <h3>Items</h3>
          <ItemList
            items={items}
            onItemClick={handleItemClick}
            onDeleteClick={handleDeleteItem}
          />
        </div>
      </div>
      <div className="dashboard-content">
        <h2>Files and Folders</h2>
        <SearchBar searchQuery={searchQuery} onSearch={handleSearch} />
        <ShowButtons
          onShowFolders={handleShowFolders}
          onShowFiles={handleShowFiles}
          onShowAllItems={handleShowAllItems}
        />
        <div>
          <ItemList
            items={contentItems}
            onItemClick={handleItemClick}
            onDeleteClick={handleDeleteItem}
          />
        </div>
      </div>
      <FileModal
        isOpen={modalIsOpen}
        onRequestClose={() => setModalIsOpen(false)}
        selectedItem={selectedItem}
      />
    </div>
  );
}

export default Dashboard;
