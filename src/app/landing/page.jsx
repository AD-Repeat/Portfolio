import { default as HeroSection } from "@/app/landing/hero/layout" // Hero Section
import { default as AboutSection } from "@/app/landing/about/layout" // About Section

function LandingPage(){
    return <>
        <HeroSection/>
        <AboutSection/>
    </>
}

export default LandingPage