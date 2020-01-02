import React from 'react'

const LogBox = props => {
  const { handleChangeEmail, handleChangePassword, handleClick } = props
  const { email, password, emailWarn, passwordWarn } = props.state
  return (
    <>
      <div className="logBox row justify-content-center">
        <div className="col-8 m-auto text-center position-relative">
          <input
            type="email"
            id={'text'}
            value={email}
            onChange={handleChangeEmail}
            placeholder={'email'}
          />
          {emailWarn === '' ? (
            <></>
          ) : (
            <img
              src="/assets/icon/warningFill.svg"
              className="position-absolute logBoxIcon"
              alt=""
            />
          )}
          {/*<label htmlFor="text" className="logBoxLabel">*/}
          {/*  {emailWarn}*/}
          {/*</label>*/}
        </div>
        <div className="col-8 m-auto text-center position-relative">
          <input
            type="password"
            id={'password'}
            value={password}
            onChange={handleChangePassword}
            placeholder={'password'}
          />
          {passwordWarn === '' ? (
            <></>
          ) : (
            <img
              src="/assets/icon/warningFill.svg"
              className="position-absolute logBoxIcon"
              alt=""
            />
          )}
          {/*<label htmlFor="password" className="logBoxLabel">*/}
          {/*  {passwordWarn}*/}
          {/*</label>*/}
        </div>
        <div className="col-8 logBoxButton m-auto text-center">
          <h4 className={'text'} onClick={handleClick}>
            Log In
          </h4>
        </div>
      </div>
    </>
  )
}
export default LogBox
