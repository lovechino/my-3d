import { ImageCard } from "./ImageCard"
import faker from  "../Images/licensed-image.jpg"
import zeus from "../Images/6ad5e75a77ec041dde288d21429fc260.jpg"
import oner from "../Images/7e637dc9d92f82e52ccea582b91dda53.jpg"
import gumayusi from "../Images/fedb5204a40b9a612be4619e9ebdf098.jpg"
import keria from "../Images/b0cf78e4708d458a05c5fb04d104c555.jpg"
import { Backdrop, TestDrop } from "./BackDrop"
import { useState } from "react"
export const Product = ()=>{
    const[open,setOpen] = useState(false)
    const data = [{
        name :'Doran',
        text :'Oner, tên thật Mun Hyeon-jun, sinh ngày 24/12/2002, có sở trường ở vị trí đi rừng (jungle). Anh là một trong những người đi rừng nổi bật trong thế hệ trẻ của LCK.',
        img : oner
    },
        {
            name :'Oner',
            text :'Oner, tên thật Mun Hyeon-jun, sinh ngày 24/12/2002, có sở trường ở vị trí đi rừng (jungle). Anh là một trong những người đi rừng nổi bật trong thế hệ trẻ của LCK.',
            img : oner
        },
        {
            name :'Gumayusi',
            text : 'Gumayusi tên thật là Lee Min-hyeong, sinh ngày 06/02/2002. Cho đến nay, Gumayusi đã dành cả sự nghiệp cho T1 và tiền thân của đội là SKT......',
            img : gumayusi
        },
        {
            name :'Keria',
            text :'Keria tên thật là Ryu Min-seok, sinh ngày 14/10/2002 và cao 1m63. Keria được đánh giá là hỗ trợ toàn diện nhất đấu trường chuyên ........',
            img : keria
        }
    ]
    return (
       <div id="teammate" className=" relative border-b border-neutral-900 pb-4 flex flex-wrap justify-center items-center my-20">
         <div>
         <div className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-4xl tracking-tight text-transparent text-center">Teammate</div>
         </div>
         <div className=" my-20 flex flex-wrap justify-center items-center pb-4 gap-10">
           {
            data.map((item)=>(
                <div>
             <ImageCard imgSrc={item.img}>
                <h3 className="text-xl font-bold mb-2 ml-2">{item.name}</h3>
                <p className="ml-2">{item.text}</p>
                <div className=" space-x-4 mt-4 text-center p-5 hover:text-red-700">
                    <button onClick={()=>setOpen(!open)}>Xem Thêm</button>
                </div>
            </ImageCard>
            <Backdrop open={open} setClose={()=>setOpen(false)}>
                <p>Tính năng đang update</p>
            </Backdrop>
                </div>
            ))
           } 
        </div>
       </div>
    )
}