
import { useState } from 'react';
import './App.css';
import { ButtonContainer } from './components/ButtonContainer';

function App() {
  const [color, setColor] = useState('#000000');
  const [color2, setColor2] = useState('#000000');
  const [color3, setColor3] = useState('#000000');
  const [color4, setColor4] = useState('#000000');
  const [backgrounColor, setBackGroundColor] = useState('#e3cca7');
  
  const btnNames = [
    {
      name1: 'Click me',
      name2: 'And me',
      name3: 'Me too',
      name4: 'Me also',
    },
  ];

  function randomColor(){
    const random = Math.floor(Math.random() * 10000000).toString(16);
    const randomBackground = Math.floor(Math.random() * 15158899).toString(16);
    setColor('#' + random);
    setBackGroundColor('#' + randomBackground);
   
    
  }
  function randomColor2(){
    const random = Math.floor(Math.random() * 10000000).toString(16);
    const randomBackground = Math.floor(Math.random() * 15158899).toString(16);
    setColor2('#' + random);
    setBackGroundColor('#' + randomBackground);
    
  }
  function randomColor3(){
  const random = Math.floor(Math.random() * 10000000).toString(16);
    const randomBackground = Math.floor(Math.random() * 15158899).toString(16);
    setColor3('#' + random);
    setBackGroundColor('#' + randomBackground);
    
  }
  function randomColor4(){
    const random = Math.floor(Math.random() * 10000000).toString(16);
    const randomBackground = Math.floor(Math.random() * 15158899).toString(16);
    setColor4('#' + random);
    setBackGroundColor('#' + randomBackground);
    
  }
  

  return (
    <>
      <div className='mainContainer' style={{backgroundColor:backgrounColor}}>
        <h1>Random colors</h1>
        <ButtonContainer 
        btnNames = {btnNames} 
        generateColor1 = {randomColor} 
        generateColor2 = {randomColor2} 
        generateColor3 = {randomColor3} 
        generateColor4 = {randomColor4} 
        currColor1 = {color}
        currColor2 = {color2}
        currColor3 = {color3}
        currColor4 = {color4}
        background = {backgrounColor}
         />
      </div>
    </>
  )
}

export default App
