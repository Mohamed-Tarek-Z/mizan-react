import React from 'react';
import Card from 'react-bootstrap/Card';
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import { Link } from 'react-router-dom';
import { Loading } from './LoadingComponent';

function Menu({ dishes, ext, changeimg }) {
    if (dishes.isLoading)
        return (
            <div className="container">
                <div className="d-flex justify-content-center">
                    <Loading />
                </div>
            </div>
        );
    else if (dishes.errMessage)
        return (
            <div className="container">
                <div className="d-flex justify-content-center">
                    <h4>{dishes.dishesErrMess}</h4>
                </div>
            </div>
        );
    else
        return (
            <div className="container">
                <div className="row">
                    <Breadcrumb>
                        <Breadcrumb.Item href="/home">
                            Home
                        </Breadcrumb.Item>
                        <Breadcrumb.Item active>
                            Menu
                        </Breadcrumb.Item>
                    </Breadcrumb>
                    <div className="col-12">
                        <h3>Menu</h3><hr />
                    </div>
                </div>
                <div className="row">
                    {dishes.dishes.map((dish) => {
                        return (
                            <div key={dish.id} className="col-md-5 col-sm-12 m-4">
                                <Card onClick={() => changeimg(ext)}>
                                    <Link to={`/menu/${dish.id}`} key={dish.id}>
                                        <Card.Img width="100%" src={dish.image + ext} alt={dish.name} />
                                        <Card.ImgOverlay>
                                            <Card.Title>{dish.name}</Card.Title>
                                        </Card.ImgOverlay>
                                    </Link>
                                </Card>
                            </div>
                        );
                    })}
                </div>
            </div>
        );
}

export default Menu;