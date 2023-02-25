import * as hooks from '../src/store/hooks'
import { RootState } from '../src/store/store'
import { render, screen } from '../setupTests'
import { Characters } from '../src/components/pages/Characters'
import { CharacterCard } from '../src/components/macro/CharacterCard'

describe('character', () => {
  const useDispatchSpy = vi.spyOn(hooks, 'useAppDispatch')
  const mockDispatchFn = vi.fn()
  useDispatchSpy.mockReturnValue(mockDispatchFn)
  const useSelectorSpy = vi.spyOn(hooks, 'useAppSelector')
  const mockStore: RootState = {
    starWarsPeoples: {
      results: [
        {
          name: 'Luke Skywalker',
          height: '172',
          mass: '77',
          hair_color: 'blond',
          skin_color: 'fair',
          eye_color: 'blue',
          birth_year: '19BBY',
          gender: 'female',
          homeworld: 'https://swapi.dev/api/planets/1/',
          films: [
            'https://swapi.dev/api/films/1/',
            'https://swapi.dev/api/films/2/',
            'https://swapi.dev/api/films/3/',
            'https://swapi.dev/api/films/6/'
          ],
          species: [],
          vehicles: [
            'https://swapi.dev/api/vehicles/14/',
            'https://swapi.dev/api/vehicles/30/'
          ],
          starships: [
            'https://swapi.dev/api/starships/12/',
            'https://swapi.dev/api/starships/22/'
          ],
          created: '2014-12-09T13:50:51.644000Z',
          edited: '2014-12-20T21:17:56.891000Z',
          url: 'https://swapi.dev/api/people/1/'
        }
      ],
      error: ''
    }
  }
  useSelectorSpy.mockImplementation(selector => selector(mockStore))

  test('have a card', () => {
    render(<Characters />)
    expect(screen.getByTestId('cardTestId')).toBeInTheDocument()
  })
  test('info', () => {
    render(<CharacterCard char={mockStore.starWarsPeoples.results[0]}
                          onCharClick={() => alert('yes')} />)
    expect(screen.getByText(/Luke Skywalker/i)).toBeInTheDocument()
    expect(screen.getByText(/172/i)).toBeInTheDocument()
    expect(screen.getByText(/77/)).toBeInTheDocument()
    expect(screen.getByText(/19BBY/i)).toBeInTheDocument()
    expect(screen.getByText(/male/i)).toBeInTheDocument()
  })
  test('gender,birth_year color', () => {
    render(<CharacterCard char={mockStore.starWarsPeoples.results[0]}
                          onCharClick={() => alert('yes')} />)
    expect(screen.getByText('female')).toHaveStyle(`background: #C956FF;`)
    expect(screen.getByText('19BBY')).toHaveStyle(`background: #07D6F2;`)
  })
})