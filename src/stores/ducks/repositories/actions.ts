import { action } from 'typesafe-actions'
import { RepositoriesTypes, Repository } from './types'

export const loadRequest = () => action(RepositoriesTypes.LOAD_REQUEST)

export const loadSuccces = (data: Repository[]) =>
  action(RepositoriesTypes.LOAD_SUCCCES, { data })

export const loadFalure = () => action(RepositoriesTypes.LOAD_FAILURE)
