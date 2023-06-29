import React from 'react'
import { Film } from '~/global/interface'
import useListOfFilms from '~/hooks/api/useListOfFilms'

export type DataContextType = {
  films: Film[]
  loading: boolean
}

export const DataContext = React.createContext<DataContextType | null>(null)

interface Props {
  children: React.ReactNode
}
const DataProvider = ({ children }: Props) => {
  const [films, setFilms] = React.useState<Film[]>([])
  const { getFilms } = useListOfFilms()
  const [loading, setLoading] = React.useState<boolean>(true)
  React.useEffect(() => {
    const fetchFilms = async () => {
      const response = await getFilms()
      setFilms(response)
      setLoading(false)
    }
    fetchFilms()
  }, [getFilms])
  const value: DataContextType = {
    films,
    loading
  }
  return <DataContext.Provider value={value}>{children}</DataContext.Provider>
}

export default DataProvider
