import DisplayLanguage from "./assets/DisplayLanguage"
import LanguageContext from "./assets/LanguageContext"

function App() {

  return (
    <LanguageContext.Provider value="props?">
      <DisplayLanguage/>
    </LanguageContext.Provider>

  )
}

export default App
