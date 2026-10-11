import React from 'react'

import ZoomParallax from '@/hooks/ZoomParallax'

const layout = () => {
    return (
        <section id='About' className='z-2'>
            <ZoomParallax id="About-Parallax">
                <div className=' flex justify-center items-center h-full'>
                    <h1 className='wip opacity-100!'>
                        Work in progress
                    </h1>
                </div>
            </ZoomParallax>
        </section>
    )
}

export default layout