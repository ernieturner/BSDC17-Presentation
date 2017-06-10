export interface MyReducerState {
  data: null | string[];
  isRequesting: boolean;
  userID?: number;
}

const initialState: MyReducerState = {
  data: null,
  isRequesting: false
};

GET_DATA_SUCCESS(state: MyReducerState, action: MyAction1): MyReducerState {
>>>>>>> master
  return {
    data: action.payload.data.list,
    isRequesting: false,
    userID: action.payload.id
  };
}