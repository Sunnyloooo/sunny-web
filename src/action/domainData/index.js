// Action Type

// Other Action

// Action Creators
const domainDataCreator = payload => ({
  type: 'LOG_USER_VERIFY',
  payload,
})

// Action
export const domainData = payload => {
  return async (dispatch, getState) => {
    try {
      const response = await fetch(`http://localhost:6001/api/admin`, {
        method: 'POST',
        headers: new Headers({
          Accept: 'application/json',
          'Content-Type': 'application/json',
        }),
        body: JSON.stringify(payload),
      })
      if (!response.ok) throw new Error(response.statusText)
      const data = await response.json()
      console.log(data)
    } catch (e) {
      console.log(e)
    }
  }
}
