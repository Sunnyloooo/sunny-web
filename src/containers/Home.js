import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
// action
import { logVerify, logOut } from '../action/index'

// component
import Header from '../components/Header'
class Home extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  render() {
    return (
      <>
        <div className="container-fluid homePage">
          <Header />
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

export default connect(mapStateToProps, mapDispatchToProps)(Home)
