import { combineReducers } from "redux";

/**
 * You can import more reducers here
 */


//@BlueprintReduxImportInsertion
import CalendarView152387Reducer from '../features/CalendarView152387/redux/reducers';
import EmailAuth152385Reducer from '../features/EmailAuth152385/redux/reducers';
import SignIn51152193Reducer from '../features/SignIn51152193/redux/reducers'

export const combinedReducers = combineReducers({
  blank: (state, action) => {
    if (state == null) state = [];
    return state;
  },


  //@BlueprintReduxCombineInsertion
CalendarView152387: CalendarView152387Reducer,
EmailAuth152385: EmailAuth152385Reducer,
SignIn51152193: SignIn51152193Reducer,

});