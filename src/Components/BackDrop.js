import { motion } from "framer-motion"
export const Backdrop = ({open,setClose,children})=>{
    return(
        <motion.div
        // onClick={onClick}
        // initial={{opacity:0}}
        // animate={{opacity:1}}
        // exit={{opacity :0}}
        onClick={(e)=>e.stopPropagation()}
        className = {` fixed inset-0 flex justify-center items-center transition-colors ${ open ? "visible bg-black/20" : "invisible"}`} >
          <div className= {`bg-white rounded-xl shadow p-6 transition-all ${open ? "scale-100 opacity-100" : "scale-125 opacity-0"}`}>
            <button onClick={setClose} className=" absolute top-2 right-2 p-1 rounded-lg text-gray-400 bg-white hover:bg-gray-50 hover:text-gray-600">X</button>
            {children}
          </div>
        </motion.div>
    )
}

