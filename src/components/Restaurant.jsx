import React from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom'

class Restaurant extends React.Component {

    state = {data:null}


async componentDidMount(){
    const {data} = await axios.get('http://localhost:5000/')
    this.setState({data:data})

}

render(){
    if(this.state.data!==null){
        
        const restaurants = this.state.data;
        const restaurantList = restaurants.map(
            (restaurant) => {
                return(
                    
                    <div className="restaurant" key={restaurant._id}>
                        <Link to={`/${restaurant._id}`}><p>Name: {restaurant.name}</p></Link>
                        <p>Description: {restaurant.description}</p>
                      
                    </div>

                )
            }
        )


        return(
            restaurantList
        )
        }else{
        return(
            <p>Loading Restaurant</p>
        )
    }
}


}




export default Restaurant 