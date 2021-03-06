import React from 'react'
import View from '../components/Layout/View'
import homeImg from '../components/images/olly-pic.svg'


export default function Home() {
    return (
        <View>
            <div className='home-frame'>
                <img className='main-img' src={homeImg} alt="main-images"/>
                <div className='right'>
                    <h1>Pei-Yun Hite</h1>
                    <p></p>
                    <a href='/portfolio'>{`View my projects >>`}</a>
                </div>
            </div>
        </View>
    )
}
