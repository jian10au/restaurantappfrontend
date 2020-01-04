import React, {Component} from 'react';
import axios from 'axios'

class EditRestaurant extends Component {

    state = {
        name:null,
        description:null
        
    }


    async componentDidMount(){
      
       const {data} = await axios.get(`http://localhost:5000/${this.props.match.params.id}`)
        this.setState({
            name:data.name,
            description:data.description
        })
    }


    handleChange = (e) => {
        this.setState({
            [e.target.id]:e.target.value
        })
    }

    handleSubmit = async (e) => {
        e.preventDefault();
        
        await axios.put(`http://localhost:5000/update/${this.props.match.params.id}`,this.state)
        console.log('success')
        
        this.props.history.push("/")
    }


    render(){
        
        const {name,description} = this.state
        return(
            <>
            <h2>Edit this restaurant</h2>
            <form onSubmit={this.handleSubmit}>
                <label htmlFor="name">Name</label>
                <input type="text" name="name" id="name" defaultValue={name} onChange={this.handleChange}/>
                <label htmlFor="description">Description</label>
                <input type="text" name="description" id="description" defaultValue={description} onChange={this.handleChange}/>
                <button onClick={this.handleSubmit}>Click</button>
            </form>
            </>
        )
    }



} 

export default EditRestaurant