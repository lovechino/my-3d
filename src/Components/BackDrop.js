import { motion } from "framer-motion"
export const Backdrop = ({open,setClose,children})=>{
    return(
        <motion.div
        // onClick={onClick}
        // initial={{opacity:0}}
        // animate={{opacity:1}}
        // exit={{opacity :0}}
        className = {`absolute bottom-0 left-0 flex justify-center items-center transition-colors ${ open ? "visible bg-black/20" : "invisible"}`} >
          <div className= {`bg-white rounded-xl shadow p-6 transition-all ${open ? "scale-100 opacity-100" : "scale-125 opacity-0"}`}>
            {children}
          </div>
        </motion.div>
    )
}

