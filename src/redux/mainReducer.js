import { combineReducers } from "redux";

/**
 * You can import more reducers here
 */


//@BlueprintReduxImportInsertion
import SignIn23104496Reducer from '../features/SignIn23104496/redux/reducers'
import SignIn45104494Reducer from '../features/SignIn45104494/redux/reducers'
import SignIn56104493Reducer from '../features/SignIn56104493/redux/reducers'

export const combinedReducers = combineReducers({
  blank: (state, action) => {
    if (state == null) state = [];
    return state;
  },


  //@BlueprintReduxCombineInsertion
SignIn23104496: SignIn23104496Reducer,
SignIn45104494: SignIn45104494Reducer,
SignIn56104493: SignIn56104493Reducer,

});