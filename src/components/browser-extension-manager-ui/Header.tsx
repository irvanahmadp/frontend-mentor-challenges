import iconSun from "../../assets/images/icon-sun.svg"

function Header(){
  return (
    <header className="flex justify-between p-2 bg-white dark:bg-base-300 rounded-lg">
      <img src="/browser-extension-manager-ui/images/logo.svg" className=""/>

      <button className="btn btn-circle btn-secondary outline-secondary focus:outline-1">
        <img src={iconSun.src}/>
      </button>
    </header>
  )
}

export default Header