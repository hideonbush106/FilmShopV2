import React from 'react'
import useAPI from './useAPI'
import { Film } from '~/global/interface'

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

  const editFilmById = React.useCallback(
    async (id: string | undefined, data: Film) => {
      try {
        const response = await callAPI('put', `${rootEndpoint}/${id}`, {}, {}, data)
        return response
      } catch (error) {
        console.log(error)
      }
    },
    [callAPI]
  )

  const createFilm = React.useCallback(
    async (data: Film) => {
      try {
        const response = await callAPI('post', `${rootEndpoint}`, {}, {}, data)
        return response
      } catch (error) {
        console.log(error)
      }
    },
    [callAPI]
  )

  const deleteFilmById = React.useCallback(
    async (id: string | undefined) => {
      try {
        const response = await callAPI('delete', `${rootEndpoint}/${id}`)
        return response
      } catch (error) {
        console.log(error)
      }
    },
    [callAPI]
  )

  return { getFilms, getFilmById, editFilmById, createFilm, deleteFilmById }
}

export default useListOfFilms
