import React from 'react'
import Page from './components/princ/page'
import styled, {ThemeProvider} from 'styled-components'
import { Darkmode } from './style/darkmode'
import { Toggle } from './components/toggler/toggle'
import { GlobalStyles,lightTheme , darkTheme } from './style/globalStyle'

const Container = styled.div`
    color : black 
`;


export const App = () => {
    const [theme, toggleTheme] = Darkmode();
    const themeMode = theme === 'light' ? lightTheme : darkTheme;
  return (
    <ThemeProvider theme={themeMode}>
        <Container>
            <GlobalStyles></GlobalStyles>
            <Toggle theme={theme} toggleTheme={toggleTheme}></Toggle>
            <Page></Page>  
        </Container>
   </ThemeProvider> 
  )
}

