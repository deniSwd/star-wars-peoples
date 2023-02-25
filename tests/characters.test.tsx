import { Provider } from 'react-redux'
import { MemoryRouter } from 'react-router-dom'
import { render, screen } from '../setupTests'
import { store } from '../src/store/store'
import { Characters } from '../src/components/pages/Characters'

describe('character', () => {
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

