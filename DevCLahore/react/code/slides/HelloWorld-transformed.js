class HelloWorld extends Component {
  render () {
    return React.createElement('h1', {}, 'Hello ' + this.props.name)
  }
}