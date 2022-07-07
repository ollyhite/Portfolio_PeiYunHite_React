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
            <h1>My Projects work</h1>
                <div className="img">
                    <img src={watzPro} alt="watz-project images"/>
                    <p class="shadow"></p>
                    <span><FaGithub /></span>
                </div>
                <div className="img">
                    <img src={faithPro} alt="FaithPlaceOutdoor-project images"/>
                    <p class="shadow"></p>
                    <span><FaGithub /></span>
                </div>
                <div className="img">
                    <img src={rhythmPro} alt="RhythmAndBooze-project images"/>
                    <p class="shadow"></p>
                    <span><FaGithub /></span>
                </div>
                <div className="img">
                    <img src={rosePro} alt="Rose-project images"/>
                    <p class="shadow"></p>
                    <span><FaGithub /></span>
                </div>
                <p>2022 By Pei-Yun Hite</p>
            </div>
        </View>
    )
}
