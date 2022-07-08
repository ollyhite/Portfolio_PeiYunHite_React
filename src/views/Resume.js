import React from 'react'
import View from '../components/Layout/View'
import Eduction from '../components/section/Eduction';
import Work from '../components/section/Work';
import Skill from '../components/section/Skill';

export default function Resume() {
    return (
        <View>
            <div className='resume-frame'>
                <h1 className='title'>Resume</h1>
                <Eduction />
                <Work />
                <Skill />
                <p>2022 By Pei-Yun Hite</p>
            </div>
        </View>
    )
}