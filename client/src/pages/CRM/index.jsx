import React, { useEffect, useState, Fragment } from 'react'
import { Container, Jumbotron } from 'react-bootstrap'
import API from '../../utils/API'

const CRM = () => {
  const [imgs, setImgs] = useState([])
  useEffect(() => {
    const images = API.getImages()
    setImgs(images)
  }, [imgs])

  const Style = {
    header: {
      letterSpacing: '.75rem',
      textAlign: 'center',
      fontSize: '4rem'
    },
    jumbo: {
      height: '500vh'
    }
  }
  return (
    <Fragment>
      <Container fluid='md' className='text-center'>
        <Jumbotron id='main' style={Style.jumbo}>
          <h1 style={Style.header}>Remote Medical Treatment</h1>
          <h3 style={{ color: 'red' }}>
            <i className='fas fa-laptop-medical fa-5x'></i>
          </h3>
          <hr />
          <h4>Doctor's CRM</h4>
          <hr />
        </Jumbotron>
      </Container>
    </Fragment>
  )
}

export default CRM
