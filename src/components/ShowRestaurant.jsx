import React from 'react';
import axios from 'axios';

class ShowRestaurant extends React.Component {

    state = {
        restaurant:null
    }

    async componentDidMount() {
        const {data} = await axios.get(`http://localhost:5000/${this.props.match.params.id}`)
        
        this.setState({
            restaurant:data
        })
        
    }

    handleEdit =()=> {
        this.props.history.push(`/edit/${this.props.match.params.id}`)
    }

    deleteOneRestaurant = async (id) => {
        await axios.delete(`http://localhost:5000/delete/${id}`)
    
        this.props.history.push('/')

    }


    render(){
        const {restaurant} = this.state
        return restaurant ? (
            <div>
                <h1>{restaurant.name}</h1>
                <p>{restaurant.description}</p>
                <button onClick={this.handleEdit}>Edit</button>
                <button onClick={() => this.deleteOneRestaurant(this.props.match.params.id)}>Delete</button>
            </div>
        ):<h1>Loading</h1>

    }

}

export default ShowRestaurant