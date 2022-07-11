import React from 'react'
import View from '../components/Layout/View'
import aboutImg from '../components/images/olly-pic.svg'
import resume from '../components/images/PeiYun _Resume.pdf'

export default function About() {
    return (
        <View>
            <div className='about-frame'>
                <div className='left'>
                    <h1>About Pei</h1>
                    <img src={aboutImg}/>
                </div>
                <div className='right'>
                    <p>Full stack developer. Joined at University of Denver full-stack bootcamp in 2022. Has Front-end Engineer with two year experience in designing and developing user interface, testing, debugging, and maintaining web-sites. Good communication with team work, back-end engineers and project managers.</p>
                    <a className='downloadBtn' href={resume} download>Download CV</a>
                </div>
            </div>
        </View>
        
    )
}
