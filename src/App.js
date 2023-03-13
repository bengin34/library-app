import { ThemeProvider } from "styled-components";
import AppRouter from "./router/AppRouter";

import { lightTheme, darkTheme } from "./styles/theme";
import { useEffect,useState } from "react";

function App() {
  const [myTheme, setMyTheme] = useState(
    sessionStorage.getItem("theme") || ("light")
  )

  const [themes,setThemes] = useState(lightTheme)

  useEffect(() => {
    sessionStorage.setItem("theme",myTheme)
    setThemes(myTheme === "light" ? lightTheme: darkTheme)
  },[myTheme])
  return (
    <div className="App">
      <ThemeProvider theme={themes}>
      
        <AppRouter myTheme={myTheme} setMyTheme={setMyTheme} />
      </ThemeProvider>
    </div>
  );
}

export default App;
