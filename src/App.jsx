import { useState } from 'react'
import './App.css'
import  {CiDark} from 'react-icons/ci'
import {MdDarkMode} from 'react-icons/md'


function App() {
const [background, setBackground] = useState(false)
const [text, setText] = useState("")
const [outPut, setOutPut] = useState("")


const Emojie = (text) => {
   if(text.length > 1){
    return "🤸"
   }else{
    return ""
   }
}


function changeText  (parameter){
if(parameter.trim().length === 0){
  setText("")
  setOutPut("")
}else{
  const genText = parameter.replace(/ +/g, Emojie(parameter))

  setText(genText)
  setOutPut(setOutPut)
}
}

function clearText (){
  setText("")
  setOutPut("")
}

const changeBackground = () => {
  setBackground(!background)
 }




  return (
    <div className={background ? "black" : "white"}>
  
    
   <div className='container'>
  
  <div onClick={changeBackground} className='svgs'>
    {background ? <MdDarkMode color='black' fontSize={32}/> : <CiDark color='black' fontSize={32}/>}
  </div>
    <div className='image'>
      <img src='https://em-content.zobj.net/source/microsoft-teams/363/person-cartwheeling_1f938.png'></img>
    </div>
   <div>
    <h1>Beshy ko yan ih!!</h1>
   </div>
  <div className='inputs'>
<div>
<input type='text' placeholder='input any...' onChange={(e) => changeText(e.target.value)}/>
</div>

  </div>
  <div className='buttons'>
<button onClick={() => clearText()}>Clear</button>
</div>

  <div className="output">
     
   <h2> {text}</h2>   
        </div>

       
   
   </div>
   </div>
  )
}

export default App
