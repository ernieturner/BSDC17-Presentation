class MyComponent
  extends React.Component<Props, State>

interface MyComponentProps {
  foo: string;
  bar: number;
  list: string[];
  callback: (isOn: boolean) => void;
  opts: {
    config1: boolean;
    config2: string;
  };
}

interface MyComponentState {
  loading: boolean;
  age: number;
}

onClick(){
  this.props.callback();
}

onAgeChange(changeEvent){
  this.setState({
    name: changeEvent.currentTarget.value
  });
}