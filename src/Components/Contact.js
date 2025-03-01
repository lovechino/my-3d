import { FacebookFilled, InstagramFilled, TikTokFilled, YoutubeFilled } from "@ant-design/icons"
import { Typography } from "antd"
import { motion } from "framer-motion"
export  const Contact = ()=>{
    return(
        <motion.div
        whileInView={{opacity:1,y:0}}
        initial={{opacity:0,y:-100}}
        transition={{duration :0.5}}
        id="contact"
        >
            <h1 className="my-10 text-center text-4xl">Get in touch</h1>
            <div className="flex items-center justify-center gap-5">
                <Typography.Link href="https://www.facebook.com/fakerkorea" target = {'_blank'} ><FacebookFilled className=" text-5xl"/></Typography.Link>
                <Typography.Link href="https://www.instagram.com/faker/" target = {'_blank'}><InstagramFilled className=" text-5xl"/></Typography.Link>
                <Typography.Link href="https://www.youtube.com/@T1_Faker" target = {'_blank'}><YoutubeFilled className=" text-5xl"/></Typography.Link>
            </div>
        </motion.div>
    )
}