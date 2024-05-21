import { Router } from "./routes"

import { ThemeProvider } from "styled-components"
import { GlobalStyle } from "./styles/global"
import { DefaultTheme } from "./styles/themes/defaultTheme"
import { BrowserRouter } from "react-router-dom"

function App() {
 
  return (
    <ThemeProvider theme={DefaultTheme}>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
      <GlobalStyle />

    </ThemeProvider>
  )
}

export default App
