import React from 'react';
import { useDropzone } from "react-dropzone";

const Dropzone = ({ props }) => {
    const { getRootProps, getInputProps, acceptedFiles } = useDropzone({ noClick: true });
    const files = acceptedFiles.map(file => <li key={file.path}>{file.path}</li>);


    return (
        <div {...getRootProps({ className: 'dropzone' })}>
            <input {...getInputProps()}
                as='file'
                multiple=''
            />
            <ul>{files}</ul>
        </div>
    );
};

export default Dropzone