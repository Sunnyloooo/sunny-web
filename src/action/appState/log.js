// Action Type
import { LOG_USER_VERIFY } from './actionType'

// Other Action

// Action Creators
const logVerifyCreator = payload => ({
  type: LOG_USER_VERIFY,
  payload,
})

// Action
//// login
export const logVerify = payload => {
  return async (dispatch, getState) => {
    try {
      const response = await fetch(
        `https://sunny-node.herokuapp.com/api/admin`,
        {
          method: 'POST',
          headers: new Headers({
            Accept: 'application/json',
            'Content-Type': 'application/json',
          }),
          credentials: 'include',
          body: JSON.stringify(payload),
        }
      )
      if (!response.ok) throw new Error(response.statusText)
      const data = await response.json()
      if (data && data.code === 0) {
        alert('登入成功')
        dispatch(logVerifyCreator(true))
      } else {
        alert('登入失敗')
      }
    } catch (e) {
      console.log(e)
    }
  }
}
//// logCheck
export const logCheck = payload => {
  return async (dispatch, getState) => {
    try {
      const response = await fetch(
        `https://sunny-node.herokuapp.com/api/admin`,
        {
          method: 'GET',
          headers: new Headers({
            Accept: 'application/json',
            'Content-Type': 'application/json',
          }),
          credentials: 'include',
        }
      )
      if (!response.ok) throw new Error(response.statusText)
      const data = await response.json()
      if (data && data.code === 0) {
        //  login access
        dispatch(logVerifyCreator(true))
      } else {
        //  login deny
      }
    } catch (e) {
      console.log(e)
    }
  }
}
//// logOut
export const logOut = payload => {
  return async (dispatch, getState) => {
    try {
      const response = await fetch(
        `https://sunny-node.herokuapp.com/api/admin`,
        {
          method: 'DELETE',
          headers: new Headers({
            Accept: 'application/json',
            'Content-Type': 'application/json',
          }),
          credentials: 'include',
        }
      )
      if (!response.ok) throw new Error(response.statusText)
      const data = await response.json()
      if (data && data.code === 0) {
        dispatch(logVerifyCreator(false))
      }
    } catch (e) {
      console.log(e)
    }
  }
}
