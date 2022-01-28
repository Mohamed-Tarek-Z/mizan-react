import React from 'react';
import Card from 'react-bootstrap/Card';
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import { Link } from 'react-router-dom';
import { Loading } from './LoadingComponent';
import { baseUrl } from '../shared/baseUrl';

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
                    <h4>{dishes.errMessage}</h4>
                </div>
            </div>
        );
    else
        return (
            <div className="container">
                <div className="row">
                    <Breadcrumb>
                        <Breadcrumb.Item linkAs={Link} linkProps={{to:'/home'}} >
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
                                    <Link className="link-unstyled" to={`/menu/${dish.id}`}>
                                        <Card.Img className='img-thumbnail' width="100%" src={baseUrl + dish.image + ext} alt={dish.name} />
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