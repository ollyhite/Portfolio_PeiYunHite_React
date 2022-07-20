import React from 'react';

export default function Header() {
  return(
    <nav>
        <div className='menu'>
            <a className='home' href='/'>Pei-Yun Hite</a>
            <a href='/about'>About</a>
            <a href='/portfolio'>Portfolio</a>
            <a href='/contact'>Contact</a>
            <a href='/resume'>Resume</a>
        </div>
        {/* <a target='_blank' onClick={() => window.location = 'mailto:ollyhite8520@gmail.com'}>ollyhite8520@gmail.com</a> */}
        <a href='mailto:ollyhite8520@gmail.com' target='_blank' rel='noreferrer'>ollyhite8520@gmail.com</a>

    </nav>
  );
}
