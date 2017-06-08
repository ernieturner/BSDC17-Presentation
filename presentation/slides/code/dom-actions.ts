change(event: React.KeyboardEvent<HTMLInputElement>){
  this.setState({
    newName: event.target.value
  });
}

this.setState({
  newName: event.currentTarget.value
});