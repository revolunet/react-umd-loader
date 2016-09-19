import React, { Component } from 'react';
import script from 'scriptjs';


// load remote component and return it when ready
// display current children while loading
class LoadUmd extends Component {
  state = {
    Component: null,
    error: null
  }
  static propTypes = {
    url: React.PropTypes.string.isRequired,
    name: React.PropTypes.string.isRequired,
    props: React.PropTypes.object
  }
  componentDidMount() {
    // expose React for UMD build
    window.React = React;
    // async load of remote UMD component
    script(this.props.url, () => {
      const target = window[this.props.name];
      if (target) {
        // loaded OK
        this.setState({
          error: null,
          Component: target
        })
      } else {
        // loaded fail
        this.setState({
          error: `Cannot load component ${this.props.name} at ${this.props.url}`,
          Component: null
        })
      }
    });
  }
  render() {
    if (this.state.Component) {
      return <this.state.Component {...this.props.props || {} } />
    } else if (this.state.error) {
      return <div>{ this.state.error }</div>
    } else {
      return this.props.children
    }
  }
}


export default LoadUmd
