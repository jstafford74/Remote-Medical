import React from 'react'
import { Container, Jumbotron } from 'react-bootstrap'

import BasicForm from '../../components/BasicForm'

const Style = {
  header: {
    textAlign: 'center',
    fontSize: '4rem'
  },
  jumbo: {
    height: '500vh'
  },
  button: {
    width: 175
  }
}

export default function Demo (props) {
  // const [isVerified, setVerified] = useState(false)
  return (
    <Container fluid='md' className='text-center'>
      <Jumbotron id='main'>
        <h1 style={Style.header}>Remote Medical </h1>
        <h3 style={{ color: 'red' }}>
          <i className='fas fa-star-of-life fa-2x'></i>
        </h3>
        <hr />
        <BasicForm />
        {/* {{ isVerified } ? <TeleMed /> : null} */}
      </Jumbotron>
      {/* {loggedIn ? <RFFormat /> : null} */}
    </Container>
  )
}
