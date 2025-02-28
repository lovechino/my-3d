import logo from "../Images/7.jpg"
import { Link } from "react-scroll"

export const NavBar = ()=>{
    return(
        <nav className="mb-20 flex items-center justify-between">
           <div className="flex flex-shrink-0 items-center">
             <Link to="home" spy = {true} offset={-100} duration={500}><img className="w-20" src= {logo} alt="logo"/></Link>
           </div>
           <div className=" m-8 flex items-center justify-center gap-4 ">
             <div className=" hover:border-b border-neutral-950 active:border-b border-pink-700"><Link to="about" spy = {true} offset={-100} duration={500}>About</Link></div>
             <div className=" hover:border-b border-neutral-950"><Link to="teammate" spy = {true} offset={-100} duration={500} >Teammate</Link></div>
             <div className=" hover:border-b border-neutral-950"><Link to="experience" spy = {true} offset={-100} duration={500}>Experience</Link></div>
           </div>
        </nav>
    )
}