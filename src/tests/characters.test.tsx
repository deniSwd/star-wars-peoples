import { Provider } from 'react-redux'
import { MemoryRouter } from 'react-router-dom'
import { render, screen } from '../../setupTests'
import { store } from '../store/store'
import { Characters } from '../components/pages/Characters'

describe('character', () => {
  //Проверяем наличие загрузчика
  test('preloader', () => {
    render(<MemoryRouter>
      <Provider store={store}>
        <Characters />
      </Provider>
    </MemoryRouter>)
    expect(screen.getByRole('img')).toBeInTheDocument()
    expect(screen.getByAltText(/littleYoda/i)).toBeInTheDocument()
  })
})

