import React,{useState} from 'react'
import ContactForm from '../form/ContactForm'
import { MdClose } from "react-icons/md";
import MsgModal from '../modal/MsgModal';
export default function MiniContact(props) {
    const [open, setOpen] = useState(true);
    const [isError, setError] = useState(false);

    const openMsgMadolFunc =(open)=>{
        setOpen(open)
    }

    const checkIsErrorFunc =(isError)=>{
        setError(isError)
    }
    return (
        <>
        <div className='mini-card-frame'>
            <div className='top'>
                <h1>Contact me</h1>
                <button onClick={()=>props.closeCard()}><MdClose/></button>
            </div>
            <ContactForm openMsgMadolFunc={openMsgMadolFunc} checkIsErrorFunc={checkIsErrorFunc}/>
            
        </div>
        <MsgModal open={open} isError={isError} openMsgMadolFunc={openMsgMadolFunc}/>
        </>
    )
}
