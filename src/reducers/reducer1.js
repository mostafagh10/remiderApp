import {ADD,REMOVE,CLEAR} from '../actiontypes/index'
import {bake_cookie,read_cookie} from 'sfcookies'

const Reducer1 = (state=[] , action) => {
    state = read_cookie("xcookie");
    let reminders = [];
    if(action.type === ADD){
        reminders = [
            ...state,
            {text : action.text,
            date : action.date,
            id : Math.random()}
        ]
        bake_cookie("xcookie",reminders);
        return reminders
    }
    else if(action.type === REMOVE){
        reminders = state.filter(x => x.id !== action.id);
        bake_cookie("xcookie",reminders);
        return reminders;
    }
    else if(action.type === CLEAR){
        reminders = [];
        bake_cookie("xcookie",reminders);
        return reminders;
    }
    else{
        return state;
    }
}

export default Reducer1;