import {useDispatch, useSelector} from 'react-redux'
import {Row, Col, Modal, CloseButton} from 'react-bootstrap'

import {DishType} from '../../../../common/types/dishesType'
import {addDishToCart} from '../../../../redux/actions'
import {orderedToast} from '../../../../components/OrderToast/OrderedToast'

import './Dish.scss'
import {DishInCart} from '../../../../common/types/dishesType'
import {ApiCart} from '../../../../api/ApiCart'
import Cookies from 'js-cookie'
import {parseString} from '../../../../common/parceInString'
import {useHistory} from 'react-router-dom'

type PropsType = {
  changeStatus: () => void
  currentDish: DishType
}

const CompletedDish = (props: PropsType) => {
  const dishes = useSelector((state: any) => state.cart.dishes)
  const history = useHistory()
  const isLogIn = useSelector((state: any) => state.auth)
  const dispatch = useDispatch()
  const ingredientList = props.currentDish.ingredients.map((el) => {
    if (el.isAdded) {
      return (
        <li style={{lineHeight: '15px'}}>
          <p>{el.name}</p>
        </li>
      )
    }
  })

  const orderDish = async (name: string, ingredients: any) => {
    if (isLogIn.isAuthorized) {
      if (dishes.find((dish: DishInCart) => dish.id === props.currentDish.id)) {
        orderedToast(`Блюдо "${props.currentDish.name}" уже в корзине!`)
      } else {
        await ApiCart.addDishToCart(
          props.currentDish.id.toString(),
          Cookies.get('token'),
          parseString(ingredients)
        ).then((res) => {
          console.log(res)
        })
        dispatch(
          addDishToCart({
            id: props.currentDish.id,
            name: props.currentDish.name,
            price: props.currentDish.price,
            imageURL: props.currentDish.imageURL,
            ingredients: props.currentDish.ingredients,
            numberOfDishes: 1,
          })
        )
        orderedToast(`Блюдо "${props.currentDish.name}" добавлено в корзину`)
      }
    } else {
      orderedToast('Войдите в сущесвтующий аккаунт или зарегистрируйтесь', 4000)
      history.push('/login')
    }
  }

  const handleClose = () => {
    window.history.go(-1)
  }

  return (
    <>
      <div className={'title-dish'}>
        <h1>{props.currentDish.name}</h1>
      </div>
      <Row>
        <Col xs={'auto'} sm={6} md={8} lg={8}>
          <div
            key={props.currentDish.id}
            style={{
              height: '100%',
              width: '100%',
              backgroundImage: `url(${props.currentDish.imageURL})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          />
        </Col>
        <Col xs={'auto'} sm={6} md={4} lg={4}>
          <div className={'ingredients'}>
            <span>
              <Modal.Header className='border-0'>
                <CloseButton onClick={() => handleClose()} />
              </Modal.Header>
            </span>
            <div className={'changing'}>
              <span className={'composition'}>Состав</span>
              <span
                className={'change-ingr'}
                onClick={() => {
                  props.changeStatus()
                }}
              >
                Изменить
              </span>
            </div>

            <ul>{ingredientList}</ul>

            <br />
            <span>
              <h5>Вес: {props.currentDish?.weight}</h5>
            </span>
            <span>
              <h5>Калории: {props.currentDish?.calories}</h5>
            </span>
            <div className='line-dish'></div>
            <br />
            <div style={{display: 'flex', alignItems: 'baseline'}}>
              <span style={{fontSize: '15px'}}>
                <h5>Стоимость:</h5>
              </span>
              <span style={{fontSize: '20px', marginLeft: '3px'}}>
                {props.currentDish?.price}
              </span>
              <span style={{fontSize: '18px', marginLeft: '2px'}}>BYN</span>
            </div>
            <button
              className={'order-btn-dish'}
              onClick={() => {
                orderDish(props.currentDish.name, props.currentDish.ingredients)
              }}
            >
              Заказать
            </button>
          </div>
        </Col>
      </Row>
    </>
  )
}

export default CompletedDish
