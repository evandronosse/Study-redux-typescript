import { call, put } from 'redux-saga/effects'
import api from '../../../services/api'
import { loadSuccces, loadFalure } from '../repositories/actions'

interface ResponseGenerator {
  config?: any
  data?: any
  headers?: any
  request?: any
  status?: number
  statusText?: string
}

export function* load() {
  try {
    const response: ResponseGenerator = yield call(
      api.get,
      'users/evandronosse/repos',
    )
    yield put(loadSuccces(response.data))
  } catch (error) {
    yield put(loadFalure())
  }
}
