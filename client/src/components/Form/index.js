import React, { useState } from 'react'
import API from '../../utils/API'

function Form () {
  const [file, setFile] = useState(null)

  const handleFile = e => {
    e.preventDefault()
    let fileItem = e.target.files[0]
    setFile(fileItem)
    console.log(fileItem)
  }
  const handleUpload = e => {
    e.preventDefault()
    let data = new FormData()
    data.append('file', file)
    data.append('name', 'file')
    const config = {
      headers: {
        'content-type': 'multipart/form-data'
      }
    }
    console.log(data, config)
    API.upload(data, config)
  }
  return (
    <div>
      <form onSubmit={handleUpload}>
        <div className='custom-file mb-3'>
          <input type='file' name='file' id='file' onChange={handleFile} />
          <label htmlFor='file' className='custom-file-label'>
            Choose File
          </label>
        </div>
        <input
          type='submit'
          value='Submit'
          className='btn btn-primary btn-block'
        />
      </form>
    </div>
  )
}

export default Form