import { ThemeProvider } from 'styled-components'
import { SubjectsProvider } from './contexts/SubjectsContext'
import { MainPage } from './pages/MainPage'
import { GlobalStyle } from './styles/global'
import { defaultTheme } from './styles/themes/default'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />

      <SubjectsProvider>
        <MainPage />
      </SubjectsProvider>
    </ThemeProvider>
  )
}
