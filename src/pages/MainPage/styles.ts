import styled from 'styled-components'

export const Container = styled.main`
  width: 100%;
  min-height: 100vh;
  max-width: 1120px;
  margin: 4rem auto 0;
  padding: 0 1.5rem;
`

export const SearchFormContainer = styled.form`
  display: flex;
  gap: 1rem;
  margin-top: 1rem;
`

export const SelectedSubject = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  padding: 3rem;

  & > span {
    font-weight: 700;
    font-size: 3rem;
  }
`
