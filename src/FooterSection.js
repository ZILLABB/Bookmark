import React from 'react'
import facebook from './Images/icon-facebook.svg'
import twitter from './Images/icon-twitter.svg'
import logo from './Images/logo-bookmark.svg'

const FooterSection = () => {
    return (
        <div>
            <div className='footer'>
                <div className='footer1'>
                    <p>35,000+ ALREADY JOINED</p>
                    <h1 className='stay'>Stay up-to-date with what we're doing</h1>
                    <div className='footerNew'>
                        <input className='footerInput' type="text" />
                        <button className='footerButton'>Contact us</button>
                    </div> 
                </div>
                <div className='footerLogo'>
                    <img src={logo} alt="" />
                    <p>Features</p>
                    <p>Pricing</p>
                    <p>Contact</p>
                    <div className='footerIcons'>
                        <img src={facebook} alt="" />
                        <img src={twitter} alt="" />
                    </div>
                </div>
            </div>
        </div>

    )
}

export default FooterSection