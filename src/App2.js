import React, { useState,useEffect } from 'react'

export const App2 = () => {
  const [f1, setF1] = useState("")
  const [f2, setF2] = useState("")
  const [f3, setF3] = useState("")

  //effects 
  useEffect(() => {
    if(f1)
    console.log("f1:",f1)
    if(f2)
    console.log("f2:",f2)
    if(f3)
    console.log("f3:",f3)
  }, [f1,f2,f3])
  
  
  
  return (
    <div>App

      <button onClick={()=>setF1(f1+1)}>f1</button>
      <button onClick={()=>setF2(f2+1)}>f2</button>
      <button onClick={()=>setF3(f3+1)}>f3</button>
    </div>
  )
}
