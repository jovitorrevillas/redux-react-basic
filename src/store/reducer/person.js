import * as actionTypes from '../action';
const initialState = {
    persons: []
}

const reducer = (state = initialState, action) => {
    switch(action.type){

        case actionTypes.GENERATE_PERSON:
            const newPerson = {
                id: Math.random(), // not really unique but good enough here!
                name: action.personData.Name,
                age: action.personData.Age
            }
            return { ...state, persons: state.persons.concat(newPerson)};

        case actionTypes.DELETE_PERSON:
            return { ...state, persons: state.persons.filter(person => person.id !== action.ID)}

    };
    return state;
}

export default reducer;