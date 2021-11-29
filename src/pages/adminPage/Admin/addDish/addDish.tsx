// import {useState} from 'react'
import {ApiAdmin} from '../../../../api/ApiAdmin'
import {orderedToast} from '../../../../components/OrderToast/OrderedToast'
import NewDish from './newDish'

const AddDish = () => {
  const handleNewDishData=(newDish:any)=>{
    ApiAdmin.setNewDish(newDish)
      .then((res)=>{
        // @ts-ignore
        if (res.data.error) {
          orderedToast(`Ошибка добавления блюда`)
        } else if (res.status=200) {
          orderedToast(`Блюдо добавлено`)
        } else {
          (console.log(res)
          )
        }
      })
  }

  const handleNewDishImgFile=(newDishImgFormData:any)=>{
    ApiAdmin.getNewDishImgFileUrl(newDishImgFormData)
      .then((res)=>console.log(res))
  }


  return (
    <div>
      <h3>заполните поля:</h3>
      <NewDish
        handleNewDishData={handleNewDishData }
        handleNewDishImgFile={handleNewDishImgFile }
      />
    </div>

  )
}

export default AddDish
