export const checkResponseStatus = (response) => {
  if (response.status >= 200 && response.status < 300) {
    return response
  } else {
    var error = new Error(response.statusText)
    error.response = response
    throw error
  }
}

export const parseResponseToJSON = (response) => {
  return response.json()
}

export const parseJWT = (token) => {
  if (!token) return null
  let base64Url = token
  let base64 = base64Url.replace('-', '+').replace('_', '/')
  let parts = base64.split('.')
  if (parts.length != 3) return null

    try {
      let [headerRaw, payloadRaw, signatureRaw] = parts

      let header = JSON.parse(atob(headerRaw))
      let payload = JSON.parse(atob(payloadRaw))
      let signature = atob(signatureRaw)
      return {
        header,
        claims,
        signature
      }
    } catch (err) {
      console.error('Authentication token is invalid')
      return null
    }
}