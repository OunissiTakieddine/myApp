import React, { Component } from 'react';
import './Additem.css'

class AddItem extends Component {
    state = {
        name: '',
        age: ''
    }

    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })

    }

    handleSubmit = (e) => {
        e.preventdefault();
        console.log(this.state)
    }


    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input type='text' placeholder='Entre name ....' id='name' onChange={this.handleChange} />
                    <input type='number' placeholder='Entre age ....' id='age' onChange={this.handleChange} />
                    <input type='submit' value='ADD' />
                </form>
            </div>
        )
    }
}
export default AddItem