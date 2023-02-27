import { render, screen } from '../../setupTests'
import { MemoryRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { store } from '../store/store'
import { Home } from '../components/pages/Home'

describe('character', () => {
  //Проверяем наличие кнопки на главной странице
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