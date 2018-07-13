import SuperFetch from "./super-fetch"

class AuthHelper {
  authorize = async userInfo => {
    if (!userInfo.username || !userInfo.password) {
      return { error: "Please fill in all fields" }
    }

    return await SuperFetch.get("/account/authenticate").then(response => {
      return {
        profile: "Profile",
        token: "test"
      }
    })
  }

  authorized = async () => {
    return await SuperFetch.post("/account/authenticated").then(response => {
      return {
        profile: "Profile",
        token: "test"
      }
    })
  }

  handleResponse = response => {
    if (!response.error) {
      const authorization = response.headers.Authorization

      if (authorization) {
        return {
          profile: "Profile",
          token: authorization
        }
      }
    }

    return {
      error: "Wrong username or password"
    }
  }
}

export default new AuthHelper()

export function clearToken() {
  localStorage.removeItem("authorization")
}

export function setToken(token) {
  localStorage.setItem("authorization", token)
}

export function getToken() {
  try {
    const token = localStorage.getItem("authorization")
    return token
  } catch (err) {
    clearToken()
  }
}
