import React from 'react';
import img from './Images/illustration-hero (1).svg';


const FirstSection = () => {
    return (
        <div className='FirstSection'> 
            <div className='bookMark'>
                <h1>A Simple Bookmark Manager</h1>
                <p>A clean and simple interface to organize your favorite websites. Open a new browser tab and see your sites load instantly. Try it for free</p>
                <div className='button'>
                    <button className='buttonDiv1'>Get it on Chrome</button>
                
                    <button className='buttonDiv2'>Get it on Firefox</button>
                </div>
            </div>
            <div className='firstBlue'>
                
            </div>
            <div className='header'>
                <img className='firstTab' src={img} alt="" />
                
            </div>
            
         </div>
          
       
    );
}

export default FirstSection; 