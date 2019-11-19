import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Restaurant from './components/Restaurant';
import NewRestaurant from './components/NewRestaurant'
import EditRestaurant from './components/EditRestaurant'
const Router = () => {

    return(
        <Switch>
            <Route exact path="/new" component={NewRestaurant} />
            <Route exact path="/" render={() => <Restaurant />} />
            <Route exact path="/edit/:id" render={() => <EditRestaurant />} />
        </Switch>

    )
}

export default Router