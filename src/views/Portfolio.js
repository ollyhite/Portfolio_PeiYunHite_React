import React from 'react'
import View from '../components/Layout/View'
import watzPro from '../components/images/watz_img.png'
import faithPro from '../components/images/faithplaceoutdoor_img.png'
import rhythmPro from '../components/images/Rhythm-and-Booze-screenshot.png'
import rosePro from '../components/images/Flores_Rosa_Emlia_screenshot.png'
import {FaGithub} from 'react-icons/fa/'


export default function Portfolio() {
    return (
        <View>
            <div className='project-frame'>
            <h1 className='title'>Protfolio</h1>
                <div className="img">
                    <img src={watzPro} alt="watz-project images"/>
                    <p className="shadow"></p>
                    <div className='project-info'>
                        <div className='title-frame'>
                            <h3>WATZ</h3>
                            <span><a href='https://github.com/ollyhite/proj-watz' target='_blank' rel="noreferrer"><FaGithub /></a></span>
                        </div>
                        <p>Stocks Shopping Websites</p>
                    </div>
                </div>
                <div className="img">
                    <img src={faithPro} alt="FaithPlaceOutdoor-project images"/>
                    <p className="shadow"></p>
                    <div className='project-info'>
                        <div className='title-frame'>
                            <h3>FaithPlaceOutdoors</h3>
                            {/* <span><a href='/' target='_blank' rel="noreferrer"><FaGithub /></a></span> */}
                        </div>
                        <p>Non-Profits Website</p>
                    </div>
                </div>
                <div className="img">
                    <img src={rhythmPro} alt="RhythmAndBooze-project images"/>
                    <p className="shadow"></p>
                    <div className='project-info'>
                        <div className='title-frame'>
                            <h3>Rhythm and Booze</h3>
                            <span><a href='https://github.com/ollyhite/Rhythm-and-Booze' target='_blank' rel="noreferrer"><FaGithub /></a></span>
                        </div>
                        <p>Suggection about wine and muisc for you</p>
                    </div>
                </div>
                <div className="img">
                    <img src={rosePro} alt="Rose-project images"/>
                    <p className="shadow"></p>
                    <div className='project-info'>
                        <div className='title-frame'>
                            <h3>Flores Rosa Emilia</h3>
                            <span><a href='https://github.com/ollyhite/Flores-Rosa-Emilia' target='_blank' rel="noreferrer"><FaGithub /></a></span>
                        </div>
                        <p>Online flower store</p>
                    </div>
                </div>
                <p>2022 By Pei-Yun Hite</p>
            </div>
        </View>
    )
}
