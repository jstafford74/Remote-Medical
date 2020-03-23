import React from 'react'
import {
  Container,
  Col,
  Row,
  Card,
  ListGroup,
  InputGroup,
  Button
} from 'react-bootstrap'
import { Form as FormB } from 'react-bootstrap'
import { Form, Field } from 'react-final-form'
import formatString from 'format-string-by-pattern'
import Dropzone from './DropZone'
import emailjs from 'emailjs-com'
import { useDropzone } from 'react-dropzone'

const onFormSubmit = values => {
  emailjs
    .sendForm(
      'sendgrid',
      'template_5lh5ZqYz',
      values,
      'user_Jph9lLQbkZwLwESsROAFg'
    )
    .then(
      result => {
        console.log(result.text)
      },
      error => {
        console.log(error.text)
      }
    )
}

const Error = ({ name }) => (
  <Field name={name}>
    {({ meta: { touched, error } }) =>
      touched && error ? <span valid={!error}>{error}</span> : null
    }
  </Field>
)
const required = value => (value ? undefined : 'Required')

const RFFormat = props => {
  const { open } = useDropzone()
  return (
    <Container fluid='md'>
      <Card
        className='py2 my4'
        style={{ border: 'black solid 1px', borderRadius: 10, marginTop: 5 }}
      >
        <Card.Header as='h1' style={{ paddingTop: 5 }}>
          Remote Treatment Form
        </Card.Header>
        <Form
          onSubmit={onFormSubmit}
          initialValues={{}}
          render={({ handleSubmit, form, submitting, pristine, values }) => (
            <form onSubmit={handleSubmit}>
              <fieldset>
                <Card.Body>
                  <h2 className='text-muted'>Please Enter Basic Information</h2>
                  <Card.Text>
                    <ListGroup variant='flush'>
                      <ListGroup.Item className='px-1'>
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
                      <ListGroup.Item className='px-1'>
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
                      <ListGroup.Item className='px-1'>
                        <Field name='email_s' validate={required}>
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

                      <Row className='px-1 '>
                        <Col md={6}>
                          <Field
                            name='phone'
                            validate={required}
                            parse={formatString('(999)-999-9999')}
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
                                      Phone
                                    </InputGroup.Text>
                                  </InputGroup.Prepend>
                                )}
                                <FormB.Control
                                  {...input}
                                  size='lg'
                                  placeholder='(203)-123-1234'
                                />
                              </InputGroup>
                            )}
                          </Field>
                        </Col>
                        <Col md={6}>
                          <Field
                            name='dob'
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
                        </Col>
                      </Row>

                      <ListGroup.Item className='px-1  '>
                        <Field name='message' validate={required}>
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
                                    Message to Clinical Staff
                                  </InputGroup.Text>
                                </InputGroup.Prepend>
                              )}
                              <FormB.Control
                                {...input}
                                as='textarea'
                                rows='3'
                                placeholder=''
                              />
                            </InputGroup>
                          )}
                        </Field>
                      </ListGroup.Item>
                    </ListGroup>

                    <Field name='tderm_image' component={Dropzone}>
                      <InputGroup className='border border-info rounded'>
                        <InputGroup.Prepend>
                          <Button variant='outline-secondary' onClick={open}>
                            Upload Images
                          </Button>
                        </InputGroup.Prepend>
                        <FormB.Control component={Dropzone} />
                      </InputGroup>
                    </Field>
                  </Card.Text>
                </Card.Body>
                <Card.Footer className='d-flex bd-highlight justify-content-around '>
                  <Button
                    type='submit'
                    style={{ width: 175 }}
                    size='lg'
                    variant='primary'
                    disabled={submitting || pristine}
                  >
                    Submit
                  </Button>{' '}
                  <Button
                    type='button'
                    variant='danger'
                    size='lg'
                    style={{ width: 175 }}
                    onClick={form.reset}
                    disabled={submitting || pristine}
                  >
                    Reset
                  </Button>
                </Card.Footer>
              </fieldset>
            </form>
          )}
        />
      </Card>
      <hr />
    </Container>
  )
}
export default RFFormat
