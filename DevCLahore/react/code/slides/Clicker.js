class Clicker extends Component {
  state = { counter: 0 }

  handleClick (event) {
    this.setState({ count: this.state.count + 1 })   
  }

  render () {
    return (
      <a onClick={this.handleClick}>You have clicked {this.state.count} times</a>
    )
  }
}