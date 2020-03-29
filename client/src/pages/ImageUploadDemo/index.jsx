import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import Form from '../../components/Form'

function Demo () {
  return (
    <div>
      <Container fluid>
        <Row>
          <Col md={6} className='m-auto'>
            <h1 className='display-4 my-4'>Remote Medical Image Upload</h1>

            <hr />
            <Form />
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Demo