import { render, screen } from '../setupTests'
import { MemoryRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { store } from '../src/store/store'
import { Home } from '../src/components/pages/Home'

describe('character', () => {
  test('link', () => {

    render(<MemoryRouter>
      <Provider store={store}>
        <Home />
      </Provider>
    </MemoryRouter>)
    expect(screen.getByRole('link')).toBeInTheDocument()
    expect(screen.getByRole('link')).toHaveTextContent(/See more.../i)
  })
})