import { connect } from 'react-redux'
import { bindActionCreators, Dispatch } from 'redux'

import { ApplicationState } from '../../stores'
import { Repository } from '../../stores/ducks/repositories/types'
import * as RepositoriesActions from '../../stores/ducks/repositories/actions'

import { RepositoryItem } from '../RepositoryItem'

interface StateProps {
  repositories: Repository[]
}
interface DispatchProps {
  loadRequest(): void
}
interface OwnProps {}

type Props = StateProps & DispatchProps & OwnProps

function RepositoryList(content: Props) {
  const { loadRequest } = content
  loadRequest()

  return (
    <ul>
      {content.repositories.map((repository) => (
        <RepositoryItem key={repository.id} repository={repository} />
      ))}
    </ul>
  )
}

const mapStateProps = (state: ApplicationState) => ({
  repositories: state.repositories.data,
})
const mapDispatchToProps = (dispatch: Dispatch) =>
  bindActionCreators(RepositoriesActions, dispatch)

export default connect(mapStateProps, mapDispatchToProps)(RepositoryList)
