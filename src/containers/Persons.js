import React, { Component } from 'react';

import Person from '../components/Person/Person';
import {connect} from 'react-redux';
import AddPerson from '../components/AddPerson/AddPerson';
import * as actionType from '../store/action'

class Persons extends Component {
    render () {
        return (
            <div>
                <AddPerson personAdded={this.props.personAddedHandler} />
                {this.props.persons.map(person => (
                    <Person 
                        key={person.id}
                        name={person.name} 
                        age={person.age} 
                        clicked={() => this.props.personDeletedHandler(person.id)}/>
                ))}
            </div>
        );
    }
}

const mapStateToProps = state => ({persons: state.persons});

const mapDispatchToProps = dispatch => ({
    personAddedHandler: (newName, newAge) => dispatch({type: actionType.GENERATE_PERSON, personData: {Name: newName, Age: newAge}}),
    personDeletedHandler: (personId) => dispatch({type: actionType.DELETE_PERSON, ID: personId})
})

export default connect(mapStateToProps, mapDispatchToProps)(Persons);