import { combineReducers } from "redux";

/**
 * You can import more reducers here
 */


//@BlueprintReduxImportInsertion
import SignIn45104494Reducer from '../features/SignIn45104494/redux/reducers'
import SignIn56104493Reducer from '../features/SignIn56104493/redux/reducers'

export const combinedReducers = combineReducers({
  blank: (state, action) => {
    if (state == null) state = [];
    return state;
  },


  //@BlueprintReduxCombineInsertion
SignIn45104494: SignIn45104494Reducer,
SignIn56104493: SignIn56104493Reducer,

});