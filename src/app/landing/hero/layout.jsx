import React from 'react'
import HeroImage from "@/assets/images/HeroImg.svg"
import HeroImageBG from "@/assets/images/HeroImgBackground.svg"
import Parallax from '@/hooks/Parallax'


const layout = () => {
    return (
        <>
            <section id="Hero" className="flex justify-center">
                <Parallax id="Hero-Parallax" className="" first={true}>
                    <div id="Hero-intro-con">
                        <h1 className="text-appear-top">Russell Saballero</h1>
                        <h2 className="text-appear-top">Software Development and More</h2>
                    </div>
                    <div id="Hero-img-con">
                        <div>
                            <img id="Hero-img-background" src={HeroImageBG} alt="" />
                            <div id="Hero-img-fade"></div>
                            <img id="Hero-img" src={HeroImage} alt="" />
                        </div>
                    </div>
                </Parallax>
            </section>
        </>
    )
}

export default layout