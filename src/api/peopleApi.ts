import { StarWarsPeople } from '../MainTypes'

const baseUrl = 'https://swapi.dev/api/people/'
const data = <T extends object>(res: Response): Promise<T> => res.json()
export const api = (url: string, init?: RequestInit) => fetch(new URL(url, baseUrl), init)
export const getPeoples = (page: number = 1) => api(`?page=${page}`).then(data<StarWarsPeople>)

export const getAllPeolple = async () => {
  const allPeople = []
  const { count } = await getPeoples(1)
  const numberPages = Math.ceil(count / 10)
  for (let i = 1; i <= numberPages; i++) {
    const { results } = await getPeoples(i)
    allPeople.push(results)
  }
  return allPeople.flat()
}
