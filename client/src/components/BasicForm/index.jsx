import React from 'react'
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
import options from '../../options'
import { Auth0LockPasswordless } from 'auth0-lock'
import API from '../../utils/API'

function BasicForm (props) {
  const required = value => (value ? undefined : 'Required')

  const lock = new Auth0LockPasswordless(
    'Dq0j1ihisEKjWAQHv9gmgkhV8qxKFA7I',
    'dev-jyxuwhal.auth0.com',
    options
  )

  const onSubmit = async values => {
    const response = await API.acctCheck(
      values.FirstName.toLowerCase(),
      values.LastName.toLowerCase(),
      values.email,
      values.DOB
    )

    if (response[0].patient_Email) {
      console.log(response[0].patient_Email)
      lock.show()
    } else {
      alert('User Not Found. Would You Like To Sign Up?')
    }
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
                    <pre>{JSON.stringify(values)}</pre>
                  </fieldset>
                </form>
              )}
            />
          </Card>
        </Col>
      </Row>
      <hr />
    </Container>
  )
}
export default BasicForm
