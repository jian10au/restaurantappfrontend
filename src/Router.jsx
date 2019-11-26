import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Restaurant from './components/Restaurant';
import NewRestaurant from './components/NewRestaurant'
import ShowRestaurant from './components/ShowRestaurant'
import EditRestaurant from './components/EditRestaurant';
const Router = () => {

    return(
        <Switch>
            <Route exact path="/new" component={NewRestaurant} />
            {/* you can pass props through */}
            <Route exact path='/edit/:id' render={(match,history) => <EditRestaurant match={match} history={history}/> }/>
            <Route exact path="/:id" render={({match,history}) => <ShowRestaurant match={match} history={history}/>} />
            <Route exact path="/" render={() => <Restaurant />} />
           
        </Switch>

    )
}

export default Router