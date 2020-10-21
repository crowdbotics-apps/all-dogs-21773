import { combineReducers } from "redux";

/**
 * You can import more reducers here
 */


//@BlueprintReduxImportInsertion
import EmailAuth152385Reducer from '../features/EmailAuth152385/redux/reducers';
import SignIn51152193Reducer from '../features/SignIn51152193/redux/reducers'

export const combinedReducers = combineReducers({
  blank: (state, action) => {
    if (state == null) state = [];
    return state;
  },


  //@BlueprintReduxCombineInsertion
EmailAuth152385: EmailAuth152385Reducer,
SignIn51152193: SignIn51152193Reducer,

});