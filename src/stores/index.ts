import { Store } from 'redux'
import { configureStore } from '@reduxjs/toolkit'
import rootReducer from './ducks/rootReducer'
import rootSaga from './ducks/rootSaga'
import createSagaMiddleware from 'redux-saga'
import { RepositoriesState } from './ducks/repositories/types'

export interface ApplicationState {
  repositories: RepositoriesState
}

const sagaMiddleware = createSagaMiddleware()

const store: Store<ApplicationState> = configureStore({
  reducer: rootReducer,
  middleware: [sagaMiddleware],
})

sagaMiddleware.run(rootSaga)

export default store
