import React from 'react'
import HeroImage from "@/assets/images/HeroImg.svg"
import HeroImageBG from "@/assets/images/HeroImgBackground.svg"
import ZoomParallax from '@/hooks/ZoomParallax'


const layout = () => {
    return (
        <>
            <section id="Hero">
                <ZoomParallax id='Hero-Parallax' first={true}>
                    <div id="Hero-intro-con">
                        <h1 className="text-appear-top">I'm Russell Saballero</h1>
                        <h2 className="text-appear-top">I code and stuff</h2>
                    </div>
                    <div id="Hero-img-con" className='-translate-y-5'>
                        <div>
                            <img id="Hero-img-background" src={HeroImageBG} alt="" />
                            <div id="Hero-img-fade"></div>
                            <img id="Hero-img" src={HeroImage} alt="" />
                        </div>
                    </div>
                </ZoomParallax>
            </section>
        </>
    )
}

export default layout