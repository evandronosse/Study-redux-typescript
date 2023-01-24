import { Repository } from '../../stores/ducks/repositories/types'

interface OwnProps {
  repository: Repository
}

export function RepositoryItem({ repository }: OwnProps) {
  return <li>{repository.name}</li>
}
