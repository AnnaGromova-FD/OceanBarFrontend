import {createReducer} from '@reduxjs/toolkit'

import {
  addDishToCart,
  removeDishFromCart,
  updateDishInCart,
  clearCart,
  minusOneDish,
  plusOneDish,
} from '../actions'
import {DishInCart} from '../../common/types/dishesType'

interface IUserState {
  dishes: Array<DishInCart>
}

export const initialState: IUserState = {
  dishes: [],
}

const cartReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(addDishToCart, (state, action) => {
      const newDish: DishInCart = {
        id: action.payload.id,
        name: action.payload.name,
        price: action.payload.price,
        imageURL: action.payload.imageURL,
        numberOfDishes: action.payload.numberOfDishes,
        ingredients: action.payload.ingredients,
        position: action.payload.position,
      }
      const updState = {...state}
      updState.dishes = [...state.dishes]
      updState.dishes.push(newDish)
      return updState
    })

    .addCase(removeDishFromCart, (state, action) => {
      const id = action.payload
      const updState = {...state}
      updState.dishes = updState.dishes.filter((dish) => dish.id !== id)
      return updState
    })

    .addCase(updateDishInCart, (state, action) => {
      const index = state.dishes.findIndex(
        (dish) => dish.id === action.payload.id
      )
      state.dishes[index].ingredients = action.payload.ingredients
    })

    .addCase(clearCart, (state, action) => {
      return initialState
    })

    .addCase(plusOneDish, (state, action) => {
      const index = state.dishes.findIndex(
        (dish) => dish.id === action.payload.id
      )
      state.dishes[index].numberOfDishes = action.payload.numberOfDishes
      return state
    })

    .addCase(minusOneDish, (state, action) => {
      const index = state.dishes.findIndex(
        (dish) => dish.id === action.payload.id
      )
      state.dishes[index].numberOfDishes = action.payload.numberOfDishes
      return state
    })
})

export default cartReducer
