import { useCallback, useContext, useEffect, useRef, useState } from 'react'
import debounce from 'lodash.debounce'
import { SubjectsContext } from '../../contexts/SubjectsContext'
import { Container, DropdownContainer } from './styles'

interface Subject {
  id: string
  code: string
  name: string
  description?: string
  created_at: string
}

interface AutoCompleteSubjectInputProps {
  getSelectedSubject: (subject: Subject) => void
}

export function AutoCompleteSubjectInput({
  getSelectedSubject,
}: AutoCompleteSubjectInputProps) {
  const [query, setQuery] = useState('')
  const [openDropdown, setOpenDropdown] = useState(false)

  const dropdownContainerRef = useRef<HTMLDivElement>(null)

  const { fetchSubjects, subjects } = useContext(SubjectsContext)

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const handleSearchSubjects = useCallback(
    debounce(async (searchQuery: string) => {
      if (searchQuery.length > 1) {
        await fetchSubjects(searchQuery)
        setOpenDropdown(true)
      }
    }, 400),
    [fetchSubjects],
  )

  const handleClickOutside = (event: globalThis.MouseEvent) => {
    if (
      dropdownContainerRef.current &&
      !dropdownContainerRef.current.contains(event.target as Node)
    ) {
      setOpenDropdown(false)
    }
  }

  useEffect(() => {
    document.addEventListener('click', handleClickOutside, true)
    return () => {
      document.removeEventListener('click', handleClickOutside, true)
    }
  }, [])

  function updateSearchValue(searchQuery: string) {
    setQuery(searchQuery)
    handleSearchSubjects(searchQuery)
  }

  return (
    <Container>
      <input
        type="text"
        name="query"
        placeholder="Search for subject"
        value={query}
        onChange={(e) => {
          updateSearchValue(e.target.value)
        }}
      />

      {openDropdown && (
        <DropdownContainer ref={dropdownContainerRef}>
          <ul>
            {subjects.map((subject) => {
              return (
                <li key={subject.id}>
                  <button
                    type="button"
                    onClick={() => {
                      setOpenDropdown(false)
                      getSelectedSubject(subject)
                    }}
                  >
                    <span>
                      {subject.name} ({subject.code})
                    </span>
                    {subject.description && (
                      <small>{subject.description}</small>
                    )}
                  </button>
                </li>
              )
            })}
          </ul>
        </DropdownContainer>
      )}
    </Container>
  )
}
