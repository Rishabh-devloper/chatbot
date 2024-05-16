import React from 'react'

const Prompt = () => {
  return (
    <div>
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
    </div>
  )
}

export default Prompt