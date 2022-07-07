import React,{useState} from 'react';
import MiniContact from '../card/MiniContact';

export default function Footer() {
  const linkedInUrl = "https://www.linkedin.com/in/pei-yun-hite-29a3b49a/"
  const githibUrl = "https://github.com/ollyhite"
  const [mystate, setMystate] = useState(false);
  const onBtnClick =(event)=>{
    const temState = !mystate;
    setMystate(temState)
  }
  return(
    <footer>
        <div className='social-link'>
            <a href={linkedInUrl} target='_blank'>LinkedIn</a>
            <a href={githibUrl} target='_blank'>GitHub</a>
        </div>
        <a className='mini-contact-frame' onClick={onBtnClick}>
          {mystate&&<MiniContact />}
          Get in Touch</a>
    </footer>
  );
}
