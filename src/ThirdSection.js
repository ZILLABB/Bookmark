import React from 'react'
import secondTab from './Images/illustration-features-tab-1.svg'


const ThirdSection = () => {
    return (
        <div className='thirdSection'>
            <div>
            <div className='secondBlue'>

            </div>
            <div>
                <img className='secondTab' src={secondTab} alt="" />
            </div>
            </div>
            <div className='click'>
                <h1>Bookmark in one click</h1>
                <p>Organize your bookmarks however you like. Our simple drag-and-drop interface gives you complete control over how you manage your favorite sites.</p>
            </div>
        </div>
    )
}

export default ThirdSection