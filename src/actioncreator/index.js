import {ADD,REMOVE,CLEAR} from '../actiontypes/index'

export const ADDREMINDER = (text,date) => {
    const action = {
        type : ADD,
        text:text,
        date:date
    }
    console.log("action" , action);
    return action
}

export const REMOVEREMINDER = (id) => {
    const action = {
        type : REMOVE,
        id:id
    }
    console.log("action" , action);
    return action
}

export const CLEARREMINDER = () => {
    const action = {
        type : CLEAR
    }
    return action
}