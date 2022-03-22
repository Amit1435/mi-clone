import React from 'react'
import "../styles/Footer.css"
import image from "../data/footer.png"

// const youtubeIcon =
// const twitterIcon =
// const facebookIcon =
// const instagramIcon =


const Footer = ({footer}) => {
    return (
        <>
        <img src={image} className='image-prefooter' />

        <div className='footer'>
            <div>
                <p>SUPPORT</p>
                {
                    footer.support.map((item,index) =>(
                        <a key={item.url} href={item.url}>{item.name}</a>
                    ))
                }
            </div>

            <div>
                <p>SHOP AND LEARN</p>
                {
                    footer.shopAndLearn.map((item,index) =>(
                        <a key={item.url} href={item.url}>{item.name}</a>
                    ))
                }
            </div>

            <div>
                <p>RETAIL STORE</p>
                {
                    footer.retailStore.map((item,index) =>(
                        <a key={item.url} href={item.url}>{item.name}</a>
                    ))
                }
            </div>

            <div>
                <p>ABOUT</p>
                {
                    footer.aboutUS.map((item,index) =>(
                        <a key={item.url} href={item.url}>{item.name}</a>
                    ))
                }
            </div>

            <div>
                <p>CONTACT US</p>
                {
                    footer.contactUs.map((item,index) =>(
                        <a key={item.url} href={item.url}>{item.name}</a>
                    ))
                }
            </div>

            <div>
                <div>
                    Chat with our virtual AI Bot (24/7 live agent Support)
                </div>
                <button>CHAT NOW</button>
            </div>
        </div>
        <div>
            <div className="footerBorder">
                <div>
                    Copyright @ 2010 - 2022 Xiaomi. All Rights Reserved
                </div>
            </div>
        </div>
        </>
    )
}

export default Footer
