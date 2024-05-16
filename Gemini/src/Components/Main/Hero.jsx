import React, { useContext } from 'react'
import user_icon from '../../assets/user_icon.png'
import compass_icon from '../../assets/compass_icon.png'
import bulb_icon from '../../assets/bulb_icon.png'
import code_icon from '../../assets/code_icon.png'
import message_icon from '../../assets/message_icon.png'
import gallery_icon from '../../assets/gallery_icon.png'
import gemini_icon from '../../assets/gemini_icon.png'
import mic_icon from '../../assets/mic_icon.png'
import send_icon from '../../assets/send_icon.png'
import { Context } from '../../Context/Context'

const Hero = () => {

  const { input, setInput,
    recentPrompt,
    setRecentPrompt,
    previousPrompt,
    setPreviousPrompt,
    showResult,
    loading,
    resultData,
    onSent
  } = useContext(Context)






  return (
    <div className='hero flex-1 min-h-screen pb-[15vh] font-outfit '>
      <div className="nav flex items-center  text-[22px] p-[20px] text-[#585858] justify-evenly font-600">
        <p>ChatBot</p>
        <img src={user_icon} alt="" className=" rounded-[50%] w-[40px] ml-[1070px]" />
      </div>
      <div className="main-container max-w-[900px] m-auto p-8  ">
        {!showResult ? <>

          <div className="greet m-[50px , 0px] text-[56px] text-[#c4c7c5] font-[500] p-[20px]  ">
            <p><span style={{
              background:
                "-webkit-linear-gradient(16deg, #4b90ff , #ff5546)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}>Hello dev , This side Chatbot</span></p>
            <p>How Can I help You Today ?</p>
          </div>
          <div className="cards grid grid-cols-4 gap-[15px] p-[20px]">
            <div className="card h-[200px] p-[15px] hover:bg-[#dfe4ed] bg-[#f0f4f9]  rounded-[10px] cursor-pointer relative">
              <p className=' text-[#585858]  text-[17px] '>Suggest beautiful paces to see on upcoming road trip .</p>
              <img src={compass_icon} alt="" className=' w-[35px] p-[5px] absolute bg-white rounded-[20px] bottom-[10px] right-[10px] ' />
            </div>
            <div className="card h-[200px] hover:bg-[#dfe4ed] p-[15px] bg-[#f0f4f9]  rounded-[10px] cursor-pointer relative">
              <p className=' text-[#585858]  text-[17px]'>Improve the readibility of following Code </p>
              <img src={code_icon} alt="" className=' w-[35px] p-[5px] absolute bg-white rounded-[20px] bottom-[10px] right-[10px] ' />
            </div>
            <div className=" card h-[200px] hover:bg-[#dfe4ed] p-[15px] bg-[#f0f4f9]  rounded-[10px] cursor-pointer relative">
              <p className=' text-[#585858]  text-[17px]'>Breifly Summarize this concept : urban planning</p>
              <img src={bulb_icon} alt="" className=' w-[35px] p-[5px] absolute bg-white rounded-[20px] bottom-[10px] right-[10px] ' />
            </div>
            <div className=" card h-[200px] hover:bg-[#dfe4ed] p-[15px] bg-[#f0f4f9]  rounded-[10px] cursor-pointer relative">
              <p className=' text-[#585858]  text-[17px]'>Brainstorm team bonding activities for our work retreat </p>
              <img src={message_icon} alt="" className=' w-[35px] p-[5px] absolute bg-white rounded-[20px] bottom-[10px] right-[10px] ' />
            </div>
          </div>
        </> :
          <div className='result'>
            <div className="result-title">
              <img src={user_icon} alt="" />
              <p>{recentPrompt}</p>
            </div>
            <div className="result-data text-black">
              <img src={gemini_icon} alt="" />
              <p dangerouslySetInnerHTML={{__html: resultData}}></p>
            </div>
          </div>
        }




        <div className="main-bottom absolute bottom-0 w-full max-w-[900px]  m-auto ">
          <div className="search-box flex justify-between items-center gap-[20px] bg-[#f0f4f9] px-[10px] py-[20px] rounded-[50px] ">
            <input type="text" onChange={(event) => { setInput(event.target.value) }} value={input} className=' flex-1 border-none bg-transparent outline-none p-[8px] text-[1-x] ' placeholder='Enter a Prompt here' />
            <div className=' flex items-center gap-[15px]'>
              <img src={gallery_icon} alt="" className=' w-6 cursor-pointer' />
              <img src={mic_icon} alt="" className=' w-6 cursor-pointer' />
              <img src={send_icon} onClick={(e) => onSent(input)} alt="" className=' w-6 cursor-pointer' />
            </div>
          </div>
          <p className="bottom-info text-[13px] mx-auto my-[15px] text-center font-[300]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore, molestiae.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Hero