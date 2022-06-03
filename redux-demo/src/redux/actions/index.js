import * as actionType from "../type";

export const incNumber = (num) => {
    return {
        type: actionType.INCREMENT,
        payload: num
    }
}

export const decNumber = () => {
    return {
        type: actionType.DECREMENT
    }
};