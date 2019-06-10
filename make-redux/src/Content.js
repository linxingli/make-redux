import React, { Component } from 'react'
import PropTypes from 'prop-types'
import ThemeSwitch from './ThemeSwitch'

class Content extends Component {
  render () {
    return (
      <div>
        <p>make redux ---- 内容</p>
        <ThemeSwitch />
      </div>
    )
  }
}

export default Content