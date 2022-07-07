import React from 'react'
import ContactForm from '../form/ContactForm'
import { MdClose } from "react-icons/md";
export default function MiniContact(props) {
    return (
        <div className='mini-card-frame'>
            <div className='top'>
                <h1>Contact me</h1>
                <button onClick={()=>props.closeCard()}><MdClose/></button>
            </div>
            <ContactForm/>
        </div>
    )
}
