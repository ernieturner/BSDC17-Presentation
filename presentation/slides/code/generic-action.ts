interface FluxAction<PayloadType>{
  type: string;
  error?: boolean;
  payload: PayloadType | Error;
}

type ActionType = "GET_DATA_REQUEST" |
                  "GET_DATA_SUCCESS" |
                  "GET_DATA_FAILURE";
                  
interface FluxAction<PayloadType>{
  type: ActionType;
  error?: boolean;
  payload: PayloadType | Error;
}

type MyAction = FluxAction<{
  id: number;
  data: {
    list: string[];
  };
}>;

function requestData(id: number): MyAction {
  return {
    type: 'GET_DATA_REQUEST',
    payload: {
      id,
      data: {list: ['one', 'two']}
    }
  };
}