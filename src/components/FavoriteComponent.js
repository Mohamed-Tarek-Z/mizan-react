import React from 'react';
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import Button from 'react-bootstrap/Button'
import { Link } from 'react-router-dom';
import { Loading } from './LoadingComponent';
import { baseUrl } from '../shared/baseUrl';

function RenderMenuItem({ dish, deleteFavorite, ext }) {
    return (
        <li className="media d-flex align-items-start">
            <img className="flex-shrink-0 m-3 " width="5%" src={baseUrl + dish.image + ext} alt={dish.name} />
            <div className="flex-grow-1 media-body">
                <h4>{dish.name}</h4>
                <p>{dish.description}</p>
                <Button variant='danger' onClick={() => deleteFavorite(dish._id)}>
                    <span className="fa fa-times"></span>
                </Button>
            </div>
        </li>
    );
}

function Favorites({ favorites, deleteFavorite, ext }) {
    if (favorites.isLoading)
        return (
            <div className="container">
                <div className="d-flex justify-content-center">
                    <Loading />
                </div>
            </div>
        );
    else if (favorites.errMessage)
        return (
            <div className="container">
                <div className="d-flex justify-content-center">
                    <h4>{favorites.errMessage}</h4>
                </div>
            </div>
        );
    else
        return (
            <div className="container">
                <div className="row">
                    <Breadcrumb>
                        <Breadcrumb.Item linkAs={Link} linkProps={{ to: '/home' }} >
                            Home
                        </Breadcrumb.Item>
                        <Breadcrumb.Item active>
                            My Favorites
                        </Breadcrumb.Item>
                    </Breadcrumb>
                    <div className="col-12">
                        <h3>My Favorites</h3><hr />
                    </div>
                </div>
                <div className="row">
                    {
                        favorites.favorites != null ?
                            favorites.favorites.dishes.map((dish) => {
                                return (
                                    <div key={dish._id} className="col-12 mt-5">
                                        <RenderMenuItem dish={dish} deleteFavorite={deleteFavorite} ext={ext} />
                                    </div>
                                );
                            }) : <h1>add some favs</h1>
                    }
                </div>
            </div>
        );
}

export default Favorites;