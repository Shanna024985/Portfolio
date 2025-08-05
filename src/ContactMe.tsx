import React from 'react'
import { Phone,Mail,Linkedin } from "lucide-react"

const ContactMe = () => {
    return (
        <div className='p-7 text-left' id='contactMe'>
            <div className='flex flex-col gap-4'>
                <h1>Contact me!</h1>
                <hr />
                <div className="flex gap-3">
                    <Phone />
                    <a href="tel:+6594606912">                    +65 94606912</a>

                </div>
                <div className="flex gap-3">
                    <Mail/>
                    <a href="mailto:leeyeeshyanshanna@gmail.com">leeyeeshyanshanna@gmail.com</a>
                </div>
                <div className="flex gap-3">
                    <Linkedin/>
                    <a href="https://www.linkedin.com/in/lee-yee-shyan-shanna/">Lee Yee Shyan Shanna</a>
                </div>
            </div>

        </div>
    )
}

export default ContactMe