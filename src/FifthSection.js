import React, { useState } from 'react'
import Accordion from 'react-bootstrap/Accordion';

const FifthSection = () => {
    const [show, setShow] = useState(false)

    const showMore = () => {
        if (show===true) {
            return setShow(false)
        } else {
            
            setShow(true)
        }
    }


    return (
        <div className='fifthSection'>
            <div className='frequent'>
                <h1>Frequently Asked Questions</h1>
                <p>Here are some of our FAQs. If you have any other questions you'd like answered please feel free to email us.</p>
            </div>
            <div>
                <Accordion className='accord' defaultActiveKey="0">
                    <Accordion.Item eventKey="0">
                        <Accordion.Item eventKey="1">
                            <Accordion.Header>What is Bookmark</Accordion.Header>
                            <Accordion.Body>
                                The address of a web page that is kept on your computer so that you can find it again easily
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion.Item>
                    <Accordion.Item eventKey="2">
                        <Accordion.Header>How can I request a new Browser</Accordion.Header>
                        <Accordion.Body>
                            All major web browsers support the Ctrl+D shortcut key combination if you need to quickly access the bookmarks creation menu.
                        </Accordion.Body>
                    </Accordion.Item>
                    {show && 
                        <div>
                            <Accordion.Item eventKey="3">
                                <Accordion.Header>Is there a mobile app?</Accordion.Header>
                                <Accordion.Body>
                                    A mobile application (also called a mobile app) is a type of application designed to run on a mobile device, which can be a smartphone or tablet computer.
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="4">
                                <Accordion.Header>what about other Chromium browsers</Accordion.Header>
                                <Accordion.Body>
                                    Chromium is a free and open-source web browser project, mainly developed and maintained by Google. This codebase provides the vast majority of code for the Google Chrome browser, which is proprietary software and has some additional features.
                                </Accordion.Body>
                            </Accordion.Item>
                        </div>
                    }

                </Accordion>
                <button onClick={showMore} className='moreInfo'>{show?"Show Less":"More Info"}</button>
            </div>
        </div>
    )
}

export default FifthSection