import { default as HeroSection } from "@/app/landing/hero/layout" // Hero Section
import { default as AboutSection } from "@/app/landing/about/layout" // About Section
import { default as ProjectsSection } from "@/app/landing/projects/layout" // About Section

function LandingPage(){
    return <>
        <HeroSection/>
        <AboutSection/>
    </>
}

export default LandingPage