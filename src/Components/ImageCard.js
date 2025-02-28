import { motion } from "framer-motion"
export const ImageCard = ({children,imgSrc})=>{
    return(
        <motion.div
        initial = {{y :-10}}
        animate = {{
            y:[10,-10],
            transition:{
                duration:0.5,
                ease:'linear',
                repeat:Infinity,
                repeatType:'reverse'
            }
        }} 
         className=" relative max-w-xs overflow-hidden rounded-2xl shadow-lg group">
            <img className=" transition-transform group-hover:scale-110 duration-200" src={imgSrc} alt="image"/>
            <div className=" absolute inset-0 flex items-end bg-gradient-to-t from-black/60 to-transparent ">
                <div className="p4 text-white">{children}</div>
            </div>
        </motion.div>
    )
}