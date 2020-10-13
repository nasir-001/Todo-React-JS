import React, { Component } from 'react';
import PropTypes from 'prop-types';

class AddTodo extends Component {
    state = {
        title: ''
    }

    onChange = (e) => this.setState({ [e.target.name]: e.target.value });

    onSubmit = (e) => {
        e.preventDefault();
        this.props.addTodo(this.state.title);
        this.setState({ title: '' })
    }

    render() {
        return (
            <form onSubmit={this.onSubmit} className="flex">
                <input type="" name="title" placeholder="Add Todo ..." onChange={this.onChange} className="w-4/5 p-2" value={this.state.title} />
                <input type="submit" value="Submit" className="bg-gray-600 inline-block cursor-pointer py-3 px-5 hover:bg-gray-300 flex-1" />
            </form>
        )
    }
}


AddTodo.propTypes = {
    addTodo: PropTypes.func.isRequired
}

export default AddTodo;