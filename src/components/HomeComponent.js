import React from 'react';
import Card from 'react-bootstrap/Card';
import { Loading } from './LoadingComponent';

let RenderCard = ({ item, ext, dishesLoading, dishesErrMess }) => {
    if (dishesLoading) {
        return (
            <Loading />
        );
    } else if (dishesErrMess) {
        return (
            <h4>{dishesErrMess}</h4>
        );
    } else
        return (
            <Card>
                <Card.Img src={item.image + ext} alt={item.name} />
                <Card.Body>
                    <Card.Title>{item.name}</Card.Title>
                    {item.designation ? <Card.Subtitle>{item.designation}</Card.Subtitle> : null}
                    <Card.Text>{item.description}</Card.Text>
                </Card.Body>
            </Card>
        );
}

function Home(props) {
    return (
        <div className='container'>
            <div className='row align-items-start'>
                <div className='col-12 col-md m-1'>
                    <RenderCard item={props.dish} dishesLoading={props.dishesLoading} dishesErrMess={props.dishesErrMess} ext={props.ext} />
                </div>
                <div className='col-12 col-md m-1'>
                    <RenderCard item={props.promo} dishesLoading={props.dishesLoading} dishesErrMess={props.dishesErrMess} ext={props.ext} />
                </div>
                <div className='col-12 col-md m-1'>
                    <RenderCard item={props.leader} dishesLoading={props.dishesLoading} dishesErrMess={props.dishesErrMess} ext={props.ext} />
                </div>
            </div>
        </div>
    );
}

export default Home;