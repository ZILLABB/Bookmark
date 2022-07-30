import React from 'react'
import chrome from './Images/logo-chrome.svg'
import dots from './Images/bg-dots.svg'
import firefox from './Images/logo-firefox.svg'
import opera from './Images/logo-opera.svg'

const FourthSection = () => {
    return (
        <div >
            <div className='extension'>
                <h1>Download the extension</h1>
                <p>We've got more browsers in the pipeline. please do let us know if you've got a favorite you'd like us to prioritize.</p>
            </div>
            <div  className='cardDiv'>
                <div className='card'>
                    <img className='chrome' src={chrome} alt="" />
                    <h1>Add to Chrome</h1>
                    <p>Minimum version 62</p>
                    <img src={dots} alt="" />
                    <button className='cardButton'>Add & install Extension</button>
                </div>
                <div className='card'>
                    <img src={firefox} alt="" />
                    <h1>Add to Firefox</h1>
                    <p>Minimum version 55</p>
                    <img src={dots} alt="" />
                    <button className='cardButton'>Add & install Extension</button>
                </div>
                <div className='card' id='opera'>
                    <img src={opera} alt="" />
                    <h1>Add to Opera</h1>
                    <p>Minimum version 46</p>
                    <img src={dots} alt="" />
                    <button className='cardButton'>Add & install Extension</button>
                </div>
            </div>



        </div>
    )
}

export default FourthSection