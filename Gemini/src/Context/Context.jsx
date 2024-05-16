import React, { createContext, useState , useEffect } from 'react'
import runChat from '../config/Chatbot'
export const Context = createContext();
const ContextProvider = (props) => {

    const [input, setInput] = useState('')
    const [recentPrompt, setRecentPrompt] = useState('')
    const [question , setQuestion] = useState('')
    const [prompt , setPrompt]= useState(false)
    const [answer , setAnswer]= useState()
    const [previousPrompt, setPreviousPrompt] = useState([])
    const [showResult, setShowResult] = useState(false)
    const [loading, setLoading] = useState(false)
    const [resultData, setResultData] = useState("")

    const onSent = async (prompt) => {

        setQuestion(prompt)
        setLoading(true)
        const response=await runChat(prompt)
        
        setAnswer(response)
        setLoading(false)

        // setResultData("");
        // setLoading(true);
        // setShowResult(true);
        // setRecentPrompt(input);
        // const response = await runChat(input);
        // setResultData(response); 
        // setLoading(false);
        // setInput("");
      };
      
            
      


    const contextValue = {
        input,
        setInput,
        recentPrompt,
        setRecentPrompt,
        previousPrompt,
        setPreviousPrompt,
        showResult,
        loading,
        resultData,
        onSent,
        prompt,
        setPrompt,
        question,
        answer,
    }
    return (
        <Context.Provider value={contextValue}>
            {props.children}
        </Context.Provider>
    )
}

export default ContextProvider