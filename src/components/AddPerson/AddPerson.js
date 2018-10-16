import React, {Component} from 'react';

import './AddPerson.css';

class AddPerson extends Component {
    state = {
        name: '',
        age: ''
    }

    onNameChangeHandler = (evt) => {
        this.setState({...this.state, name: evt.target.value})
    }
    
    onAgeChangeHandler = (evt) => {
        this.setState({...this.state, age: evt.target.value})
    }

    render() {
        return (
            <div className="AddPerson">
                <input type="text" placeholder="Name" onChange={this.onNameChangeHandler} value={this.state.name}/>
                <input type="number" placeholder="Age" onChange={this.onAgeChangeHandler} value={this.state.age}/>
                <button onClick={() => this.props.personAdded(this.state.name, this.state.age)}>Add Person</button>
            </div>
        );
    }
}

export default AddPerson;