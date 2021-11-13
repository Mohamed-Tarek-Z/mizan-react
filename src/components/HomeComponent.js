import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle } from 'reactstrap';

let RenderCard = ({ item, ext }) => {
    return (
        <Card>
            <CardImg src={item.image + ext} alt={item.name} />
            <CardBody>
                <CardTitle>{item.name}</CardTitle>
                {item.designation ? <CardSubtitle>{item.designation}</CardSubtitle> : null}
                <CardText>{item.description}</CardText>
            </CardBody>
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
        </div>
    );
}

export default Home;