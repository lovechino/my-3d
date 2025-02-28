import faker from "../Images/licensed-image.jpg"
import { motion } from "framer-motion"
export const About = ()=>{
    return(
        <div id="about" className=" border-b border-neutral-900 pb-4">
            <h1 className=" my-20 text-center text-4xl">About 
                <span className="text-neutral-500"> Me</span>
            </h1>
            <div className="flex flex-wrap">
                <motion.div
                whileInView={{opacity :1,x :0}} 
                initial ={{opacity : 0,x :-100}}
                transition={{duration : 0.5}}
                className="w-full lg:w-1/2 lg:p-8">
                  <div className=" flex items-center justify-center">
                    <img className="w-80" src= {faker} alt="faker"/>
                  </div>
                </motion.div>
                <motion.div
                  whileInView={{opacity :1,x :0}} 
                  initial ={{opacity : 0,x :100}}
                  transition={{duration : 0.5}}
                className="w-full lg:w-1/2">
                    <div className="flex justify-center lg:justify-start">
                        <p className="my-2 max-w-xl py-6">Lee Sang-hyeok (Hangul: 이상혁, sinh ngày 7 tháng 5 năm 1996 tại Seoul, Hàn Quốc), được biết đến phổ biến với nghệ danh Faker, là một Game thủ chuyên nghiệp, thành viên, đội trưởng của đội tuyển thể thao điện tử T1 với tựa game Liên Minh Huyền Thoại và là tuyển thủ đầu tiên được vào Đại Sảnh Danh Vọng của tựa game này. Anh được coi là tuyển thủ vĩ đại nhất trong lịch sử của bộ môn này khi cùng SKT T1 lên ngôi vô địch thế giới Liên Minh Huyền Thoại các mùa 2013, 2015, 2016 và 2023, Á quân năm 2017 và 2022</p>
                    </div>
                  </motion.div>
            </div>
        </div>
    )
}