import React from 'react'
import View from '../components/Layout/View'
import Eduction from '../components/section/Eduction';
import Work from '../components/section/Work';
import Skill from '../components/section/Skill';
import resume from '../components/images/PeiYun _Resume.pdf'

export default function Resume() {
    return (
        <View>
            <div className='resume-frame'>
                <div className='title-frame'>
                    <h1 className='title'>Resume</h1>
                    <a className='downloadBtn' href={resume} download>Download CV</a>
                </div>
                <Eduction />
                <Work />
                <Skill />
                <p>2022 By Pei-Yun Hite</p>
            </div>
        </View>
    )
}