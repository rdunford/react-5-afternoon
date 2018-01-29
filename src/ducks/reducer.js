// Initial State
const initialState = {
    loanType: 'Home Purchase',
    propertyType: 'Single Family Home',
    city: '',
    propToBeUsedOn: '',
    found: 'false',
    realEstateAgent: "false",
    cost: 0,
    downPayment: 0,
    credit: '',
    history: '',
    addressOne: '',
    addressTwo: '',
    addressThree: '',
    firstName: '',
    lastName: '',
    email: ''
}

//Action Typea
const UPDATE_LOAN_TYPE = "UPDATE_LOAN_TYPE";
const UPDATE_PROPERTY_TYPE = 'UPDATE_PROPERTY_TYPE';
const UPDATE_CITY = 'UPDATE_CITY';
const UPDATE_PROP = 'UPDATE_PROP';
const UPDATE_FOUND = 'UPDATE_FOUND';
const UPDATE_AGENT = 'UPDATE_AGENT';
const UPDATE_COST = 'UPDATE_COST';
const UPDATE_PAYMENT = 'UPDATE_PAYMENT';
const UPDATE_CREDIT = 'UPDATE_CREDIT';
const UPDATE_HISTORY = 'UPDATE_HISTORY';
const UPDATE_ADDRESS_ONE = 'UPDATE_ADDRESS_ONE';
const UPDATE_ADDRESS_TWO = 'UPDATE_ADDRESS_TWO';
const UPDATE_ADDRESS_THREE = 'UPDATE_ADDRESS_THREE';
const UPDATE_FIRSTNAME = 'UPDATE_FIRSTNAME';
const UPDATE_LASTNAME = 'UPDATE_LASTNAME';
const UPDATE_EMAIL = 'UPDATE_EMAIL'


//Reducer Function
function reducer(state = initialState, action) {
    console.log('REDUCER HIT: Action ->', action);

    switch (action.type) {
        case UPDATE_LOAN_TYPE:
            console.log('Updated loanType: ', action.payload)
            return Object.assign({}, state, { loanType: action.payload });

        case UPDATE_PROPERTY_TYPE:
            console.log('Updated PropertyType: ', action.payload)
            return Object.assign({}, state, { propertyType: action.payload });

        case UPDATE_CITY:
            console.log('Updated City: ', action.payload)
            return Object.assign({}, state, { city: action.payload });

        case UPDATE_PROP:
            console.log('Updated Prop: ', action.payload)
            return Object.assign({}, state, { propToBeUsedOn: action.payload });

        case UPDATE_FOUND:
            console.log('Updated Found: ', action.payload);
            return Object.assign({}, state, { found: action.payload });

        case UPDATE_AGENT:
            console.log('Updated Agent: ', action.payload);
            return Object.assign({}, state, { realEstateAgent: action.payload });

        case UPDATE_COST:
            console.log('Updated Cost: ', action.payload);
            return Object.assign({}, state, { cost: action.payload });

        case UPDATE_PAYMENT:
            console.log('Updated Payment: ', action.payload);
            return Object.assign({}, state, { downPayment: action.payload });

        case UPDATE_CREDIT:
            console.log('Updated Credit: ', action.payload);
            return Object.assign({}, state, { credit: action.payload });

        case UPDATE_HISTORY:
            console.log('Updated History: ', action.payload);
            return Object.assign({}, state, { history: action.payload });

        case UPDATE_ADDRESS_ONE:
            console.log('Updated Address_One: ', action.payload);
            return Object.assign({}, state, { addressOne: action.payload });

        case UPDATE_ADDRESS_TWO:
            console.log('Updated Address_Two: ', action.payload);
            return Object.assign({}, state, { addressTwo: action.payload });

        case UPDATE_ADDRESS_THREE:
            console.log('Updated Address_Three: ', action.payload);
            return Object.assign({}, state, { addressThree: action.payload });

        case UPDATE_FIRSTNAME:
            console.log('Updated First Name: ', action.payload);
            return Object.assign({}, state, { firstName: action.payload });

        case UPDATE_LASTNAME:
            console.log('Updated Last Name: ', action.payload);
            return Object.assign({}, state, { lastName: action.payload });

        case UPDATE_EMAIL:
            console.log('Updated Email: ', action.payload);
            return Object.assign({}, state, { email: action.payload });

        default:
            return state;
    }
}

//Action Creators
export function updateLoanType(loanType) {
    return {
        type: UPDATE_LOAN_TYPE,
        payload: loanType
    }
}
export function updatePropertyType(property) {
    return {
        type: UPDATE_PROPERTY_TYPE,
        payload: property
    }
}
export function updateCity(city) {
    return {
        type: UPDATE_CITY,
        payload: city
    }
}
export function updateProp(prop) {
    return {
        type: UPDATE_PROP,
        payload: prop
    }
}
export function updateFound(found) {
    return {
        type: UPDATE_FOUND,
        payload: found
    }
}
export function updateAgent(agent) {
    return {
        type: UPDATE_AGENT,
        payload: agent
    }
}
export function updateCost(cost) {
    return {
        type: UPDATE_COST,
        payload: cost
    }
}
export function updatePayment(payment) {
    return {
        type: UPDATE_PAYMENT,
        payload: payment
    }
}
export function updateCredit(credit) {
    return {
        type: UPDATE_CREDIT,
        payload: credit
    }
}
export function updateHistory(history) {
    return {
        type: UPDATE_HISTORY,
        payload: history
    }
}
export function updateAddressOne(address) {
    return {
        type: UPDATE_ADDRESS_ONE,
        payload: address
    }
}
export function updateAddressTwo(address) {
    return {
        type: UPDATE_ADDRESS_TWO,
        payload: address
    }
}
export function updateAddressThree(address) {
    return {
        type: UPDATE_ADDRESS_THREE,
        payload: address
    }
}
export function updateFirstName(name) {
    return {
        type: UPDATE_FIRSTNAME,
        payload: name
    }
}
export function updateLastName(name) {
    return {
        type: UPDATE_LASTNAME,
        payload: name
    }
}
export function updateEmail(email) {
    return {
        type: UPDATE_EMAIL,
        payload: email
    }
}


export default reducer;