import React from 'react';
import Card from 'react-bootstrap/Card';
import { Outlet } from 'react-router-dom';

let RenderCard = ({ item, ext }) => {
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
                    <RenderCard item={props.dish} ext={props.ext} />
                </div>
                <div className='col-12 col-md m-1'>
                    <RenderCard item={props.promo} ext={props.ext} />
                </div>
                <div className='col-12 col-md m-1'>
                    <RenderCard item={props.leader} ext={props.ext} />
                </div>
            </div>
            <Outlet/>
        </div>
    );
}

export default Home;