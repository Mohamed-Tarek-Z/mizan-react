import React from 'react';
import Card from 'react-bootstrap/Card';
import { Loading } from './LoadingComponent';
import { baseUrl } from '../shared/baseUrl';

let RenderCard = ({ item, ext, isLoading, ErrMess, changeimg }) => {
    if (isLoading || !item) {
        return (
            <Loading />
        );
    } else if (ErrMess) {
        return (
            <h4>{ErrMess}</h4>
        );
    } else
        return (
            <Card onClick={() => changeimg(ext)}>
                <Card.Img className='img-thumbnail' src={baseUrl + item.image + ext} alt={item.name} />
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
                    <RenderCard item={props.dish} isLoading={props.dishesLoading} ErrMess={props.dishesErrMess} ext={props.ext} changeimg={props.changeimg} />
                </div>
                <div className='col-12 col-md m-1'>
                    <RenderCard item={props.promo} isLoading={props.promosLoading} ErrMess={props.promosErrMess} ext={props.ext} changeimg={props.changeimg} />
                </div>
                <div className='col-12 col-md m-1'>
                    <RenderCard item={props.leader} isLoading={props.leadsLoading} ErrMess={props.leadsErrMess} ext={props.ext} changeimg={props.changeimg} />
                </div>
            </div>
        </div>
    );
}

export default Home;