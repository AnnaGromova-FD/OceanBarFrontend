import { NavLink } from "react-router-dom";
import { Button, Card, Col, CardGroup } from 'react-bootstrap';
import {useParams} from "react-router-dom";




function ListItem(props: any) {


    const token= useParams<{token:string}>()
    console.log(token);



    //@ts-ignore
    const arrayDishes = props.data.map(dish => {
        return (
          <Col>
            <Card
                border="warning"
                bg="white"
                key="`${dish.id}`"
                text='dark'
                className="mb-3 mx-2 my-2"
                style={{ width: '18rem' }}
            >
                
                <NavLink to={'/Menu/Dishes/Dish/'+dish.id}>
                    <Card.Img variant="top" src={dish.image} id={dish.id}
                        onClick={() => console.log("открыть" + `${dish.id}`)}
                    />
                </NavLink>

                <Card.Body>
                    <Card.Title>{dish.name}</Card.Title>
                    <Card.Subtitle className="mb-3 text-muted">{dish.prise}руб</Card.Subtitle>
                    <Button variant="outline-secondary"
                        onClick={() => console.log("открыть" + `${dish.id}`)} id={dish.id}
                    >
                        Заказать
                    </Button>
                    <br />
                 </Card.Body>
            </Card>   
        </Col>     
        )
    }
    )



    return (
        <div>
            <Col className="row my-3">
                {arrayDishes}
            </Col>

        </div>
           
    );
}

export default ListItem;
