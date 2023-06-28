import FilmPresentation from '~/components/Main/FilmPresentation'
import { listOfFilms } from '~/shared/ListOfFilms'

export default function Main() {
  return <FilmPresentation films={listOfFilms} />
}
