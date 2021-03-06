import React, { Component } from 'react'
import PropTypes from 'prop-types'
// import { connect } from './react-redux'
// import { connect } from 'react-redux'


class ThemeSwitch extends Component {
  static contextTypes = {
    onSwitchColor: PropTypes.func,
    themeColor: PropTypes.string
  }

  // constructor () {
  //   super()
  //   this.state = {
  //     themeColor: ''
  //   }
  // }

  // componentWillMount () {
  //   const { store } = this.context
  //   this._updateThemeColor()
  //   store.subscribe(() => this._updateThemeColor())
  // }

  // _updateThemeColor () {
  //   const { store } = this.context
  //   const state = store.getState()
  //   this.setState({
  //     themeColor: state.themeColor
  //   })
  // }

  // handleSwitchColor (color) {
  //   const { store } = this.context
  //   store.dispatch({ 
  //     type: 'CHANGE_COLOR',
  //     themeColor: color
  //   })
  // }

  render () {
    return (
      <div>
        <button style={{ color: this.props.themeColor }} 
                onClick={ this.props.onSwitchColor.bind(this, 'Red') }>Red</button>
        <button style={{ color: this.props.themeColor }}
                onClick={ this.props.onSwitchColor.bind(this, 'blue') }>Blue</button>
      </div>
    )
  }
}

export default ThemeSwitch