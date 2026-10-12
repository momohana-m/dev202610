import { cleanup, fireEvent, render, screen } from '@testing-library/react'
import '@testing-library/jest-dom/vitest'
import { useState } from 'react'
import { afterEach, describe, expect, it } from 'vitest'

afterEach(cleanup)

function Counter() {
  const [count, setCount] = useState(0)

  return (
    <button type="button" onClick={() => setCount((current) => current + 1)}>
      Count: {count}
    </button>
  )
}

describe('React environment', () => {
  it('renders a component and updates its state on user interaction', () => {
    render(<Counter />)

    const button = screen.getByRole('button', { name: 'Count: 0' })
    expect(button).toBeInTheDocument()

    fireEvent.click(button)
    expect(screen.getByRole('button', { name: 'Count: 1' })).toBeInTheDocument()
  })
})
