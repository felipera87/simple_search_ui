/**
 * @vitest-environment jsdom
 */

import { it, describe, expect } from 'vitest'

import { fireEvent, render, screen } from '@testing-library/react'

import { Header } from './index'

describe('Header component', () => {
  it('renders correctly', () => {
    render(<Header />)

    expect(screen.getByText('Simple Search')).toBeInTheDocument()
    expect(screen.getByText('New Subject')).toBeInTheDocument()
  })

  it('opens the create new subject modal', () => {
    render(<Header />)

    const newSubjectButton = screen.getByText('New Subject')

    fireEvent.click(newSubjectButton)

    expect(screen.getByText('Save')).toBeInTheDocument()
  })
})
