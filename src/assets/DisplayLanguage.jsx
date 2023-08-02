import { useState } from "react"
function DisplayLanguage({lang}){
    const [language,setLanguage] = useState("it")
    const handleLanguageChange =((e)=>{
      const data = e.target.value
      setLanguage(data)
    })
    return (
        <div>
          <select value={language} onChange={handleLanguageChange}>
            <option value="it">ITALIANO</option>
            <option value="en">ENGLISH</option>
          </select>
        </div>
      )
    
}
export default DisplayLanguage

// non capisco come passarglielo come props, dove dovrei inserirla
// per passargli il valore?