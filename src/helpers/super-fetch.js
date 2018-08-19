import axios from "axios";
import settings from "../settings"
import {
  getToken
} from "../helpers/auth"

export const csrf = async () => {
  return await axios.get(`http://${settings.api}/auth/csrf/token`)
    .then(response => {
      console.log(response)
    })
    .catch(err => {
      console.log('Houston we have a problem :(')
    })
}

const customHeaders = () => ({
  "Content-Type": "application/json",
  "Accept": "application/json",
  "Authorization": getToken() || undefined
})

const base = (method, path, data = {}) => {
  return fetch(`http://${settings.api}${path}`, {
      method: method,
      headers: customHeaders(),
      body: JSON.stringify(data),
      mode: "cors"
    })
    .then(response => response.json())
    .catch(error => ({
      error: "Server Error"
    }))
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