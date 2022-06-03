import * as actionType from "../type"
const initialState = 0;

const changeTheNumber = (state = initialState, action) => {
    switch (action.type) {
        case actionType.INCREMENT : return state + action.payload;
        case actionType.DECREMENT: return state - 1;
        default: return state;
    }
}


export default changeTheNumber;