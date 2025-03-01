import { ImageCard } from "./ImageCard"
import faker from  "../Images/licensed-image.jpg"
import doran from "../Images/7dd8d762026b7a0f062c9bfee35fc2d1.jpg"
import oner from "../Images/7e637dc9d92f82e52ccea582b91dda53.jpg"
import gumayusi from "../Images/fedb5204a40b9a612be4619e9ebdf098.jpg"
import keria from "../Images/b0cf78e4708d458a05c5fb04d104c555.jpg"
import { Backdrop, TestDrop } from "./BackDrop"
import { useState } from "react"
import { Typography } from "antd"
import { InstagramFilled } from "@ant-design/icons"
export const Product = ()=>{
    const[open,setOpen] = useState(false)
    const[value,setValue] = useState(0)
    const data = [{
        id:1,
        name :'Doran',
        text :'Thông tin đang được update',
        img : doran,
        insta : "https://www.instagram.com/choi_doran/"
    },
        {
            id:2,
            name :'Oner',
            text :'Oner, tên thật Mun Hyeon-jun, sinh ngày 24/12/2002, có sở trường ở vị trí đi rừng (jungle). Anh là một trong những người đi rừng nổi bật trong thế hệ trẻ của LCK.',
            img : oner,
            insta : "https://www.instagram.com/t1_oner/"
        },
        {
            id:3,
            name :'Gumayusi',
            text : 'Gumayusi tên thật là Lee Min-hyeong, sinh ngày 06/02/2002. Cho đến nay, Gumayusi đã dành cả sự nghiệp cho T1 và tiền thân của đội là SKT......',
            img : gumayusi,
            insta : 'https://www.instagram.com/t1_gumayusi/'
        },
        {
            id:4,
            name :'Keria',
            text :'Keria tên thật là Ryu Min-seok, sinh ngày 14/10/2002 và cao 1m63. Keria được đánh giá là hỗ trợ toàn diện nhất đấu trường chuyên ........',
            img : keria,
            insta : 'https://www.instagram.com/keria_minseok/'
        }
    ]
    let getTeam = data.find((item) => item.id === value)
    return (
       <div id="teammate" className=" relative border-b border-neutral-900 pb-4 flex flex-wrap justify-center items-center my-20">
         <div>
         <div className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-4xl tracking-tight text-transparent text-center">Teammate</div>
         </div>
         <div className=" my-20 flex flex-wrap justify-center items-center pb-4 gap-10">
           {
            data.map((item)=>(
                <div key={item.id}>
             <ImageCard imgSrc={item.img} key={item.id}>
                <h3 className="text-xl font-bold mb-2 ml-2">{item.name}</h3>
                <p className="ml-2">{item.text}</p>
                <div className=" space-x-4 mt-4 text-center p-5 hover:text-red-700">
                    <button onClick={
                        ()=>{
                        setOpen(!open)
                        setValue(item.id)
                    }
                        }>Xem Thêm</button>
                </div>
            </ImageCard>
            
            <Backdrop open={open} setClose={()=>setOpen(false)} key={item.id}>
                <div className=" flex max-w-5xl">
                    <img className=" max-w-xs" src= {getTeam?.img}/>
                   <div className=" max-w-xl ml-10">
                       <p>{getTeam?.name}</p>
                       <p>{getTeam?.text}</p>
                       <Typography.Link href= {getTeam?.insta} > <InstagramFilled className=" text-5xl"/> </Typography.Link>
                   </div>
                </div>
            </Backdrop>
                </div>
            ))
           } 
        </div>
       </div>
    )
}


//hàm find array
