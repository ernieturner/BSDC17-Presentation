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

onClick(){
  this.props.callback();
}