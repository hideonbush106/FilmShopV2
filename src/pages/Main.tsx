import FilmPresentation from '~/components/Main/FilmPresentation'
import Loading from './Loading'
import useData from '~/hooks/useData'

export default function Main() {
  const { loading, films } = useData()
  return loading ? <Loading /> : <FilmPresentation films={films} />
}
