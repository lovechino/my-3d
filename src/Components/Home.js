import faker from "../Images/licensed-image.jpg"
import {motion} from "framer-motion"
export const Home = () =>{
  const container = (delay)=>({
    hidden :{x :-100,opacity :0},
    visible :{
      x :0,
      opacity :1,
      transition :{duration :0.5,delay : delay}
    }
  })
    return (
        <div id="home" className="border-b border-neutral-900 pb-4 lg:mb-35">
            <div className="flex flex-wrap">
                <div className="w-full lg:w-1/2">
                  <div className="flex flex-col items-center lg:items-start">
                    <motion.h1 variants={container(1)} initial = "hidden" animate = "visible" className="pb-16 text-6xl font-thin tracking-tight lg:mt-16 lg:text-8xl">Faker</motion.h1>
                    <motion.span variants={container(1)} initial = "hidden" animate = "visible"
                    className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-4xl tracking-tight text-transparent">Pro player</motion.span>
                    <motion.p variants={container(1)} initial = "hidden" animate = "visible" className="my-2 max-w-xl py-6 font-light tracking-tighter">Lee Sang-hyeok (Hangul: 이상혁, sinh ngày 7 tháng 5 năm 1996 tại Seoul, Hàn Quốc), được biết đến phổ biến với nghệ danh Faker, là một Game thủ chuyên nghiệp, thành viên, đội trưởng của đội tuyển thể thao điện tử T1 với tựa game Liên Minh Huyền Thoại và là tuyển thủ đầu tiên được vào Đại Sảnh Danh Vọng của tựa game này. Anh được coi là tuyển thủ vĩ đại nhất trong lịch sử của bộ môn này khi cùng SKT T1 lên ngôi vô địch thế giới Liên Minh Huyền Thoại các mùa 2013, 2015, 2016 và 2023, Á quân năm 2017 và 2022.[1]</motion.p>
                  </div>
                </div>
                <div className="w-full lg:w-1/2 lg:p-8">
                   <div className="flex justify-center">
                     <motion.img initial = {{x : 100,opacity : 0}} animate = {{x : 0,opacity :1}} transition={{duration : 1,delay : 1.2}} className="w-1/2" src= {faker} alt="faker"/>
                   </div>
                </div>
            </div>
        </div>
    )
}