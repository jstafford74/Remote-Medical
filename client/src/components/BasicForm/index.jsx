import React, { useState } from 'react'
import {
  Container,
  Row,
  Col,
  Card,
  ListGroup,
  InputGroup,
  Button
} from 'react-bootstrap'
import { Form as FormB } from 'react-bootstrap'
import { Form, Field } from 'react-final-form'
import formatString from 'format-string-by-pattern'
import API from '../../utils/API'
import { Auth0LockPasswordless } from 'auth0-lock'

var options = {
  closable: false,
  allowedConnections: ['email'],
  passwordlessMethod: 'link',
  auth: {
    redirectUrl: 'http://localhost:3000/telederm'
  }
}

var lock = new Auth0LockPasswordless(
  'k05C8Hewa6uoQQIt5OvDlEKhqbErzmre',
  'dev-o4x02ucu.auth0.com',
  options
)

export const BasicContext = React.createContext()

const Style = {
  label: {
    marginRight: '10px',
    display: 'flex',

    textAlign: 'right'
  },
  input: {
    marginTop: '15px'
  }
}

function BasicForm (props) {
  const required = value => (value ? undefined : 'Required')

  const [user, setUser] = useState(false)
  const [msg, setMsg] = useState('Please Enter Basic Information')
  const [error, setError] = useState('No Error')

  const onSubmit = values => {
    API.acctCheck(values.FirstName, values.LastName, values.email, values.DOB)
      .then(response => {
        response.pPInfo_Email
          ? setUser(response) && setError('')
          : setMsg('User Not Found. Would You Like To Sign Up?')
      })
      .catch(error => {
        console.log(error)
        setUser(false)
        setError('Check Credentials')
        setMsg('In Catch Error')
      })
  }
  return (
    <Container fluid>
      <Row>
        <Col md={8}>
          <Card
            className='py2 my2'
            style={{
              border: 'black solid 1px',
              borderRadius: 10,
              marginTop: 5
            }}
          >
            <Card.Header as='h3' style={{ paddingTop: 5 }}>
              Remote Treatment Form
            </Card.Header>
            <Form
              onSubmit={onSubmit}
              initialValues={{}}
              render={({
                handleSubmit,
                form,
                submitting,
                pristine,
                values
              }) => (
                <form onSubmit={handleSubmit}>
                  <fieldset>
                    <Card.Body>
                      <h2 className='text-muted'>Verify Email</h2>
                      <Card.Text>
                        <ListGroup variant='flush'>
                          <ListGroup.Item id='FirstName' className='px-1'>
                            <Field name='FirstName' validate={required}>
                              {({ input, meta }) => (
                                <InputGroup className='my-2 border rounded border-info'>
                                  {meta.touched && meta.error ? (
                                    <InputGroup.Prepend>
                                      <InputGroup.Text
                                        style={{
                                          backgroundColor: 'gray',
                                          color: 'red'
                                        }}
                                        id='basic-addon1'
                                      >
                                        {meta.error}
                                      </InputGroup.Text>
                                    </InputGroup.Prepend>
                                  ) : (
                                    <InputGroup.Prepend>
                                      <InputGroup.Text id='basic-addon1'>
                                        First Name
                                      </InputGroup.Text>
                                    </InputGroup.Prepend>
                                  )}

                                  <FormB.Control
                                    {...input}
                                    size='lg'
                                    placeholder='First Name'
                                  />
                                </InputGroup>
                              )}
                            </Field>
                          </ListGroup.Item>
                          <ListGroup.Item id='LastName' className='px-1'>
                            <Field name='LastName' validate={required}>
                              {({ input, meta }) => (
                                <InputGroup className='my-2 border rounded border-info'>
                                  {meta.touched && meta.error ? (
                                    <InputGroup.Prepend>
                                      <InputGroup.Text
                                        style={{
                                          backgroundColor: 'gray',
                                          color: 'red'
                                        }}
                                        id='basic-addon1'
                                      >
                                        {meta.error}
                                      </InputGroup.Text>
                                    </InputGroup.Prepend>
                                  ) : (
                                    <InputGroup.Prepend>
                                      <InputGroup.Text id='basic-addon1'>
                                        Last Name
                                      </InputGroup.Text>
                                    </InputGroup.Prepend>
                                  )}
                                  <FormB.Control
                                    {...input}
                                    size='lg'
                                    placeholder='Last Name'
                                  />
                                </InputGroup>
                              )}
                            </Field>
                          </ListGroup.Item>
                          <ListGroup.Item id='email' className='px-1'>
                            <Field name='email' validate={required}>
                              {({ input, meta }) => (
                                <InputGroup className='my-2 border rounded border-info'>
                                  {meta.touched && meta.error ? (
                                    <InputGroup.Prepend>
                                      <InputGroup.Text
                                        style={{
                                          backgroundColor: 'gray',
                                          color: 'red'
                                        }}
                                        id='basic-addon1'
                                      >
                                        {meta.error}
                                      </InputGroup.Text>
                                    </InputGroup.Prepend>
                                  ) : null}
                                  <FormB.Control
                                    {...input}
                                    size='lg'
                                    placeholder='Email'
                                  />
                                  <InputGroup.Append>
                                    <InputGroup.Text id='basic-addon2'>
                                      @gmail.com
                                    </InputGroup.Text>
                                  </InputGroup.Append>
                                </InputGroup>
                              )}
                            </Field>
                          </ListGroup.Item>
                          <ListGroup.Item id='DOB' className='px-1'>
                            <Field
                              name='DOB'
                              validate={required}
                              parse={formatString('YYYY-MM-DD')}
                            >
                              {({ input, meta }) => (
                                <InputGroup className='my-2 border rounded border-info'>
                                  {meta.touched && meta.error ? (
                                    <InputGroup.Prepend>
                                      <InputGroup.Text
                                        style={{
                                          backgroundColor: 'gray',
                                          color: 'red'
                                        }}
                                        id='basic-addon1'
                                      >
                                        {meta.error}
                                      </InputGroup.Text>
                                    </InputGroup.Prepend>
                                  ) : (
                                    <InputGroup.Prepend>
                                      <InputGroup.Text id='basic-addon1'>
                                        D.O.B.
                                      </InputGroup.Text>
                                    </InputGroup.Prepend>
                                  )}
                                  <FormB.Control
                                    {...input}
                                    placeholder='YYYY-MM-DD'
                                    size='lg'
                                  />
                                </InputGroup>
                              )}
                            </Field>
                          </ListGroup.Item>
                        </ListGroup>
                      </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                      <Button
                        type='submit'
                        style={{ width: 175 }}
                        size='lg'
                        variant='primary'
                        disabled={submitting || pristine}
                      >
                        Submit
                      </Button>
                    </Card.Footer>
                  </fieldset>
                </form>
              )}
            />
          </Card>
        </Col>
        <Col md={4}>
          <h4 className='text-left'>
            Response:
            {user ? (
              <div>
                {' '}
                <span className='text-left'>{user.patient_ID}</span>
                <span className='text-left'>{user.patient_Number}</span>
                <span className='text-left'>{user.pPInfo_FirstName}</span>
                <span className='text-left'>{user.pPInfo_LastName}</span>
                <span className='text-left'>{user.pPInfo_DOB_month}</span>
                <span className='text-left'>{user.pPInfo_Email}</span>
              </div>
            ) : null}
          </h4>

          <h4 className='text-left'>
            Message: {msg ? <span className='text-left'>{msg}</span> : null}
          </h4>

          <h4 className='text-left'>
            Error: {error ? <span className='text-left'>{error}</span> : null}
          </h4>
        </Col>
      </Row>
      <hr />
    </Container>
  )
}
export default BasicForm
