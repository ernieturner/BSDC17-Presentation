import {requestData} from 'actions/MyActions';
...
export default connect(
  null,
  (dispatch: any) => {
    return bindActionCreators({ requestData }, dispatch);
  }
)(MyComponent);


interface MyComponentProps {
    requestData: (id: number) => MyAction1;
}


interface MyComponentProps {
    requestData: typeof requestData;
}