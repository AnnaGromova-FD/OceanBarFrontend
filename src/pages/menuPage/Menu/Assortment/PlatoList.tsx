import React from 'react'
import {Row} from 'react-bootstrap'
import ListItem from './ListItem'
import foodData from '../DB/foodData'


const PlatoList = () => {
  return (
    <>
      <Row>
        <ListItem data={foodData[0]} />
      </Row>
    </>

  )
}

export default PlatoList
