import React, {useState} from 'react'
import DatePicker from 'react-date-picker'
// import TimePicker from 'react-time-picker'
import {
  Form,
  FloatingLabel,
  Button,
  ToggleButton,
  ToggleButtonGroup
} from 'react-bootstrap'

import './TakeawayForm.scss'

const DeliveryForm: React.FC = () => {
  const [selectedDate, setSelectedDate] = useState<Date>(new Date())
  // const [selectedTime, setSelectedTime] = useState('10:30')

  const timeSlots: Array<string> = [
    '16:00 - 16:30',
    '16:30 - 17:00',
    '17:00 - 17:30',
    '17:30 - 18:00',
    '18:00 - 18:30',
    '18:30 - 19:00',
    '19:00 - 19:30',
    '19:30 - 20:00',
    '20:00 - 20:30',
    '20:30 - 21:00',
    '21:00 - 21:30',
    '21:30 - 22:00',
  ]

  return (
    <div className='delivery-form shadow'>
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
              onChange={(date: Date) => setSelectedDate(date)}
              required
              value={selectedDate}
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
            <span>Выберите время</span>
          </div>

          <div className='section-content'>
            {/* <TimePicker
              clearIcon={null}
              // maxDetail='second'
              maxTime='08:00'
              minTime='23:00'
              onChange={(time: any) => setSelectedTime(time)}
              required
              value={selectedTime}
              secondAriaLabel='Second'
              minuteAriaLabel='Minute'
              hourAriaLabel='Hour'
            /> */}
            <FloatingLabel
              controlId='floatingSelectGrid'
              label='Доставка доступна с 16:00 до 22:00'
            >
              <Form.Select aria-label='Floating label select example'>
                <option>Подходящее время можно выбрать в списке</option>
                {timeSlots.map((time, idx) => (
                  <option value={time} key={idx}>{time}</option>
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
            <span>Выберите способ оплаты</span>
          </div>

          <div className='section-content payment-types'>
            <ToggleButtonGroup
              className='w-100'
              type='radio'
              name='options'
              size='sm'
            >
              <ToggleButton
                id='tbg-radio-1'
                value='cash'
                variant='outline-warning'
              >
                Наличными
              </ToggleButton>
              <ToggleButton
                id='tbg-radio-2'
                value='card-online'
                variant='outline-warning'
              >
                Картой онлайн
              </ToggleButton>
              <ToggleButton
                id='tbg-radio-3'
                value='card-at-the-restaurant'
                variant='outline-warning'
              >
                Картой на месте
              </ToggleButton>
            </ToggleButtonGroup>
          </div>
        </div>

        <div className='form-separation'></div>
      </div>

      <div className='form-section'>
        <div className='form-buttons'>
          <Button variant='outline-secondary mx-2'>Отмена</Button>
          <Button variant='outline-warning'>Далее</Button>
        </div>
      </div>
    </div>
  )
}

export default DeliveryForm
