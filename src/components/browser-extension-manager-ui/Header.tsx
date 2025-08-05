import PublicImage from "../PublicImage"
import sunIcon from "../../assets/images/icon-sun.svg"
import moonIcon from "../../assets/images/icon-moon.svg"
import { useTheme } from "../../theme/use-theme"

function Header(){
  const {toggle} = useTheme()

  return (
    <header className="flex justify-between p-2 bg-white dark:bg-base-300 rounded-lg">
      <PublicImage src="browser-extension-manager-ui/images/logo.svg" alt="Logo"/>

      <button onClick={toggle} className="btn btn-circle bg-neutral-200 dark:bg-neutral-800 outline-secondary focus:outline-1">
        <img src={sunIcon.src} alt="sun icon" className="hidden dark:inline" />
        <img src={moonIcon.src} alt="moon icon" className="inline dark:hidden "/>
      </button>
    </header>
  )
}

export default Header