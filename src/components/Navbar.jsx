import { Menu, X } from "lucide-react"
import { useState } from "react"



const NavLinks = () => {


  return (
    <>

      <div>Features</div>
      <div>Use Cases</div>
      <div>Pricing</div>
      <div>Resourses</div>
      <div>Company</div>

      <div id="nav_btn" className="flex gap-4">
        <button className="text-[#084DF2] border-[#084DF2] border-2 px-2 rounded">Login</button>
        <button className="bg-[#084DF2] text-white px-2 py-1 rounded">Create Account</button>
      </div>
    </>
  )
}


function Navbar() {

  const [isOpen, setIsOpen] = useState(true);

  const toggleIsOpen = () => setIsOpen(!isOpen);

  return (
    <div className="fixed top-0 z-20 w-full border-2  bg-white flex  md:justify-center justify-between items-center p-[15px] flex-wrap ">

      <div id="logo" className="border-2">
        <h1 className="text-2xl">LOGO</h1>
      </div>


      <div className="flex gap-5 w-[80%] justify-end ">

        <div className="md:hidden" >
          {(isOpen) ?

            <button id="menu_btn" onClick={toggleIsOpen}><Menu></Menu></button> :

            <button id="menu_btn" onClick={toggleIsOpen}><X></X></button>
          }
        </div>

        <div id="nav_links" className="md:flex hidden gap-2 justify-center items-center">
          <NavLinks></NavLinks>
        </div>

      </div>

      {(!isOpen) &&

        <div id="nav_links" className="md:hidden flex flex-col basis-full justify-center items-center ">
          <NavLinks></NavLinks>
        </div>

      }

    </div>
  )
}

export default Navbar;
