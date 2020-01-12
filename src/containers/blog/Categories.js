import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { NavLink } from 'react-router-dom'

// action
import { logVerify, logOut } from '../../action'

// component
import Header from '../../components/Header'
import BlogContents from '../../components/blog/Contents'
import BlogCategories from '../../components/blog/categories/Categories'

class Categories extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  render() {
    return (
      <>
        <div className="container-fluid homePage">
          <Header />
          <div className="categories">
            <div className="d-flex">
              <NavLink to={'/blog'}>
                <h3 className="routerBackLink"> {'<'} Back</h3>
              </NavLink>
            </div>
            <div className="d-flex">
              <div className="col-12 d-flex flex-wrap">
                <BlogCategories />
              </div>
              {/*<div className="col-8">*/}
              {/*  <BlogContents />*/}
              {/*</div>*/}
            </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(Categories)
