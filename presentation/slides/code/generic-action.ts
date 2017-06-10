interface FluxAction {
  type: string;
  error?: boolean;
}

interface MyAction1 extends FluxAction {
  type: "GET_DATA_SUCCESS";
  payload: {
    id: number;
    data: {
      list: string[];
    };
  };
}

interface MyAction2 extends FluxAction {
  type: "GET_DATA_FAILURE";
  payload: Error;
  error: boolean;
}


type Actions = MyAction1 | MyAction2;


function requestData(id: number): MyAction1 {
  return {
    type: 'GET_DATA_SUCCESS',
    payload: {
      id,
      data: {list: ['one', 'two']}
    }
  };
}