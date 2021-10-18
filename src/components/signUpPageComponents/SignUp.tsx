import React, {useState} from 'react'
import {Form, Button, Modal, CloseButton} from 'react-bootstrap'

import {useValidation} from '../../utils/validation'

import './SignUp.scss'

const SignUp = () => {
  const useInput = (initialValue: string, validations: any) => {
    const [value, setValue] = useState(initialValue)
    const [isDirty, setDitry] = useState(false)
    const valid = useValidation(value, validations)

    const onChange = (e: any) => {
      setValue(e.target.value)
    }

    const onBlur = (e: any) => {
      setDitry(true)
    }

    return {
      value,
      onChange,
      onBlur,
      isDirty,
      ...valid
    }
  }

  const firstName = useInput('', {
    isEmpty: true,
    minLengthError: 2,
    maxLengthError: 30,
    firstNameError: true,
  })

  const lastName = useInput('', {
    isEmpty: true,
    minLengthError: 3,
    maxLengthError: 30,
    lastNameError: true,
  })

  const email = useInput('', {
    isEmpty: true,
    minLengthError: 8,
    maxLengthError: 325,
    emailError: true,
  })

  const phoneNumber = useInput('', {
    isEmpty: true,
    phoneNumberError: true,
  })

  const password = useInput('', {
    isEmpty: true,
    minLengthError: 8,
    maxLengthError: 15,
    passwordError: true,
  })

  const handleClose = () => {
    window.history.go(-1)
  }

  return (
    <div className='registration-form'>
      <div className='container shadow-md'>
        <Modal.Dialog>
          <Modal.Header>
            <Modal.Title className='form-title'>Регистрация</Modal.Title>
            <CloseButton onClick={() => handleClose()}/>
          </Modal.Header>

          <Modal.Body>
            <Form className='my-3'>
              <Form.Floating className='mb-3 mx-3'>
                <Form.Control
                  id='userFirstName'
                  type='firstName'
                  placeholder='Иван'
                  value={firstName.value}
                  onChange={(e) => firstName.onChange(e)}
                  onBlur={(e) => firstName.onBlur(e)}
                />
                <label htmlFor='userFirstName'>Имя</label>
                {
                  // eslint-disable-next-line max-len
                  (firstName.isDirty && (firstName.isEmpty || firstName.minLengthError || firstName.maxLengthError || firstName.firstNameError)) &&
                  // eslint-disable-next-line max-len
                  <div className='error'>
                    Это поле должно содержать 2-30 знаков,
                    без специальных символов (#, %, &, !, $, etc.) и
                    чисел (0-9). Обязательно к заполнению.
                  </div>
                }
              </Form.Floating>

              <Form.Floating className='mb-3 mx-3'>
                <Form.Control
                  id='userLastName'
                  type='lastName'
                  placeholder='Иванов'
                  value={lastName.value}
                  onChange={(e) => lastName.onChange(e)}
                  onBlur={(e) => lastName.onBlur(e)}
                />
                <label htmlFor='userLastName'>Фамилия</label>
                {
                  // eslint-disable-next-line max-len
                  (lastName.isDirty && (lastName.isEmpty || lastName.minLengthError || lastName.maxLengthError || lastName.lastNameError)) &&
                  // eslint-disable-next-line max-len
                  <div className='error'>
                    Это поле должно содержать 3-30 знаков,
                    без специальных символов (#, %, &, !, $, etc.) и
                    чисел (0-9). Обязательно к заполнению.
                  </div>
                }
              </Form.Floating>

              <Form.Floating className='mb-3 mx-3'>
                <Form.Control
                  id='userEmail'
                  type='email'
                  placeholder='name@example.com'
                  value={email.value}
                  onChange={(e) => email.onChange(e)}
                  onBlur={(e) => email.onBlur(e)}
                />
                <label htmlFor='userEmail'>Электронная почта</label>
                {
                  // eslint-disable-next-line max-len
                  (email.isDirty && (email.isEmpty || email.minLengthError || email.maxLengthError || email.emailError)) &&
                  // eslint-disable-next-line max-len
                  <div className='error'>
                    Электронная почта должна быть в формате xxx@yyy.zzz,
                    без специальных символов (#, %, &, !, $, etc.).
                    Обязательно к заполнению.
                  </div>
                }
              </Form.Floating>

              <Form.Floating className='mb-3 mx-3'>
                <Form.Control
                  id='userPhoneNumber'
                  type='phoneNumber'
                  placeholder='+375-XX-XXX-XX-XX'
                  value={phoneNumber.value}
                  onChange={(e) => phoneNumber.onChange(e)}
                  onBlur={(e) => phoneNumber.onBlur(e)}
                />
                <label htmlFor='userPhoneNumber'>Телефон</label>
                {/* <Dropdown>
                  <Dropdown.Toggle
                    variant='outline-secondary'
                    id='dropdown-basic'
                  >
                  </Dropdown.Toggle>

                  <Dropdown.Menu>
                    <Dropdown.Item>
                      <Image
                        src='images/flags/BY3.png'
                        alt='BY'
                        width={30}
                        height={30}
                      />
                    </Dropdown.Item>
                    <Dropdown.Item>
                      <Image
                        src='images/flags/RU3.png'
                        alt='BY'
                        width={30}
                        height={30}
                      />
                    </Dropdown.Item>
                    <Dropdown.Item>
                      <Image
                        src='images/flags/UA3.png'
                        alt='BY'
                        width={30}
                        height={30}
                      />
                    </Dropdown.Item>
                    <Dropdown.Item>
                      <Image
                        src='images/flags/LT3.png'
                        alt='BY'
                        width={30}
                        height={30}
                      />
                    </Dropdown.Item>
                    <Dropdown.Item>
                      <Image
                        src='images/flags/LAT3.png'
                        alt='BY'
                        width={30}
                        height={30}
                      />
                    </Dropdown.Item>
                    <Dropdown.Item>
                      <Image
                        src='images/flags/PL3.png'
                        alt='BY'
                        width={30}
                        height={30}
                      />
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown> */}
                {
                  // eslint-disable-next-line max-len
                  (phoneNumber.isDirty && (phoneNumber.isEmpty || phoneNumber.phoneNumberError)) &&
                  <div className='error'>
                    Телефон должен содержать код в формате
                    +375 (+ опционально) либо 80 и 9 цифр основного номера.
                    Обязательно к заполнению.
                  </div>
                }
              </Form.Floating>

              <Form.Floating className='mx-3'>
                <Form.Control
                  id='userPassword'
                  type='password'
                  placeholder='password'
                  value={password.value}
                  onChange={(e) => password.onChange(e)}
                  onBlur={(e) => password.onBlur(e)}
                />
                <label htmlFor='userPassword'>Пароль</label>
                {
                  // eslint-disable-next-line max-len
                  (password.isDirty && (password.isEmpty || password.minLengthError || password.maxLengthError || password.passwordError)) &&
                  // eslint-disable-next-line max-len
                  <div className='error'>
                    Пароль должен содержать 8-15 символов,
                    без пробелов и специальных знаков (#, %, &, !, $, etc.).
                    Обязательно к заполнению.
                  </div>
                }
              </Form.Floating>
            </Form>
          </Modal.Body>

          <Modal.Footer className='justify-content-center'>
            <Button
              variant='outline-secondary'
              onClick={() => handleClose()}
            >
              Отменить
            </Button>
            <Button
              disabled={!email.inputValid || !password.inputValid}
              variant='outline-warning'
              type='submit'
            >
              Зарегистрироваться
            </Button>
          </Modal.Footer>
        </Modal.Dialog>
      </div>
    </div>
  )
}

export default SignUp
