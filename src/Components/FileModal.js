import React, { useState, useEffect } from 'react';
import Modal from 'react-modal';
import '../Dashboard/Dashboard.css';

function FileModal({ isOpen, onRequestClose, selectedItem }) {
  const [fileContent, setFileContent] = useState(null);

  useEffect(() => {
    if (selectedItem && selectedItem.type === 'file') {
      const fileName = selectedItem.name.toLowerCase();
      const fileExtensions = {
        image: ['.jpg', '.png', '.webp', '.jpeg', '.svg', '.gif', '.ico'],
        text: ['.txt', '.htm', '.html', '.css', '.js' , '.jsx' , '.py'],
        pdf: ['.pdf'],
      };

      const fileExtension = fileName.substr(fileName.lastIndexOf('.'));
      if (fileExtensions.image.includes(fileExtension)) {
        setFileContent(
          <div className="file-content">
            <img src={selectedItem.path} alt={selectedItem.name} />
          </div>
        );
      } else if (fileExtensions.text.includes(fileExtension)) {
        fetch(selectedItem.path)
          .then((response) => response.text())
          .then((data) => {
            setFileContent(
              <div className="file-content">
                <pre>{data}</pre>
              </div>
            );
          })
          .catch(() => {
            setFileContent('Failed to load file');
          });
      } else if (fileExtensions.pdf.includes(fileExtension)) {
        setFileContent(
          <iframe
            title="PDF Viewer"
            src={selectedItem.path}
            width="100%"
            height="100%"
            frameBorder="0"
          ></iframe>
        );
      } else {
        setFileContent('Unsupported file format');
      }
    }
  }, [selectedItem]);

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      ariaHideApp={false}
    >
      <button onClick={onRequestClose} className="close-button">
        X
      </button>
      {fileContent}
    </Modal>
  );
}

export default FileModal;
