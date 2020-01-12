import React from 'react'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
// components
import Logo from './Others/Logo'
import { bindActionCreators } from 'redux'
import { logOut } from '../action/appState'

const Header = props => {
  return (
    <div className="d-flex justify-content-between align-items-center pageHeader">
      <NavLink to={'/'} className="d-flex align-items-center col-6 col-sm-4">
        <Logo />
        <h4 className="mb-1 mx-3">Sunny</h4>
      </NavLink>
      <div className="d-flex col-6 col-sm-8 justify-content-end align-items-center">
        <h5 className="my-auto ml-4">
          <NavLink to="/blog">BLOG</NavLink>
        </h5>
        <h5 className="my-auto ml-4">
          {!props.login ? (
            <NavLink to="/log">LOG</NavLink>
          ) : (
            <NavLink to={'/'} onClick={props.logOut}>
              OUT
            </NavLink>
          )}
        </h5>
      </div>
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
