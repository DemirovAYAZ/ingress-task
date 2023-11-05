import React from 'react';
import FileDropzone from './FileDropzone';
import '../Assets/Dashboard.css'

function FileUpload({ onFileUpload }) {
  const onDrop = (acceptedFiles) => {
    onFileUpload(acceptedFiles);
  }

  return (
    <div>
      <h3>Upload File</h3>
      <FileDropzone onDrop={onDrop} />
    </div>
  );
}

export default FileUpload;
