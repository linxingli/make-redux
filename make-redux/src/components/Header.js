import React, { Component } from 'react'
import PropTypes from 'prop-types'
// import { connect } from './react-redux'
// import { connect } from 'react-redux' // 引入真正的connect高阶组件

class Header extends Component {
  static contextTypes = {
    themeColor: PropTypes.string
  }

  // componentWillMount () {
  //   const { store } = this.context
  //   this._updateThemeColor()
  //   store.subscribe(() => this._updateThemeColor())
  // }

  // _updateThemeColor () {
  //   const { store } = this.context
  //   const state = store.getState()
  //   this.setState({ themeColor: state.themeColor })
  // }

  render () {
    return (
      <h1 style={{ color: this.props.themeColor }}>make redux ---- header</h1>
    )
  }

}

export default Header