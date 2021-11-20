/* eslint-disable no-invalid-this */
/* eslint-disable require-jsdoc */
import React from 'react'
import Cards from 'react-credit-cards'
import {Button} from 'react-bootstrap'
import 'react-credit-cards/lib/styles.scss'
import 'react-credit-cards/es/styles-compiled.css'

export default class PaymentForm extends React.Component {
[x: string]: any;
  state = {
    cvc: '345',
    expiry: '0822',
    focus: '',
    name: 'Ben Bernanke',
    number: '4245841464354390'
  };
  changeStatus: any;

  fieldFocus = (e: any) => {
    this.setState({focus: e.target.name})
  }

  numberChange = (e: any) => {
    const {name, value} = e.target
    this.setState({[name]: value})
  }
  nameChange = (e: any) => {
    const {name, value} = e.target
    this.setState({[name]: value})
  }
  expiryChange = (e:any) => {
    const {name, value} = e.target
    this.setState({[name]: value})
  }
  cvcChange = (e:any) => {
    const {name, value} = e.target
    this.setState({[name]: value})
  }

  render() {
    // eslint-disable-next-line no-console
    console.log(this.props)

    return (
      <div
        // className='order-item shadow' id={'1'}
        style={{height: '250px', margin: '10px'}}
      >

        <div id='PaymentForm'
          style={{display: 'flex', padding: '20px'}}>
          <Cards
            cvc={this.state.cvc}
            expiry={this.state.expiry}
            focused={this.state.focus}
            name={this.state.name}
            number={this.state.number}
          />
          <div>
            <form>
              <input style={{borderRadius: '5px', margin: '10px'}}
                type='tel'
                name='number'
                placeholder='Card Number'
                onChange={this.numberChange}
                onFocus={this.fieldFocus}
              />
            </form>
            <form>
              <input style={{borderRadius: '5px', margin: '10px'}}
                type='tel'
                name='name'
                placeholder='Card Name'
                onChange={this.nameChange}
                onFocus={this.fieldFocus}
              />
            </form>
            <form>
              <input style={{borderRadius: '5px', margin: '10px'}}
                type='tel'
                name='expiry'
                placeholder='Expiry time'
                onChange={this.expiryChange}
                onFocus={this.fieldFocus}
              />
            </form>
            <form>
              <input style={{borderRadius: '5px', margin: '10px'}}
                type='tel'
                name='cvc'
                placeholder='cvc'
                onChange={this.cvcChange}
                onFocus={this.fieldFocus}
              />
            </form>
          </div>
        </div>
        <Button className='offset-md-10'
          variant='outline-warning'
          type='submit'
          // onClick={(e) => handleSubmit(e)}
        >
          Готово
        </Button>

      </div>
    )
  }
}
