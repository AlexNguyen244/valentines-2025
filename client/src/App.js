import React, { useState } from "react";
import background from './images/background.png';
import image1 from './images/image1.png';
import image2 from './images/image2.png';
import image3 from './images/image3.png';
import image4 from './images/image4.png';
import image5 from './images/image5.png';
import cat1 from './images/cat1.gif';
import cat2 from './images/cat2.gif';
import cat3 from './images/cat3.gif';
import cat4 from './images/cat4.gif';
import cat5 from './images/cat5.gif';
import './App.css';

function App() {
  const [slide1, setSlide1] = useState(true);
  const [slide2, setSlide2] = useState('none');
  const [slide3, setSlide3] = useState('none');
  const [slide4, setSlide4] = useState('none');
  const [slide5, setSlide5] = useState('none');
  const [slide6, setSlide6] = useState('none');
  const [slide7, setSlide7] = useState('none');
  const [slide8, setSlide8] = useState('none');
  const [slide9, setSlide9] = useState('none');
  const [slide10, setSlide10] = useState('none');

  const button1 = () => {
    setSlide1('none');
    setSlide2(true);
  }

  const button2 = () => {
    setSlide2('none');
    setSlide3(true);
  }

  const button3 = () => {
    setSlide3('none');
    setSlide4(true);
  }

  const button4 = () => {
    setSlide4('none');
    setSlide5(true);
  }

  const yes= () => {
    setSlide5('none');
    setSlide7('none');
    setSlide8('none');
    setSlide9('none');
    setSlide10('none');
    setSlide6(true);
  }

  const no1= () => {
    setSlide5('none');
    setSlide7(true);
  }

  const no2= () => {
    setSlide7('none');
    setSlide8(true);
  }

  const no3= () => {
    setSlide8('none');
    setSlide9(true);
  }

  const no4= () => {
    setSlide9('none');
    setSlide10(true);
  }

  return (
    <div style={{
      backgroundImage: `url(${background})`,
      height: "100vh"
    }}>
      <div className='box' style={{ display: slide1 }}>
        <h1>Hey Babe 💕</h1>
        <img src={image1} className="image" alt="bri"/>
        <div>
          <button className="button" onClick={button1}>Next</button>                
        </div>
      </div>

      <div className='box' style={{ display: slide2 }}>
        <h1>Will You 🫵</h1>
        <img src={image2} className="image" alt="image2"/>
        <div>
          <button className="button" onClick={button2}>Next</button>                
        </div>
      </div>

      <div className='box' style={{ display: slide3 }}>
        <h1>Be My 🤭</h1>
        <img src={image3} className="image" alt="image3"/>
        <div>
          <button className="button" onClick={button3}>Next</button>                
        </div>
      </div>

      <div className='box' style={{ display: slide4 }}>
        <h1>Valentine ❤️</h1>
        <img src={image4} className="image" alt="image4"/>
        <div>
          <button className="button" onClick={button4}>Next</button>                
        </div>
      </div>

      <div className='box' style={{ display: slide5 }}>
        <h1>Please 🥺</h1>
        <img src={image5} className="image" alt="image5"/>
        <div>
          <button className="button yes" onClick={yes}>Yes</button> 
          <button className="button" onClick={no1}>No</button>                
        </div>
      </div>

      <div className='box' style={{ display: slide6 }}>
        <h1>YAY WOOHOO! 🥰🥰🥰</h1>
        <img src={cat1} className="image-yes" alt="cat1"/>
      </div>

      <div className='box' style={{ display: slide7 }}>
        <h1>Why Not? 🥲</h1>
        <img src={cat2} className="image" alt="cat2"/>
        <div>
          <button className="button yes" onClick={yes}>Yes</button> 
          <button className="button" onClick={no2}>No</button> 
        </div> 
      </div>

      <div className='box' style={{ display: slide8 }}>
        <h1>Please Say Yes 😔</h1>
        <img src={cat3} className="image-clear" alt="cat3"/>
        <div>
          <button className="button yes" onClick={yes}>Yes</button> 
          <button className="button" onClick={no3}>No</button> 
        </div>
      </div>

      <div className='box' style={{ display: slide9 }}>
        <h1>I'm Hurt 😭</h1>
        <img src={cat4} className="image" alt="cat4"/>
        <div>
          <button className="button yes" onClick={yes}>Yes</button> 
          <button className="button" onClick={no4}>No</button>
        </div>
      </div>

      <div className='box' style={{ display: slide10 }}>
        <h1>Click Yes! 😡</h1>
        <img src={cat5} className="image" alt="cat5"/>
        <div>
          <button className="button yes" onClick={yes}>Yes</button>
        </div>
      </div>

    </div>
  );
}

export default App;
