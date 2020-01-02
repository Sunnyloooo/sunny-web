import React from 'react'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
// components
import Logo from './Others/Logo'
import { bindActionCreators } from 'redux'
import { logOut } from '../action/appState'

const Header = props => {
  return (
    <div className="row justify-content-between align-items-center m-3">
      <NavLink to={'/'} className="row align-items-center">
        <Logo />
        <h4 className="m-3">Sunny</h4>
      </NavLink>
      <h5>
        {!props.login ? (
          <NavLink to="/log"> LOG</NavLink>
        ) : (
          <NavLink to={'/'} onClick={props.logOut}>
            OUT
          </NavLink>
        )}
      </h5>
    </div>
  )
}
const mapStateToProps = store => {
  return {
    login: store.appState.login,
  }
}
const mapDispatchToProps = dispatch => bindActionCreators({ logOut }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Header)
