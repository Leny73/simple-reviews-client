import settings from "../settings"
import { getToken } from "../helpers/auth"

const customHeaders = () => ({
  "Content-Type": "application/json",
  Accept: "application/json",
  Authorization: getToken() || undefined
})

const base = (method, path, data = {}) => {
  return fetch(`http://${settings.api}${path}`, {
    method,
    headers: customHeaders(),
    body: JSON.stringify(data)
  })
    .then(response => response.json())
    .catch(error => ({ error: "Server Error" }))
}

class SuperFetch {
  get = (path) => {
    return base("get", path)
  }

  post = (path, data) => {
    return base("post", path, data)
  }
}

export default new SuperFetch()
