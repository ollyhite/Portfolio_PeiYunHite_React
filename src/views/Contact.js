import React, { useState } from 'react'
import View from '../components/Layout/View'
import ContactForm from '../components/form/ContactForm'
import MsgModal from '../components/modal/MsgModal'

export default function Contact() {
    const [open, setOpen] = useState(false);
    const [isError, setError] = useState(false);

    const openMsgMadolFunc =(open)=>{
        setOpen(open)
    }

    const checkIsErrorFunc =(isError)=>{
        setError(isError)
    }
    return (
        <>
        <View>
            <div className='title'>
                <h1>Get In Touch</h1>
                <p></p>
                <p>Looking forward to hearing from you</p>
            </div>
            <div className='contact-frame'>
                <div className='left'>
                    <h2>Based In</h2>
                    <p>Fort Collins, CO (US)</p>
                    <h2>Email</h2>
                    <p>ollyhite8520@gmail.com</p>
                    <h2>Phone</h2>
                    <p>(123) 234-7777</p>
                </div>
                <div className='right'>
                    <ContactForm openMsgMadolFunc={openMsgMadolFunc} checkIsErrorFunc={checkIsErrorFunc}/>
                </div>
            </div>
            <p>2022 By Pei-Yun Hite</p>
        </View>
        <MsgModal open={open} isError={isError} openMsgMadolFunc={openMsgMadolFunc}/>
        </>
    )
}