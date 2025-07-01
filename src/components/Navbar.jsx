import logo from "../assets/mr-logo.png"
import hamburger from "../assets/hamburger.png"
import insta from "../assets/blackinsta.png"
import fb from "../assets/blackfacebook.png"
import yt from "../assets/blackyt.png"
import github from "../assets/github.png"
import Hamburger from "./Hamburger"
import { useState } from "react"

const Navbar = () => {

  const [hamburgerPop, setHamburgerPop] = useState();

  return (

    <>

    <div data-aos="fade-down" className="relative">
      <div className="flex">
        <div className="flex">
          <img src={logo} 
          className="w-20 ml-8"/>
        </div>
        <div onClick={() => setHamburgerPop(!hamburgerPop)}
        className="absolute top-0 right-0 
        md:hidden mt-6 mr-4">
          <img src={hamburger}
          className="w-8"/>
        </div>
        <div className="hidden md:block
        absolute top-0 right-0 mt-6 mr-10">
          <div className="flex gap-2">
            <a href="https://www.instagram.com/rameezmohammed_._"
            target="_blank">
              <img src={insta}
              className="w-4 h-4"/>
            </a>
            <a href="https://www.facebook.com/rameez.a.rasheed.549"
            target="_blank">
              <img src={fb}
              className="w-4 h-4"/>
            </a>
            <a href="https://www.youtube.com/@rameezmohammed4932"
            target="_blank">
              <img src={yt}
              className="w-6 h-4"/>
            </a>
            <a href="https://www.github.com/rameezmuhammed"
            target="_blank">
              <img src={github}
              className="h-4 w-9 -ml-2"/>
            </a>              
          </div>          
        </div>
      </div>
    </div>

    {hamburgerPop && <Hamburger setHamburgerPop={setHamburgerPop}/>}

  </>  
    
  )
}

export default Navbar
