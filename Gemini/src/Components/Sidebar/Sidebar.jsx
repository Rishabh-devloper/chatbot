import React, { useState } from 'react'
import plus_icon from '../../assets/plus_icon.png'
import menu_icon from '../../assets/menu_icon.png'
import message_icon from '../../assets/message_icon.png'
import setting_icon from '../../assets/setting_icon.png'
import question_icon from '../../assets/question_icon.png'
import history_icon from '../../assets/history_icon.png'

const Sidebar = () => {

    const [Extnded , setExtended]=useState(false)


  return (
    <div className='sidebar min-h-screen inline-flex justify-between bg-[#f0f4f9] flex-col px-[15px] py-[25px] font-sans '>
        <div className="top">
            <img src={menu_icon} onClick={()=>setExtended(prev=>!prev)} className=" cursor-pointer w-[20px] block ml-[10px]"alt="" />
            <div className="newChat mt-[60px] inline-flex gap-2.5 items-center px-2.5 py-3.5 bg-[#e6eaf1] rounded-3xl cursor-pointer text-gray-800">
                <img src={plus_icon} className='w-[20px] ' alt="" />
                {Extnded?<p>New chat</p>:null}
            </div>
            {Extnded?<div className="recents flex flex-col">
                <p className="recent_tite mt-8 mb-4.5"> Recent</p>
                <div className="recent_entry hover:bg-[#e2e6eb] flex items-star gap-2.5 rounded-[50px]
                 p-2.5 pr-[40px] text-[#282828]">
                    <img src={message_icon} alt="" className="w-[20px] block ml-[10px]" />
                    <p>What is react</p>
                </div>
            </div>: null }
        </div>
        <div className="bottom flex flex-col">
            <div className="bottom_item cursor-pointer recent_entry hover:bg-[#e2e6eb] flex items-star gap-2.5 rounded-[50px]
                 p-2.5 pr-[40px] text-[#282828] ">
            <img src={question_icon} alt="" className="w-[20px] block ml-[10px]" />
                {Extnded?<p>Help</p>:null}
            </div>
            <div className="bottom_item cursor-pointer recent_entry hover:bg-[#e2e6eb] flex items-star gap-2.5 rounded-[50px]
                 p-2.5 pr-[40px] text-[#282828]">
            <img src={history_icon} alt="" className="w-[20px] block ml-[10px]" />
            {Extnded?<p>Activity</p>:null}
            </div>
            <div className="bottom_item cursor-pointer recent_entry hover:bg-[#e2e6eb] flex items-star gap-2.5 rounded-[50px]
                 p-2.5 pr-[40px] text-[#282828]">
            <img src={setting_icon} alt="" className="w-[20px] block ml-[10px]" />
                {Extnded?<p>Settings</p>:null}
            </div>
            
        </div>
    </div>
  )
}

export default Sidebar