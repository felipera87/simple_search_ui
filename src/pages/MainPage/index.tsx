import { Header } from '../../components/Header'
import { Container, SearchFormContainer, SelectedSubject } from './styles'
import { useState } from 'react'
import { AutoCompleteSubjectInput } from '../../components/AutoCompleteSubjectInput'

export function MainPage() {
  const [selectedSubject, setSelectedSubject] = useState('')

  return (
    <Container>
      <Header />

      <SearchFormContainer>
        <AutoCompleteSubjectInput
          getSelectedSubject={(subject) => setSelectedSubject(subject.name)}
        />
      </SearchFormContainer>

      {selectedSubject && (
        <SelectedSubject>
          <h2>Selected Subject</h2>
          <span>{selectedSubject}</span>
        </SelectedSubject>
      )}
    </Container>
  )
}
