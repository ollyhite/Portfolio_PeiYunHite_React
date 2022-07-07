import React,{useState} from 'react';
import MiniContact from '../card/MiniContact';

export default function Footer() {
  const linkedInUrl = "https://www.linkedin.com/in/pei-yun-hite-29a3b49a/"
  const githibUrl = "https://github.com/ollyhite"
  const [openContact, setOpen] = useState(false);
  const onBtnClick =(event)=>{
    const temState = !openContact;
    setOpen(temState)
  }
  const closeCard = (event)=>{
    setOpen(false)
  }
  return(
    <footer>
        <div className='social-link'>
            <a href={linkedInUrl} target='_blank' rel="noreferrer">LinkedIn</a>
            <a href={githibUrl} target='_blank' rel="noreferrer">GitHub</a>
        </div>
        <div className='mini-contact-frame'>
            <a onClick={onBtnClick}>Get in Touch</a>
            {openContact&&<MiniContact closeCard={closeCard}/>}
        </div>
    </footer>
  );
}
