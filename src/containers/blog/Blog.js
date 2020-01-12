import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { NavLink } from 'react-router-dom'

// action
import { logVerify, logOut } from '../../action'

// component
import Header from '../../components/Header'
import BlogContents from '../../components/blog/Contents'

class Blog extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  render() {
    const { path } = this.props.match
    return (
      <>
        <div className="container-fluid homePage">
          <Header />
          <div className="d-flex blog">
            <NavLink to={`${path}/Categories`}>
              <h3>Categories</h3>
            </NavLink>
          </div>
          <div className="d-flex">
            {/*<div className="col-8">*/}
            {/*  <BlogContents />*/}
            {/*</div>*/}
          </div>
        </div>
      </>
    )
  }
}
const mapStateToProps = store => {
  return {
    login: store.appState.login,
  }
}
const mapDispatchToProps = dispatch =>
  bindActionCreators({ logVerify, logOut }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Blog)
