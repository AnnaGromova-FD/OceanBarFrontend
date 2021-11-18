import React, {ChangeEvent, useState} from 'react'
import {useSelector} from 'react-redux'
import DatePicker from 'react-date-picker'
import {Form, FloatingLabel, Button, Modal} from 'react-bootstrap'
import {AppStoreType} from '../../redux/reducers/rootReducer'
import {useValidation} from '../../utils/validation'
import {UserType} from '../../common/types/userTypes'
import './OrderForms.scss'

interface IReserveATableFormProps {
  handleBookingData: (bookingOrder: any) => void
}

const ReserveATableForm: React.FC<IReserveATableFormProps> =
  ({handleBookingData}) => {
    const user =
     useSelector<AppStoreType, UserType>((state) => state.user.userProfile)

    const [date, setDate] = useState<Date>(new Date())
    const [timeSlot, setTimeSlot] = useState<string>('')
    const [tableSize, setTableSize] = useState<string>('')
    const [isTimeInputSkipped, setTimeInputSkipped] = useState<boolean>(false)
    const [isTableInputSkipped, setTableInputSkipped] = useState<boolean>(false)

    const useInput = (initialValue: string, validations: any) => {
      const [value, setValue] = useState(initialValue)
      const [isDirty, setDirty] = useState(false)
      const valid = useValidation(value, validations)

      const onChange = (e: any) => {
        setValue(e.target.value)
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

    const table = useInput('', {})
    const time = useInput('', {})

    const phoneNumber = useInput(`${user.phone}`, {
      isEmpty: true,
      phoneNumberError: true,
    })

    const userName = useInput(`${user.name}`, {
      isEmpty: true,
      firstNameError: true,
      minLengthError: 2,
      maxLengthError: 30,
    })

    const isTimeInvalid = !time.isDirty || time.isDirty && isTimeInputSkipped

    const isTableInvalid = !table.isDirty ||table.isDirty && isTableInputSkipped

    const isPhoneNumberInvalid = phoneNumber.isDirty &&
    (phoneNumber.isEmpty || phoneNumber.phoneNumberError)

    const isUserNameInvalid = (userName.firstNameError && userName.isDirty) ||
    (userName.isEmpty && userName.isDirty)

    const tableSizes: Array<string> = [
      'двоих гостей',
      'четверых гостей',
      'шестерых гостей',
      'восьмерых гостей',
      'десятерых гостей',
    ]

    const timeSlots: Array<string> = [
      '10:00 - 11:00',
      '11:00 - 12:00',
      '12:00 - 13:00',
      '13:00 - 14:00',
      '14:00 - 15:00',
      '15:00 - 16:00',
      '16:00 - 17:00',
      '17:00 - 18:00',
      '18:00 - 19:00',
      '19:00 - 20:00',
      '20:00 - 21:00',
      '21:00 - 22:00',
    ]

    const reservOrder={
      date: date,
      timeSlot: timeSlot,
      tableSize: tableSize,
      userName: userName.value,
      userPhone: phoneNumber.value
    }


    // const enterName = (e:React.ChangeEvent<any>) => {
    //   setUserName(e.target.value)
    // }

    return (
      <div className='reserve-a-table-form-booking shadow'>
        <div className='form-section'>

          <div className='form-data'>

            <div className='section-numeration'>
              <span>1</span>
            </div>

            <div className='section-header'>
              <span>Выберите дату</span>
            </div>

            <div className='section-content'>
              <DatePicker
                clearIcon={null}
                format='d-MM-y'
                minDate={new Date()}
                onChange={(date: Date) => setDate(date)}
                value={date}
                dayAriaLabel='Day'
                monthAriaLabel='Month'
                yearAriaLabel='Year'
              />
            </div>
          </div>

          <div className='form-separation'></div>
        </div>

        <div className='form-section'>
          <div className='form-data'>
            <div className='section-numeration'>
              <span>2</span>
            </div>

            <div className='section-header'>
              <span>Количество гостей</span>
            </div>

            <div className='section-content'>
              <FloatingLabel
                controlId='floatingSelectGrid'
                label='Столик для:'
              >
                <Form.Select
                  aria-label='Floating label select example'
                  defaultValue={tableSize}
                  onChange={(e: ChangeEvent<HTMLSelectElement>) => {
                    setTableSize(e.target.value)
                    setTableInputSkipped(!e.target.value)
                  }}
                  onBlur={(e) => table.onBlur(e)}
                  isInvalid={isTableInputSkipped}
                >
                  <option value=''>Выбрать...</option>
                  {tableSizes.map((size, idx) => (
                    <option
                      value={size}
                      key={size}
                    >
                      {size}
                    </option>
                  ))}
                </Form.Select>
              </FloatingLabel>
            </div>
          </div>

          <div className='form-separation'></div>
        </div>

        <div className='form-section'>
          <div className='form-data'>
            <div className='section-numeration'>
              <span>3</span>
            </div>

            <div className='section-header'>
              <span>Выберите время</span>
            </div>

            <div className='section-content'>
              <FloatingLabel
                controlId='floatingSelectGrid'
                label='Бронь столика доступна с 10:00 до 22:00'
              >
                <Form.Select
                  aria-label='Floating label select example'
                  defaultValue={timeSlot}
                  onChange={(e: ChangeEvent<HTMLSelectElement>) => {
                    setTimeSlot(e.target.value)
                    setTimeInputSkipped(!e.target.value)
                  }}
                  onBlur={(e) => time.onBlur(e)}
                  isInvalid={isTimeInputSkipped}
                >
                  <option value=''>Выбрать...</option>
                  {timeSlots.map((time, idx) => (
                    <option value={time} key={time}>{time}</option>
                  ))}
                </Form.Select>
              </FloatingLabel>
            </div>
          </div>

          <div className='form-separation'></div>
        </div>

        <div className='form-section'>
          <div className='form-data'>
            <div className='section-numeration'>
              <span>4</span>
            </div>

            <div className='section-header'>
              <span>Контактные данные</span>
            </div>

            <div className='section-content payment-types'>


              <Form.Floating className='mx-1'>
                <Form.Control
                  id='userName'
                  disabled={user.name.length>0}
                  type='text'
                  placeholder='userName'
                  value={userName.value}
                  isInvalid={isUserNameInvalid}
                  onChange={(e) => userName.onChange(e)}
                  onBlur={(e) => userName.onBlur(e)}
                />
                <label htmlFor='userName'>
                  Введите имя
                </label>
              </Form.Floating>
              {
                isUserNameInvalid &&
                  <div className='error'>
                   Имя обязательно
                  </div>
              }

              <Form.Floating className='mx-1 my-3'>
                <Form.Control
                  id='userPhones'
                  disabled={user.phone.length>0}
                  type='phoneNumber'
                  placeholder='phones'
                  value={phoneNumber.value}
                  isInvalid={isPhoneNumberInvalid}
                  onChange={(e) => phoneNumber.onChange(e)}
                  onBlur={(e) => phoneNumber.onBlur(e)}
                />
                <label htmlFor='userPhones'>
                  Введите номер телефона
                </label>
                {
                  isPhoneNumberInvalid &&
                  <div className='error'>
                    Телефон должен содержать код в формате
                    +375 (+ опционально) либо 80 и 9 цифр основного номера.
                    Обязательно к заполнению.
                  </div>
                }
              </Form.Floating>

            </div>
          </div>

          <div className='form-separation'></div>
        </div>

        <div className='form-section'>
          <div className='form-buttons'>
            <Modal.Footer className='justify-content-center border-0'>
              <Button
                onClick={()=>handleBookingData(reservOrder)}
                style={{width: '140px'}}
                variant='outline-warning'
                disabled={ isTableInvalid || isTimeInvalid || !date ||
                  isUserNameInvalid || isPhoneNumberInvalid
                }
              >
              Забронировать
              </Button>

              {/* <div
                style={{
                  borderRadius: '4px',
                  border: '2px solid #fdd008',
                  color: 'gray',
                  height: '25px',
                  width: '80px',
                  textAlign: 'center',
                  cursor: 'pointer',
                  lineHeight: '20px',
                }}
                onClick={reserveTable}>
                    Готово
              </div> */}
            </Modal.Footer>
          </div>
        </div>
      </div>
    )
  }

export default ReserveATableForm
