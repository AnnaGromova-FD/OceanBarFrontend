
import {DishType} from '../../../redux/reducers/dishesReducer'

type PropsType = {
  categoryDish: Array<DishType>
}

const SliderGallertItem = (props: PropsType) => {
  const imgWidth = '400px'
  const imgHeight = '300px'
  const imgMargin = '20px'

  return (
    <div
      style={{
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center'
      }}
    >
      <div
        key={props.categoryDish[0].id}
        style={{
          margin: imgMargin,
          height: imgHeight,
          width: imgWidth,
          backgroundImage: `url(${props.categoryDish[0].imageURL})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      />

      <div
        key={props.categoryDish[1].id}
        style={{
          margin: imgMargin,
          height: imgHeight,
          width: imgWidth,
          backgroundImage: `url(${props.categoryDish[0].imageURL})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      />

      <div
        key={props.categoryDish[0].id}
        style={{
          margin: imgMargin,
          height: imgHeight,
          width: imgWidth,
          backgroundImage: `url(${props.categoryDish[1].imageURL})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      />
    </div>
  )
}

export default SliderGallertItem
