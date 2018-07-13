import { all, takeEvery, put, call, fork } from "redux-saga/effects"
import { push } from "react-router-redux"
import actions from "./actions"
import { setToken, clearToken } from "../../helpers/auth"
import AuthHelper from "../../helpers/auth"
import notification from "../../components/notification"

export function* checkAuthorization() {
  yield takeEvery(actions.CHECK_AUTHORIZATION, function*() {
    const result = yield call(AuthHelper.authorized)
    if (result.token) {
      yield put({
        type: actions.LOGIN_SUCCESS,
        payload: result
      })
    }
  })
}

export function* loginRequest() {
  yield takeEvery(actions.LOGIN_REQUEST, function*({ payload }) {
    const { history, userInfo } = payload
    const result = yield call(AuthHelper.authorize, userInfo)
    if (result.token) {
      yield put({
        type: actions.LOGIN_SUCCESS,
        payload: result,
        history
      })
    } else {
      notification("error", result.error || result)
      yield put({ type: actions.LOGIN_ERROR })
    }
  })
}

export function* loginSuccess() {
  yield takeEvery(actions.LOGIN_SUCCESS, function*({ payload, history }) {
    yield setToken(payload.token)
    if (history) {
      history.push("/dashboard")
    }
  })
}

export function* loginError() {
  yield takeEvery(actions.LOGIN_ERROR, function*() {})
}

export function* logout() {
  yield takeEvery(actions.LOGOUT, function*() {
    clearToken()
    yield put(push("/"))
  })
}

export default function* rootSaga() {
  yield all([
    fork(checkAuthorization),
    fork(loginRequest),
    fork(loginSuccess),
    fork(loginError),
    fork(logout)
  ])
}
