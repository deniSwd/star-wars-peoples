import { CharacterType, StarWarsPeople } from '../MainTypes'

const baseUrl = 'https://swapi.dev/api/people/'
const data = <T extends object>(res: Response): Promise<T> => res.json()
export const api = (url: string, init?: RequestInit) => fetch(new URL(url, baseUrl), init)
export const getPeoples = (page: number = 1) => api(`?page=${page}`).then(data<StarWarsPeople>)

export const getAllPeople = async () => {
  const allPeople = []
  const { count } = await getPeoples(1)
  const numberPages = Math.ceil(count / 10)
  const promises: Array<Promise<CharacterType[]>> = []
  for (let i = 1; i <= numberPages; i++)
    promises.push(getPeoples(i).then(v => v.results))
  allPeople.push(...await Promise.all(promises))
  return allPeople.flat()
}
