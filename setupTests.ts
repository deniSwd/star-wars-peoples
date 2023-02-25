/// <reference types="vitest/globals" />
import '@testing-library/jest-dom';
import "@testing-library/jest-dom/extend-expect";
/* eslint-disable import/export */
import { cleanup, render } from '@testing-library/react'
import { ReactElement } from 'react';
import { afterEach } from 'vitest'

afterEach(() => {
  cleanup()
})

const customRender = (ui: ReactElement, options = {}) =>
  render(ui, {
    // wrap provider(s) here if needed
    wrapper: ({ children }) => children,
    ...options,
  })

export * from '@testing-library/react'
export { default as userEvent } from '@testing-library/user-event'
// override render export
export { customRender as render }