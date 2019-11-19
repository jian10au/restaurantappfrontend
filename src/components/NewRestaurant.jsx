import React from 'react';
import axios from 'axios'

class NewRestaurant extends React.Component {
    state = {
        name:null,
        description:null
    }

    handleChange = (e) => {
        this.setState({
            [e.target.id]:e.target.value
        })
        
    }

    handleSubmit = async (e) => {
        e.preventDefault()
        // console.log(e.target.name.value)
        // console.log(e.target.description.value)
        await axios.post('http://localhost:5000/create',this.state)
        console.log('success');
        this.props.history.push('/')
    }

    render(){
        console.log(this.props);
        return(
            <>
            <h2>Enter new restaurant</h2>
            <form onSubmit={this.handleSubmit}>
                <label htmlFor="name">Name</label>
                <input type="text" name="name" id="name" onChange={this.handleChange}/>
                <label htmlFor="description">Description</label>
                <input type="text" name="description" id="description" onChange={this.handleChange}/>
                <button>Submit</button>
            </form>
            </>
    )
}
}






export default NewRestaurant