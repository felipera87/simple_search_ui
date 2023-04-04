/**
 * @vitest-environment jsdom
 */

import { it, describe, vi } from 'vitest'
import { render, screen, fireEvent, waitFor } from '@testing-library/react'

import { AutoCompleteSubjectInput } from './index'
import { SubjectsContext } from '../../contexts/SubjectsContext'

describe('AutoCompleteSubjectInput component', () => {
  it('renders correctly', () => {
    const getValueMock = vi.fn()
    render(<AutoCompleteSubjectInput getSelectedSubject={getValueMock} />)

    const inputElement = screen.getByPlaceholderText('Search for subject')

    expect(inputElement).toBeInTheDocument()
  })

  it('fetches subjects after some time if more than 2 characters were typed', async () => {
    const getValueMock = vi.fn()
    const fetchSubjects = vi.fn()
    const createSubject = vi.fn()

    render(
      <SubjectsContext.Provider
        value={{
          createSubject,
          fetchSubjects,
          subjects: [],
        }}
      >
        <AutoCompleteSubjectInput getSelectedSubject={getValueMock} />
      </SubjectsContext.Provider>,
    )

    const inputElement = screen.getByPlaceholderText('Search for subject')

    fireEvent.change(inputElement, { target: { value: 'Typescript3' } })

    await waitFor(() => expect(fetchSubjects).toHaveBeenCalled(), {
      interval: 1000,
    })
  })

  it('does not fetch if less than 2 characters were typed', async () => {
    const getValueMock = vi.fn()
    const fetchSubjects = vi.fn()
    const createSubject = vi.fn()

    render(
      <SubjectsContext.Provider
        value={{
          createSubject,
          fetchSubjects,
          subjects: [],
        }}
      >
        <AutoCompleteSubjectInput getSelectedSubject={getValueMock} />
      </SubjectsContext.Provider>,
    )

    const inputElement = screen.getByPlaceholderText('Search for subject')

    fireEvent.change(inputElement, { target: { value: 'a' } })

    await waitFor(() => expect(fetchSubjects).not.toHaveBeenCalled(), {
      interval: 1000,
    })
  })
})
