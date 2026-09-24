import React from 'react'
import Parallax from '@/hooks/Parallax'

const layout = () => {
    return (
        <section>
            <Parallax id='Projects'>
                <div className='flex justify-center'>
                    <h1 className='opacity-100!'>
                        Projects
                    </h1>
                </div>
            </Parallax>
        </section>
    )
}

export default layout