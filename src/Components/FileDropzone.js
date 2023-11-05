import React from 'react';
import { useDropzone } from 'react-dropzone';
import '../Assets/Dashboard.css'

function FileDropzone({ onDrop }) {
  const { getRootProps, getInputProps } = useDropzone({
    onDrop: onDrop,
  });

  return (
    <div {...getRootProps()} className="file-dropzone">
      <input {...getInputProps()} />
      <p>Drag 'n' drop some files here, or click to select files</p>
    </div>
  );
}

export default FileDropzone;
