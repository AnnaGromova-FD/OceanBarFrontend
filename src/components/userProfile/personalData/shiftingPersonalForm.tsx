import {useState} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {AppStoreType} from '../../../redux/reducers/rootReducer'
import {Form, Button, Modal, CloseButton} from 'react-bootstrap'
import {ValidationType} from '../../../common/types/userTypes'
import {UserType} from '../../../common/types/userTypes'
import {useValidation} from '../../../utils/validation'
import {setUserPersonalDataTC} from '../../../redux/reducers/userReducer'
import Cookies from 'js-cookie'

type PropsType = {
  changeStatus: (status:boolean) => void
}

const shiftingPersonalForm = (props:PropsType) => {
  const userData =
   useSelector<AppStoreType, UserType>((state) => state.user.userProfile)

  const token = Cookies.get('token')

  const dispatch = useDispatch()

  const [authFailed, setAuthFailed] = useState(false)

  const useInput = (initialValue: string, validations: ValidationType) => {
    const [value, setValue] = useState(initialValue)
    const [isDirty, setDirty] = useState(false)
    const valid = useValidation(value, validations)

    const onChange = (e: any) => {
      setValue(e.target.value)
      setAuthFailed(false)
    }

    const onBlur = (e: any) => {
      setDirty(true)
    }

    return {
      value,
      onChange,
      onBlur,
      isDirty,
      ...valid
    }
  }

  const firstName = useInput(`${userData.name}`, {
    isEmpty: true,
    minLengthError: 2,
    maxLengthError: 30,
    firstNameError: true,
  })

  const lastName = useInput(`${userData.secondname}`, {
    isEmpty: true,
    minLengthError: 3,
    maxLengthError: 30,
    lastNameError: true,
  })

  const email = useInput(`${userData.email}`, {
    isEmpty: true,
    minLengthError: 5,
    maxLengthError: 30,
    emailError: true,
  })

  const phoneNumber = useInput(`${userData.phone}`, {
    isEmpty: true,
    phoneNumberError: true,
  })

  const userPersonalData = {
    name: firstName.value,
    secondname: lastName.value,
    email: email.value,
    phone: phoneNumber.value,
  }

  const isFirstNameInvalid = firstName.isDirty &&
      (firstName.isEmpty || firstName.minLengthError ||
         firstName.maxLengthError || firstName.firstNameError)
  const isLastNameInvalid = lastName.isDirty &&
   (lastName.isEmpty || lastName.minLengthError ||
     lastName.maxLengthError || lastName.lastNameError)
  const isEmailInvalid = email.isDirty &&
   (email.isEmpty || email.minLengthError ||
     email.maxLengthError || email.emailError)
  const isPhoneNumberInvalid = phoneNumber.isDirty &&
   (phoneNumber.isEmpty || phoneNumber.phoneNumberError)

  const handleSubmit = (e: any) => {
    e.preventDefault()
    props.changeStatus(true)
    dispatch(setUserPersonalDataTC(userPersonalData, token))
  }

  const handleClose = () => {
    props.changeStatus(true)
  }

  return (
    <div className='registration-form'>
      <div className='container'>
        <Modal.Dialog className='shadow p-3 mb-5 bg-body rounded'>
          <Modal.Header className='border-0'>
            <Modal.Title className='form-title'>Измените данные</Modal.Title>
            <CloseButton onClick={() => handleClose()} />
          </Modal.Header>

          {
            authFailed &&
            <div className='error validation'>
              Пользователь с таким адресом электронной почты уже существует.
            </div>
          }

          <Modal.Body>
            <Form className='my-3' style={{width: '100%'}}>
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
                  isFirstNameInvalid &&
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
                  isLastNameInvalid &&
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
                  isEmailInvalid &&
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
                {
                  isPhoneNumberInvalid &&
                  <div className='error'>
                    Телефон должен содержать код в формате
                    +375 (+ опционально) либо 80 и 9 цифр основного номера.
                    Обязательно к заполнению.
                  </div>
                }
              </Form.Floating>
            </Form>
          </Modal.Body>

          <Modal.Footer className='justify-content-center border-0'>
            <Button
              disabled={!firstName.inputValid ||
                !lastName.inputValid ||
                !email.inputValid ||
                !phoneNumber.inputValid ||
                authFailed}
              variant='outline-warning'
              type='submit'
              onClick={(e) => handleSubmit(e)}
            >
              Сохранить
            </Button>
          </Modal.Footer>
        </Modal.Dialog>
      </div>
    </div>
  )
}

export default shiftingPersonalForm
