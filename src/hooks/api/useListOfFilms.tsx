import React from 'react'
import useAPI from './useAPI'

const useListOfFilms = () => {
  const callAPI = useAPI()
  const rootEndpoint = 'films'
  const getFilms = React.useCallback(async () => {
    try {
      const response = await callAPI('get', `${rootEndpoint}`)
      return response
    } catch (error) {
      console.log(error)
    }
  }, [callAPI])

  const getFilmById = React.useCallback(
    async (id: string | undefined) => {
      try {
        const response = await callAPI('get', `${rootEndpoint}/${id}`)
        return response
      } catch (error) {
        console.log(error)
      }
    },
    [callAPI]
  )

  return { getFilms, getFilmById }
}

export default useListOfFilms
