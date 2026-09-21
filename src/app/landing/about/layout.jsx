import React from 'react'
import Parallax from '@/hooks/Parallax'

const layout = () => {
  return (
    <section>
        <Parallax endX={-(window.innerWidth+window.innerWidth)} endY={-window.innerHeight} offsetX={window.innerWidth+window.innerWidth} offsetY={window.innerHeight} className='transition-all duration-500 ease-out'>
            <div>
                <h1 className='opacity-100!'>
                    Test
                </h1>
            </div>
        </Parallax>
    </section>
  )
}

export default layout