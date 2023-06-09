import React from "react";
import { useState, useEffect } from "react";
import './curosel.css';

export const Curosel = () => {
    const [ind, setIndex]=useState(0);

    const imgobj=[{
        id:1,
        url:'https://cdn.shopclues.com/images/banners/2023/Jan/21/HB1_Anniversary_Web_SYM_21Jan23.jpg',

    },
{
    
        id:2,
        url:'https://cdn.shopclues.com/images/banners/2023/Jan/21/HB2_Jacket_Web_SYM_21Jan23.jpg',
        
    
},
{
    id:3,
    url:'https://cdn.shopclues.com/images/banners/2023/Jan/21/HB3_Blockbuster_Web_SYM_21Jan23.jpg',
    
},
{
    id:4,
    url:'https://cdn.shopclues.com/images/banners/2023/Jan/21/HB4_JDD_Web_SYM_21Jan23.jpg',
    
},
{
    id:5,
    url:'https://cdn.shopclues.com/images/banners/2023/Jan/11/ShopcluesPCRefresh_Web_SYM_11Jan23.jpg',
    
}
]


 useEffect(()=>{

    setTimeout(()=>{
        if(ind===imgobj.length-1){
    setIndex(0);
        }
        else {
            setIndex(ind+1);
        }
    },2000);
},[ind])

return (
    <div className='curosel'>

         <div className='hoverimage'>
              <img src={imgobj[ind].url} 
              alt="" />
         </div>
    </div>
)
}