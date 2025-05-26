import { useContext } from "react"
import { ThemeContext } from "./ThemeContext"

const ComponentD = () => {
  const themeContext = useContext(ThemeContext)

  if(!themeContext){
    throw new Error('ThemeSwitcher harus digunakan didalam Theme Provider')
  }

  const {theme, changeTheme} = themeContext

  return (
    <button className='btn bg-yellow-400 text-dark-500 px-5 py-1 rounded-md' onClick={changeTheme}>{theme}</button>
  )
}

export default ComponentD