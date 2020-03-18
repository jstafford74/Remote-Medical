import React from 'react';
import { useDropzone } from "react-dropzone";
import { InputGroup, Button } from "react-bootstrap";

const Dropzone = ({ props }) => {
    const { getRootProps, getInputProps, open, acceptedFiles } = useDropzone({ noClick: true });
    const files = acceptedFiles.map(file => <li key={file.path}>{file.path}</li>);


    return (
        <InputGroup className='border border-info rounded'>
            <InputGroup.Prepend>
                <Button
                    variant='outline-secondary'
                    onClick={open}>
                    Upload Images
            </Button>
            </InputGroup.Prepend>
            <div {...getRootProps({ className: 'dropzone' })}>
                <input {...getInputProps()}
                    as='file'
                    multiple=''

                />
                <ul>{files}</ul>
            </div>
        </InputGroup>
    );
};

export default Dropzone