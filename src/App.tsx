import { Router } from "./routes"

import { ThemeProvider } from "styled-components"
import { GlobalStyle } from "./styles/global"
import { DefaultTheme } from "./styles/themes/defaultTheme"
import { BrowserRouter } from "react-router-dom"
import { UserGitContextProvider } from "./contexts/userGitContext"

function App() {
 
  return (
    <ThemeProvider theme={DefaultTheme}>

      <UserGitContextProvider>

        <BrowserRouter>
          <Router />
        </BrowserRouter>
        
      </UserGitContextProvider>

      <GlobalStyle />

    </ThemeProvider>
  )
}

export default App
