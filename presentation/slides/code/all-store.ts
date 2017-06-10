import MyReducer, {MyReducerState} from "./MyReducer";

export interface AllStore {
  stateSlice: MyReducerState;
};

export default combineReducers({
  stateSlice: MyReducer
});



