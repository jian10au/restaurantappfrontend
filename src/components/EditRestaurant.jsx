import React from 'react';
import axios from 'axios';

class EditRestaurant extends React.Component {

    state = {
        restaurant:null
    }

    async componentDidMount() {
        const response = await axios.get('localhost:3000/edit/')
    }


    render(){
        const {restaurant} = this.state
        return restaurant ? (
            <div>
                <h1>On Edit Page</h1>



            </div>
        ):null

    }

}

export default EditRestaurant