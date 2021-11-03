import React from 'react'
import {Row} from 'react-bootstrap'

import ListItem from './ListItem'
import {useAppSelector} from '../../../../redux/hooks'


const SoupList = () => {
  const allDishes = useAppSelector<any>((state) => state.dish)
  // @ts-ignores
  const soupDishes = allDishes.filter((dish) => {
    return dish.dishCategory=='Супы'
  })

  return (
    <>
      <Row >
        <ListItem data={soupDishes} />
      </Row>
    </>
  )
}

export default SoupList


