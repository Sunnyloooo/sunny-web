import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Redirect } from 'react-router-dom'
// action
import { logVerify } from '../action/index'

// component
import LogBox from '../components/log/LogBox'
import Header from '../components/Header'

class Log extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      email: '',
      password: '',
      emailWarn: '',
      passwordWarn: '',
    }
  }
  componentDidMount() {
    window.addEventListener('keydown', this.keypressfn, false)
  }
  componentWillUnmount() {
    window.removeEventListener('keydown', this.keypressfn, false)
  }
  // function
  keypressfn = e => {
    if (e.key === 'Enter') {
      this.handleClick()
    }
  }
  inputCheck = () => {
    // const { email, password } = this.state
  }
  handleChangeEmail = e => {
    this.setState({ email: e.target.value })
  }
  handleChangePassword = e => {
    this.setState({ password: e.target.value })
  }
  handleClick = e => {
    const { email, password } = this.state
    if (email && password) {
      this.props.logVerify({ email, password })
    } else {
      if (email === '' && password === '') {
        this.setState({
          emailWarn: 'Type the correct Email',
          passwordWarn: 'Type the correct password',
        })
      } else if (password === '') {
        this.setState({
          passwordWarn: 'Type the correct password',
        })
      } else if (email === '') {
        this.setState({
          emailWarn: 'Type the correct Email',
        })
      }
    }
  }
  render() {
    const { login } = this.props
    return (
      <>
        {login ? (
          <Redirect to={'/'} />
        ) : (
          <div className="container-fluid log">
            <Header />
            <div className="row justify-content-center">
              <LogBox {...this} />
            </div>
          </div>
        )}
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
  bindActionCreators({ logVerify }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Log)
